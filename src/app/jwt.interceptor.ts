import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const JwtInterceptorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next) => {
  const cookie = inject(CookieService)
  const token = cookie.get('token')
  if(token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    })
  }
  return next(req)
};
