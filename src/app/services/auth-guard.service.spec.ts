import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });

  it('should be activatable', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service.canActivate).toBeTruthy();
  });
});
