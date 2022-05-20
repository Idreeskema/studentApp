import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable,Injector } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private inject:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice=this.inject.get(DataService)
    let authreq=req;
     authreq =this.addTokenHeader(req,authservice.Gettoken());
    //  req.clone({
    //   setHeaders:{
    //     Authorization:`Bearer ${authservice.Gettoken()}`
    //   }
    // });
  
    return next.handle(authreq)
    .pipe(
      catchError((errordata) => {
         if(errordata.status === 401){
           authservice.logout();
           alert('incorrect Password')
         }
         return throwError(errordata)
      })
  )

  }
  addTokenHeader(req: HttpRequest<any>,AccessToken:any){
    return req.clone({headers:req.headers.set('Authorization','Bearer '+AccessToken)});

  }

}
