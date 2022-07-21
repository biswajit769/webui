import { Injectable,Injector } from '@angular/core';
import{HttpClient,HttpInterceptor} from '@angular/common/http'
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements HttpInterceptor{


  constructor(private injector:Injector) { }
   intercept(req,next){
     let interservice1 = this.injector.get(LoginService)
     let  tokensavereq=req.clone({
       setHeaders:{
        
        Authorization: `${interservice1.getToken()}`
        // Authorization: 'Bearer xx.yy.zz'
       }
     })
     return next.handle(tokensavereq)
   }
}
