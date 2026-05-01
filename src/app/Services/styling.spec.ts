import { TestBed } from '@angular/core/testing';

import { Styling } from './styling';

describe('Styling', () => {
  let service: Styling;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Styling);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
