/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FornecedoresService } from './fornecedores.service';

describe('FornecedoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FornecedoresService]
    });
  });

  it('should ...', inject([FornecedoresService], (service: FornecedoresService) => {
    expect(service).toBeTruthy();
  }));
});
