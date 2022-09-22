import { TestBed } from '@angular/core/testing';

import { ShareStateService } from './share-state.service';

describe('ShareStateService', () => {
  let service: ShareStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
