import { Injectable, isDevMode } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environment/environment';
import { basicCompetitionsUrl } from '../constants/constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const isApiRequest = request.url.startsWith(basicCompetitionsUrl);

    if (isApiRequest && isDevMode()) {
      request = request.clone({
        setHeaders: {
          'X-Auth-Token': environment.apiKey,
          'Content-Type': 'application/json',
        },
      });
    }
    return next.handle(request);
  }
}
