import { TestBed, inject } from '@angular/core/testing';

import { AddExpService } from './add-exp.service';

describe('AddExpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddExpService]
    });
  });

  it('should be created', inject([AddExpService], (service: AddExpService) => {
    expect(service).toBeTruthy();
  }));
});
