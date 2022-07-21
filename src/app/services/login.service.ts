import { Injectable } from '@angular/core';
import { Observable, of, Subject, Observer, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Base_Url_API = environment.APIPoint;
  constructor(public HttpClient: HttpClient) {
    var s = localStorage.getItem('currentUser');
    if (s != '0' && s != null) {
      this.changeCurrentUser(JSON.parse(s));
    } else {
      this.changeCurrentUser(0);
    }

  }

  public logdata;
  private _current_user = new BehaviorSubject<any>('0');
  current_user = this._current_user.asObservable();
  changeCurrentUser(data:any) {
    localStorage.setItem('current_user_data', JSON.stringify(data));
    if (data == 0 || data == null) {
      localStorage.setItem('currentUser', '0');
    } else {
      localStorage.setItem('currentUser', JSON.stringify(data));
    }
    this._current_user.next(data);
  }
  //login 
  login(userlogin): Observable<any> {
    console.log('hiiiiiiiiiiiiiiiiiii', userlogin);
    let url: string = `${this.Base_Url_API}/login/`;
    return this.HttpClient.post(url, userlogin);
  }
  forgotpassword(mb): Observable<any> {
    // alert(123);
    console.log('hiiiiiiiiiiiiiiiiiii', mb);
    let url: string = `${this.Base_Url_API}/forgot_password/`;
    return this.HttpClient.post(url, mb);

  }
  // Routing security
  getToken() {
    let token = localStorage.getItem('token');
    return token;
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }

  verifyotp(mb:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/verifyotp/`;
    return this.HttpClient.post(url, mb);

  }
  resetpassword(resetpassword:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/reset_password/`;
    return this.HttpClient.post(url, resetpassword);


  }

  Modata(data): Observable<any> {
    console.log("otp up to service....",data)
    let url: string = `${this.Base_Url_API}/get_otp/`;
    return this.HttpClient.post(url, data);

  }

  

 
}