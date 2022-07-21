import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, Observer, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LenderserviceService {

  constructor(public HttpClient: HttpClient) { }
  public weekdata123;
  Base_Url_API = environment.APIPoint;
  private messageSource = new BehaviorSubject<any>('0');
  currentMessage = this.messageSource.asObservable();
  changeMessage(message) {
    console.log("hiiiiiiiiiiiiii", message);
    this.messageSource.next(message)
  }

  //Generate Otp service
  generateOtp(mb): Observable<any> {
    //  alert(123);
    console.log('hiiiiiiiiiiiiiiiiiii', mb);
    let url: string = `${this.Base_Url_API}/generateotp/`;
    return this.HttpClient.post(url, mb);

  }
  //verify Otp service
  verifyotp(otp): Observable<any> {
    console.log('hiiiiiiiiiiiiiiiiiii', otp);
    let url: string = `${this.Base_Url_API}/verifyotp/`;
    return this.HttpClient.post(url, otp);

  }
  //borrowerReg service
  lenderreg(lenderReg): Observable<any> {
    console.log('hiiiiiiiiiiiiiiiiiii', lenderReg);
    let url: string = `${this.Base_Url_API}/lenderregistration/`;
    return this.HttpClient.post(url, lenderReg);
  }


  finalreg(finalReg): Observable<any> {
    console.log('hello', finalReg);
    let url: string = `${this.Base_Url_API}/nbfcfinalregistration/`;
    return this.HttpClient.post(url, finalReg);
  }
  //lender file upload
  fileAdressing(addresfile): Observable<any> {
    console.log("adresssssssssssss", addresfile);
    let url: string = `${this.Base_Url_API}/lendfileupload/`
    return this.HttpClient.post(url, addresfile);
  }

  selectrateState(newData): Observable<any> {
    console.log("im in service444444", newData);
    let url: string = `${this.Base_Url_API}/selectedstate/`;
    return this.HttpClient.post(url, newData);
  }
  // //lender profile upload
  // fileAdressing1(addresfile):Observable <any> {
  //   console.log("adresssssssssssss",addresfile);
  //   let url:string =`${this.BASE_URL}/lendprofileupload/`
  //   return this.HttpClient.post(url,addresfile);
  // }

  //service for rate of interest

  rateofinterestsave(data): Observable<any> {
    console.log("########", data);
    let url: string = `${this.Base_Url_API}/rateofinterest/`
    return this.HttpClient.post(url, data);
  }

  interestservice(): Observable<any> {
    let url: string = `${this.Base_Url_API}/getinterest/`
    return this.HttpClient.get(url);
  }
  getNewloanscount(): Observable<any> {
    let url: string = `${this.Base_Url_API}/check_new_loan_request/`
    return this.HttpClient.get(url);
  }
  AcceptedLoans(data): Observable<any> {
    console.log("hiii", data);
    let url: string = `${this.Base_Url_API}/accepting_new_loan_request/`
    return this.HttpClient.post(url, data);
  }
  getlenderactiveloans(): Observable<any> {
    let url: string = `${this.Base_Url_API}/getlenderactiveloans/`
    return this.HttpClient.get(url);
  }
  getcompanyremarrks(): Observable<any> {
    let url: string = `${this.Base_Url_API}/activeloanscompanyremarks/`
    return this.HttpClient.get(url);
  }
  closedloanstatus(data:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/closedloanstatus/`
    return this.HttpClient.post(url, data);
  }
  //get active loandetails
  getactiveloandetails(data:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/get_loan_history_details/`
    return this.HttpClient.post(url, data);
  }
  getborrowerdetails(data:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/get_borrower_bank_details/`
    return this.HttpClient.post(url, data);
  }
  sendpaymentAmount(data:any): Observable<any> {
    let url: string = `${this.Base_Url_API}/enteramount/`
    return this.HttpClient.post(url, data);
  }

  //NBFCProfileView service

  nbfcprofileview(): Observable<any> {
    let url: string = `${this.Base_Url_API}/viewnbfcprofile/`;
    return this.HttpClient.get(url);

  }

  //NBFCDetailsUpdate Service

  nbfcdetailsupdate(updatedetails: any): Observable<any> {

    let url: string = `${this.Base_Url_API}/nbfcupdate/`;
    return this.HttpClient.post(url, updatedetails);

  }
  uploaddocs(obj: any): Observable<any> {
    let url: string = `${this.Base_Url_API}/Uploadimage_lend/`
    return this.HttpClient.post(url, obj);
  }
  profiledata2(): Observable<any> {
    let url: string = `${this.Base_Url_API}/Profiledata_lend/`
    return this.HttpClient.get(url);
  }


  lenderdocument(obj: any): Observable<any> {
    let url: string = `${this.Base_Url_API}/doc_upload_lend/`
    return this.HttpClient.post(url, obj);
  }


  lenderdocument2(obj: any): Observable<any> {
    let url: string = `${this.Base_Url_API}/doc_upload_lend/`
    return this.HttpClient.post(url, obj);
  }

  loanlistViewMembers(): Observable<any> {
    let url: string = `${this.Base_Url_API}/get_new_loan_request/`
    return this.HttpClient.get(url);
  }
  biddedAmount(data: any): Observable<any> {
    let url: string = `${this.Base_Url_API}/bidloanrequest/`
    return this.HttpClient.post(url, data);
  }
  aftertimeexit(loanid: any): Observable<any> {
    let url: string = `${this.Base_Url_API}/assignbid/`
    return this.HttpClient.post(url, loanid);

  }
  checkFinalRegField2(): Observable<any> {
    let url: string = `${this.Base_Url_API}/viewnbfcprofile/`;
    return this.HttpClient.get(url);

  }


  Lend_history(): Observable<any> {
    let url: string = `${this.Base_Url_API}/getnbfcloanhistory/`;
    return this.HttpClient.get(url);

  }


  Lend_history_popup(data: any): Observable<any> {
    let url: string = `${this.Base_Url_API}/getnbfcpopup/`
    return this.HttpClient.post(url, data);

  }

  borrow_remark(data: any): Observable<any> {
    let url: string = `${this.Base_Url_API}/borrower_remarks_nbfc/`
    return this.HttpClient.post(url, data);
  }


  todyadues_info(): Observable<any> {
    let url: string = `${this.Base_Url_API}/payments_info_nbfc/`
    return this.HttpClient.get(url);
  }

  payment_info(data: any): Observable<any> {
    let url: string = `${this.Base_Url_API}/payments_info/`
    return this.HttpClient.post(url, data);
  }


  segrated_infoo(data: any): Observable<any> {
    let url: string = `${this.Base_Url_API}/segregated_payment/`
    return this.HttpClient.post(url, data);
  }

  lendstatement(data: any): Observable<any> {
    console.log("serviceeeeeeeeeeDataaaaaaaaaaaaaa",data);
    let url: string = `${this.Base_Url_API}/lender_statement/`
    return this.HttpClient.post(url, data);
  }











}
