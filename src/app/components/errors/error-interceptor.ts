import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import Swal from 'sweetalert2'

import { ErrorComponent } from './error/error.component'

//Angular convention to inject interceptors and provide it in the app.module.ts which is different from other user created services which can be provided directly in the injectable decorator
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error.message) {
          let errorMessage = error.error.message
          Swal({
            title: 'An Error Occured!',
            text: errorMessage,
            type: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#28a745',
          })
        } else {
          console.log(error)
          Swal({
            title: 'An Unknown Error Occured!',
            text: 'Please make sure you have internet connection.',
            type: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#28a745',
          })
        }
        // this.dialog.open(ErrorComponent, {data: {message: errorMessage}});
        return throwError(error)
      }),
    )
  }
}
