import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, switchMap, catchError } from 'rxjs';
import { ApiService } from '../../services/api/api.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private apiService: ApiService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('access');

    let authReq = req;
    if (accessToken) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && localStorage.getItem('refresh')) {
          // Intentar refrescar el token
          return this.apiService.refreshToken().pipe(
            switchMap((res) => {
              const newAccess = res.access;
              localStorage.setItem('access', newAccess);

              // Reintenta la petición original con el nuevo token
              const newAuthReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${newAccess}`
                }
              });

              return next.handle(newAuthReq);
            })
          );
        }

        return throwError(() => error);
      })
    );
  }
}
