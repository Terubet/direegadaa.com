import { TestBed, async, inject } from '@angular/core/testing';

import { Auth } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth]
    });
  });

  it('should ...', inject([Auth], (guard: Auth) => {
    expect(guard).toBeTruthy();
  }));
});
