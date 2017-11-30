import { TestBed, inject } from '@angular/core/testing';

import { ListOfExpService } from './list-of-exp.service';

describe('ListOfExpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListOfExpService]
    });
  });

  it('should be created', inject([ListOfExpService], (service: ListOfExpService) => {
    expect(service).toBeTruthy();
  }));
});
