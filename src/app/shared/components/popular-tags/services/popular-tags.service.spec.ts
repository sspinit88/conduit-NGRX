import { TestBed } from '@angular/core/testing';

import { PopularTegsService } from './popular-tags.service';

describe('PopularTegsService', () => {
  let service: PopularTegsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularTegsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
