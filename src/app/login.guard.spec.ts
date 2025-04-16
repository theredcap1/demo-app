import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginGuard } from './login.guard';
import { SessionManagementService } from './auth/session-management.service';
import { AuthGuard } from './auth/auth.guard';

describe('LoginGuard', () => {
  let loginGuard: LoginGuard;
  let router: Router;
  let sessionManagementService: jasmine.SpyObj<SessionManagementService>;
  let authGuard: jasmine.SpyObj<AuthGuard>;

  beforeEach(() => {
    const sessionSpy = jasmine.createSpyObj('SessionManagementService', ['isAuthenticated']);
    const authGuardSpy = jasmine.createSpyObj('AuthGuard', ['canActivate']);

    TestBed.configureTestingModule({
      providers: [
        LoginGuard,
        { provide: Router, useValue: { navigate: jasmine.createSpy() } },
        { provide: SessionManagementService, useValue: sessionSpy },
        { provide: AuthGuard, useValue: authGuardSpy },
      ],
    });

    loginGuard = TestBed.inject(LoginGuard);
    router = TestBed.inject(Router);
    sessionManagementService = TestBed.inject(SessionManagementService) as jasmine.SpyObj<SessionManagementService>;
    authGuard = TestBed.inject(AuthGuard) as jasmine.SpyObj<AuthGuard>;
  });

  it('should be created', () => {
    expect(loginGuard).toBeTruthy();
  });

  it('should navigate to /dashboard if authenticated', () => {
    sessionManagementService.isAuthenticated.and.returnValue(true);

    const result = loginGuard.canActivate({} as any, {} as any);

    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
    expect(result).toBeFalse();
  });

  it('should return true if not authenticated', () => {
    sessionManagementService.isAuthenticated.and.returnValue(false);

    const result = loginGuard.canActivate({} as any, {} as any);

    expect(router.navigate).not.toHaveBeenCalled();
    expect(result).toBeTrue();
  });
});
