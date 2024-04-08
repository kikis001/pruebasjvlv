import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RoomService } from '../services/room.service';

export const authGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService)
  const router = inject(Router)

  const token = cookieService.check('token')

  if(!token) {
    router.navigate(['', 'login'])
  }
  return true;
};
