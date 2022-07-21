import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, Observer, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BorrowerserviceService {

  public BusinessPan;
  Base_Url_API:any = environment.APIPoint;

  constructor(public HttpClient: HttpClient) { }
  private messageSource = new BehaviorSubject<any>('0');
  currentMessage = this.messageSource.asObservable();
  changeMessage(message:any) {
    this.messageSource.next(message)
  }
  //Generate Otp service
  generateOtp(mb:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/generateotp/`;
    return this.HttpClient.post(url, mb);

  }
  //verify Otp service
  verifyotp(otp:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/verifyotp/`;
    return this.HttpClient.post(url, otp);

  }
  //borrowerReg service
  borrowerreg(borrower:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/borrowerregistration/`;
    return this.HttpClient.post(url, borrower);

  }
  //borrower finalreg url
  borrowing_company_finalreg(borrower:any): Observable<any> {
    console.log("FINNNNNNNNNNDTAAAAAAAAASERRRRRRRRRR",borrower);
    let url: string = `${this.Base_Url_API}/borrowerfinalregistration/`;
    return this.HttpClient.post(url, borrower);

  }
  //get activae loans
  getActivaLoans(): Observable<any> {
    let url: string = `${this.Base_Url_API}/get_active_loans/`;
    return this.HttpClient.get(url);
  }


  //upload  documents service

  uploaddocs(obj:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/companyfileupload/`
    return this.HttpClient.post(url, obj);
  }

  businesspan1(obj:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/upload_business_doc/`
    return this.HttpClient.post(url, obj);
  }


  businesspan2(obj:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/upload_business_doc/`
    return this.HttpClient.post(url, obj);
  }


  businesspan3(obj:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/upload_business_doc/`
    return this.HttpClient.post(url, obj);
  }

  raiselon2(obj:any): Observable<any> {
    console.log("ddddddd",obj);
    let url: string = `${this.Base_Url_API}/newloan/`
    return this.HttpClient.post(url, obj);
  }


  businesspan4(obj:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/upload_business_doc/`
    return this.HttpClient.post(url, obj);
  }
  profiledata1(): Observable<any> {
    let url: string = `${this.Base_Url_API}/profiledata/`
    return this.HttpClient.get(url);
  }
  getfinChainscore(): Observable<any> {
    let url: string = `${this.Base_Url_API}/finchain_score/`
    return this.HttpClient.get(url);
  }
  getAvailaaaamount(): Observable<any> {
    let url: string = `${this.Base_Url_API}/get_availamount/`
    return this.HttpClient.get(url);
  }
  getdisburseLoanlist(): Observable<any> {
    let url: string = `${this.Base_Url_API}/check_disbursed_loan/`
    return this.HttpClient.get(url);
  }
  //service for newloanrateof lender list request
  getintrestoflender(): Observable<any> {
    let url: string = `${this.Base_Url_API}/get_lender_available/`
    return this.HttpClient.get(url);

  }
  //service for newloan request
  loanreq(obj:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/newloan/`
    return this.HttpClient.post(url, obj);

  }
  notify_disbursedloan(obj:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/notify_disbursed_loan/`
    return this.HttpClient.post(url, obj);

  }
  getlender_bank_details(obj:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/get_lender_bank_details/`
    return this.HttpClient.post(url, obj);

  }
  getdisbursedloan_details(obj:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/get_disbursed_loan_details/`
    return this.HttpClient.post(url, obj);

  }
  // closenotifyDisbursed(obj):Observable <any> {
  //   console.log("dataaaaaaahhhhhhhhhhh",obj);
  //   let url:string=`${this.BASE_URL}/notify_disbursed_loan/`
  //   return this.HttpClient.post(url,obj);

  // }
  //CompanyProfileView service

  companyprofileview(): Observable<any> {
    let url: string = `${this.Base_Url_API}/viewcompanyprofile/`;
    return this.HttpClient.get(url);
  }

  //CompanyDetailsUpdate Service

  companydetailsupdate(updatedetails:any): Observable<any> {

    let url: string = `${this.Base_Url_API}/companyupdate/`;
    return this.HttpClient.post(url, updatedetails);

  }
  // profiledata1(): Observable <any> {
  //   console.log("im innnnn first serviceeeeeeeeee");
  //   let url: string = `${this.BASE_URL}/profiledata/`;
  //   return this.HttpClient.get(url);
  // }

  checkFinalRegField(): Observable<any> {
    let url: string = `${this.Base_Url_API}/viewcompanyprofile/`;
    return this.HttpClient.get(url);

  }
  borrow_history(): Observable<any> {
    let url: string = `${this.Base_Url_API}/borrow_loan_history/`;
    return this.HttpClient.get(url);

  }

  payment_late(): Observable<any> {
    let url: string = `${this.Base_Url_API}/Borrower_Payment_Info/`;
    return this.HttpClient.get(url);

  }


getdocs(docs:any):Observable <any>{
  console.log('******######******');
  let url:string = `${this.Base_Url_API}/getdocuments/`;
  return  this.HttpClient.post(url,docs);
} 

getclosedloans():Observable <any>{
  console.log('******######******');
  let url:string = `${this.Base_Url_API}/closedLoan/`;
  return  this.HttpClient.get(url);
} 
  



getlenderactiveloans1(data): Observable<any> {
    let url: string = `${this.Base_Url_API}/getlenderactiveloanst/`
    return this.HttpClient.post(url,data);
  }







}

