import { TestBed, inject } from '@angular/core/testing';

import { KegService } from './keg.service';

describe('KegService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KegService]
    });
  });

  it('should be created', inject([KegService], (service: KegService) => {
    expect(service).toBeTruthy();
  }));
});
