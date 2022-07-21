import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public BASE_URL:any='http://127.0.0.1:8000/'


  
  constructor(private Http: HttpClient) { }

  public logDATA;

  signup(data):Observable<any>{
    console.log('signupp dataaaaa',data);
    let url:string = `${this.BASE_URL}/signup/`;
    return  this.Http.post(url,data);
  }

  generateOtp(data):Observable<any>{
  	console.log("generate otpppppp",data)
  	let url:string = `${this.BASE_URL}/login1/`;
    return  this.Http.post(url,data);
  }

  verifyotp(data):Observable<any>{
  	console.log("verify otpppppp",data)
  	let url:string = `${this.BASE_URL}/verifyotp1/`;
    return  this.Http.post(url,data);
  }

  generateotp(data):Observable<any>{
    console.log("generate otpppppp",data);
    let url:string = `${this.BASE_URL}/login1/`;
    return  this.Http.post(url,data);

  }  

  //get credit limit
  setcreditlimit(): Observable<any> {
    let url: string = `${this.BASE_URL}/credit_limit/`;
    return this.Http.get(url);
  }


  getDataCrdt():Observable<any>{
    console.log("Creadit LIMIT....");
    return this.Http.get(`${this.BASE_URL}/credit_limit/`);
  }


  amout(data):Observable<any>{
    console.log("Creadit LIMIT....",data);
    let url: string = `${this.BASE_URL}/load_amount/`;
    return this.Http.post(url, data);  
  }
}

