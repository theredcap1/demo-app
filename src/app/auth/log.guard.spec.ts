import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LogGuard } from './log.guard';
import {AuthService} from "./auth.service";

describe('LogGuard', () => {
  let guard: LogGuard;

  beforeEach(() => {
    const authSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        LogGuard,
        { provide: AuthService, useValue: authSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    guard = TestBed.inject(LogGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
