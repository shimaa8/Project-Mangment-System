/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmplyeeService } from './emplyee.service';

describe('Service: Emplyee', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmplyeeService]
    });
  });

  it('should ...', inject([EmplyeeService], (service: EmplyeeService) => {
    expect(service).toBeTruthy();
  }));
});
