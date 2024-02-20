import { TestBed } from '@angular/core/testing';

import { ApimortyService } from './apimorty.service';

describe('ApimortyService', () => {
  let service: ApimortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApimortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
