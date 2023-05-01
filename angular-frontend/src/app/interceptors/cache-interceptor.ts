import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, of, tap, share, catchError} from "rxjs";

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  private cache: Map<string, HttpResponse<any>> = new Map()
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if(req.method !== "GET" && (req.url.includes('/movies') || req.url.includes('/reviews'))) {
      return next.handle(req)
    }
    const cachedResponse = this.cache.get(req.urlWithParams);
    if(cachedResponse) {

      return next.handle(req).pipe(
        catchError(event => {
          return of(cachedResponse.clone());
        })
      );

    }else {
      return next.handle(req).pipe(
        tap(stateEvent => {
          if(stateEvent instanceof HttpResponse) {
            this.cache.set(req.urlWithParams, stateEvent.clone())
          }
        }),
      share());
    }
  }
}

