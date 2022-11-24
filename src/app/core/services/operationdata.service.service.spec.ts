import { TestBed } from '@angular/core/testing';

import { OperationdataServiceService } from './operationdata.service.service';

describe('OperationdataServiceService', () => {
  let service: OperationdataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationdataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
