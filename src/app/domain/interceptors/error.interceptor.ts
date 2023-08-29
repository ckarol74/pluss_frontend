import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { SnackbarService } from 'src/app/common/snackbar/snackbar.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private $auth: AuthService, private $snackBar: SnackbarService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((err) => {
        switch (err.status) {
          case 400:
            this.$snackBar.openDanger('Error de validación', err.error.message);
            break;

          case 401:
            this.$auth.logout();
            this.$snackBar.openDanger(
              'Error de autenticación',
              'Su sesión a expirado'
            );
            break;

          case 403:
            err.error.errors.forEach((error: any) => {
              this.$snackBar.openDanger(
                `Error de validación, ${error.message}`
              );
            });
            break;

          case 404:
            this.$snackBar.openDanger(
              'Error, recurso no encontrado',
              `${err.error.message}`
            );
            break;

          case 500:
            this.$snackBar.openDanger(`Error interno, ${err.error.message}`);
            break;
          case 0:
            this.$snackBar.openDanger(`Servidor fuera de línea`);
            break;
          case 504:
            this.$snackBar.openDanger(`Servidor fuera de línea`);
            break;

          default:
            this.$snackBar.openDanger(`Error interno`);
            break;
        }
        console.log(err);
        return throwError(err);
      })
    );
  }
}
