import { TestBed, inject } from '@angular/core/testing';

import { User1Service } from './user1.service';

describe('User1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [User1Service]
    });
  });

  it('should be created', inject([User1Service], (service: User1Service) => {
    expect(service).toBeTruthy();
  }));
});
