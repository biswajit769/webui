import { Injectable } from '@angular/core';

import { Observable, of, Subject, Observer, BehaviorSubject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  Base_Url_API = environment.APIPoint;
  constructor(public HttpClient: HttpClient) { }
private messageSource = new BehaviorSubject<any>('0');
  currentMessage = this.messageSource.asObservable();
  changeMessage(message) {
    console.log("hiiiiiiiiiiiiii", message);
    this.messageSource.next(message)
  }



  frontupload(obj): Observable<any> {
    console.log("*************", obj);
    let url: string = `${this.Base_Url_API}/companyimageupload/`
    return this.HttpClient.post(url, obj);
  }

  uploaddocs(obj): Observable<any> {
    console.log("adresssssssssssss", obj);
    let url: string = `${this.Base_Url_API}/companyupload/`
    return this.HttpClient.post(url, obj);
  }

  manage_borrower(details): Observable<any> {
    console.log('hiiiiiiiiiiiiiiiiiiicommmmmm', details);
    let url: string = `${this.Base_Url_API}/updatecredit/`;
    return this.HttpClient.post(url, details);

  }


  update_nbfc(details): Observable<any> {
    console.log('hiiiiiiiiiiiiiiiiiiicommmmmm', details);
    let url: string = `${this.Base_Url_API}/updatenbfcdetails/`;
    return this.HttpClient.post(url, details);

  }





  manage_company(details): Observable<any> {
    console.log('activeeeeeeeeeeeeeeeeeeeeeeee', details);
    let url: string = `${this.Base_Url_API}/updateactive/`;
    return this.HttpClient.post(url, details);

  }


  assign_company(details): Observable<any> {
    console.log('activeeeeeeeeeeeeeeeeeeeeeeee', details);
    let url: string = `${this.Base_Url_API}/SendToProcess/`;
    return this.HttpClient.post(url, details);

  }

  borrowcount(): Observable<any> {
    // alert("i am here in servic");
    // console.log("dataaaaaaa",obj);
    let url: string = `${this.Base_Url_API}/companycount/`
    return this.HttpClient.get(url);

  }

  lendcount(): Observable<any> {
    let url: string = `${this.Base_Url_API}/nbfccount/`
    return this.HttpClient.get(url);
  }

  manage_borrowercount(): Observable<any> {
    console.log('hiiiiiiiiiiiiiiiiiii  count');
    let url: string = `${this.Base_Url_API}/allcount/`;
    return this.HttpClient.get(url);
  }


  manage_getprofile(): Observable<any> {
    console.log('hiiiiiiiiiiiiiiiiiii profile');
    let url: string = `${this.Base_Url_API}/getborrprofile/`;
    console.log('fffffffffffffff');
    return this.HttpClient.get(url);

  }


  manage_nonkarnatak(): Observable<any> {
    console.log('hiiiiiiiiiiiiiiiiiii profile');
    let url: string = `${this.Base_Url_API}/nonkarnataka/`;
    console.log('fffffffffffffff');
    return this.HttpClient.get(url);

  }



  processing_details(): Observable<any> {
    console.log('procdesssshiiiiiiiiiiiiiiiiiiicommmmmm');
    let url: string = `${this.Base_Url_API}/ProcessingApplications/`;
    return this.HttpClient.get(url);

  }


  completed_details(): Observable<any> {
    console.log('procdesssshiiiiiiiiiiiiiiiiiiicommmmmm');
    let url: string = `${this.Base_Url_API}/CompletedApplications/`;
    return this.HttpClient.get(url);

  }

  processingnbfc_details(): Observable<any> {
    console.log('************');
    let url: string = `${this.Base_Url_API}/processing_nbfc_details/`;
    return this.HttpClient.get(url);
  }

    registerednbfc_details(): Observable<any> {
    console.log('************');
    let url: string = `${this.Base_Url_API}/registered_nbfc_details/`;
    return this.HttpClient.get(url);
  }

  pending_loaninfo(): Observable<any> {
    console.log('************');
    let url: string = `${this.Base_Url_API}/pendingloan/`;
    return this.HttpClient.get(url);

  }


  saveSelectedInterest(details): Observable<any> {
    console.log('((((((((()))))))))', details);
    let url: string = `${this.Base_Url_API}/updateinterest/`;
    return this.HttpClient.post(url, details);

  }


payment_info1(data: any): Observable<any> {
    let url: string = `${this.Base_Url_API}/adminpaymentinfo/`
    return this.HttpClient.post(url, data);
  }


  segrated_infoo1(data: any): Observable<any> {
    let url: string = `${this.Base_Url_API}/admindelayedlate/`
    return this.HttpClient.post(url, data);
  }

  accepted_loaninfo(): Observable<any> {
    console.log('************');
    let url: string = `${this.Base_Url_API}/acceptedloan/`;
    return this.HttpClient.get(url);

  }

  disbursed_loan(): Observable<any> {
    console.log('************');
    let url: string = `${this.Base_Url_API}/getdisbursedloans/`;
    return this.HttpClient.get(url);

  }

  payment_info(): Observable<any> {
    console.log('*******Pppppp*****');
    let url: string = `${this.Base_Url_API}/paymentsum/`;
    return this.HttpClient.get(url);

  }

  disbusredinfo(details): Observable<any> {
    console.log('activeeeeeeeeeeeeeeeeeeeeeeee', details);
    let url: string = `${this.Base_Url_API}/loandetailsadmin/`;
    return this.HttpClient.post(url, details);

  }

  closed_loaninfo(): Observable<any> {
    console.log('************');
    let url: string = `${this.Base_Url_API}/closed_loans/`;
    return this.HttpClient.get(url);

  }  

  payment_inforamtion(details): Observable<any> {
    console.log('@@@@@@payyyyyyyyyyyy@@@@@', details);
    let url: string = `${this.Base_Url_API}/transcation/`;
    return this.HttpClient.post(url, details);

  }


  Csvfiles(data:any):Observable<any>{
    console.log("cccccccc",data);
    let url:any=`${this.Base_Url_API}/Csvfiles/`;
    return this.HttpClient.post(url,data);



  }



getdata():Observable<any>{
console.log("getdatasssssssssssssssssss");
let url:any=`${this.Base_Url_API}/Getdata/`;
return this.HttpClient.get(url);

}



Movedata(data:any):Observable<any>{

console.log("sssssssssss",data);
let url:any=`${this.Base_Url_API}/movedatas/`;

return this.HttpClient.post(url,data);


}



Stages01():Observable<any>{


console.log("Stages01");
let url:any=`${this.Base_Url_API}/Stagesdata01/`;
return this.HttpClient.get(url);



}



Stages02():Observable<any>{

console.log("Stages02")
let url:any=`${this.Base_Url_API}/Stagesdata02/`;
return this.HttpClient.get(url);


}

Stagest1():Observable<any>{

console.log("Stages03")
let url:any=`${this.Base_Url_API}/Stagesdata1/`;
return this.HttpClient.get(url);


}



Stagest2():Observable<any>{

console.log("Stagest2")
let url:any=`${this.Base_Url_API}/Stagesdata2/`;
return this.HttpClient.get(url);


}


Stagest3():Observable<any>{

console.log("Stagest3")
let url:any=`${this.Base_Url_API}/Stagesdata3/`;
return this.HttpClient.get(url);


}

Stagest4():Observable<any>{

console.log("Stagest4")
let url:any=`${this.Base_Url_API}/Stagesdata4/`;
return this.HttpClient.get(url);


}


Stagest5():Observable<any>{

console.log("Stagest5")
let url:any=`${this.Base_Url_API}/Stagesdata5/`;
return this.HttpClient.get(url);


}

Stagest6():Observable<any>{

console.log("Stagest6")
let url:any=`${this.Base_Url_API}/Stagesdata6/`;
return this.HttpClient.get(url);


}




Emailstage(data:any):Observable<any>{


console.log("ssssssssasaqqqqqqqqqqqqqq",data);

let url:any=`${this.Base_Url_API}/Emailstages/`;
return this.HttpClient.post(url,data);



}

























}
