import { TestBed } from '@angular/core/testing';

import { EspecialistasResolver } from './especialistas.resolver';

describe('EspecialistasResolver', () => {
  let resolver: EspecialistasResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EspecialistasResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
