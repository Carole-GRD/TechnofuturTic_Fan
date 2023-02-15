import { TestBed } from '@angular/core/testing';

import { LastSegmentService } from './last-segment.service';

describe('LastSegmentService', () => {
  let service: LastSegmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastSegmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
