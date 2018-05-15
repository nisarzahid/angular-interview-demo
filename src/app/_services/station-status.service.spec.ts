import { TestBed, inject } from '@angular/core/testing';

import { StationStatusService } from './station-status.service';

describe('StationStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StationStatusService]
    });
  });

  it('should be created', inject([StationStatusService], (service: StationStatusService) => {
    expect(service).toBeTruthy();
  }));
});
