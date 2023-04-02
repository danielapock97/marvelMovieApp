import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewListComponent } from './main-view-list.component';

describe('MainViewListComponent', () => {
  let component: MainViewListComponent;
  let fixture: ComponentFixture<MainViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
