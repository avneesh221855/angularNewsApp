import { TestBed, inject } from '@angular/core/testing';

import { AddToFavouriteService } from './add-to-favourite.service';

describe('AddToFavouriteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddToFavouriteService]
    });
  });

  it('should be created', inject([AddToFavouriteService], (service: AddToFavouriteService) => {
    expect(service).toBeTruthy();
  }));
});
