import { TestBed } from '@angular/core/testing';

import { KomutService } from './komut.service';

describe('KomutService', () => {
  let service: KomutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KomutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
