import { TestBed, inject } from '@angular/core/testing';

import { MservicesService } from './mservices.service';

describe('MservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MservicesService]
    });
  });

  it('should be created', inject([MservicesService], (service: MservicesService) => {
    expect(service).toBeTruthy();
  }));
});
