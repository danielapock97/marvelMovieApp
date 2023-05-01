import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, retry, timer} from "rxjs";

@Injectable()
export class RetryInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    if(req.method !== "POST"
    && req.method !== "DELETE"
    && req.method !== "PUT") {
      return next.handle(req);
    }

    return next.handle(req).pipe(retry({count: 10, delay: this.shouldRetry}));
  }

  shouldRetry(error: HttpErrorResponse) {
    if(error.status === 0) {
      return timer(1500);
    }
    throw error;
  }
}


