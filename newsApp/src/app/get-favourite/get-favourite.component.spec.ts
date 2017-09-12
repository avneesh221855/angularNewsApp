import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFavouriteComponent } from './get-favourite.component';

describe('GetFavouriteComponent', () => {
  let component: GetFavouriteComponent;
  let fixture: ComponentFixture<GetFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFavouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
