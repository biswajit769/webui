import { LenderserviceService } from '../../services/lenderservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { Component, ElementRef, ViewChild, OnInit, Inject, OnDestroy } from '@angular/core';
declare var $;
@Component({
  selector: 'app-loanrequest',
  templateUrl: './loanrequest.component.html',
  styleUrls: ['./loanrequest.component.css']
})
export class LoanrequestComponent implements OnInit {
  @ViewChild('companyview') companyview: ElementRef;
  @ViewChild('companyalldetailsView') companyalldetailsView: ElementRef;
  @ViewChild('acceptpopup') acceptpopup: ElementRef;
  @ViewChild('bidpopup') bidpopup: ElementRef;
  @ViewChild('invoicepopup') invoicepopup: ElementRef;
  @ViewChild('bidedpopupView') bidedpopupView: ElementRef;
  @ViewChild('rebidepopupVIew') rebidepopupVIew: ElementRef;
  @ViewChild('bidpopupsucess') bidpopupsucess: ElementRef;
  

  constructor(private lenderserviceService: LenderserviceService, private router: Router) { localStorage.removeItem('expired_time'); }
  keyPress(event: any) {
    const pattern = /[0-9\.\%\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  validateNumber(e: any) {
    let input = String.fromCharCode(e.charCode);
    const reg = /^[0-9 || .]*$/;
    if (!reg.test(input)) {
      e.preventDefault();
    }
}
  ngOnInit() {
    // this.myFunction();
    this.error_bid_msg = '';
    this.getrateofinterest();
    this.loanCountViewFun();
    localStorage.removeItem('expired_time');
  }

  public loantable; loanss;
  results = [];
  newloanrequestloader = true;
  interest;
  findate;
  disburseloan;
  acceptedloan;
  getrateofinterest() {
    this.lenderserviceService.interestservice().subscribe(data => {
      console.log("LENDEERRRRRRRRRATEEEEEEEEEEEEEEEEE",data);
      this.acceptedloan = data['accptloan']
      console.log("Accpetdloannnnnnnnnnnnnnnnn",this.acceptedloan);
      this.disburseloan = data['discount']
      console.log("disbursloannnnnnnn",this.disburseloan);
      this.findate = data['interest'][0]['date_of_establishment'];
      console.log("hdhhhhhh",this.findate);
      this.interest = data['interest'] [0] ['interest_rate']
    });
  }
  secondsCalculate(flag, time) {
   // console.log("helooooooooo");
    let m, s, h;
    if (flag == 'seconds') {
      m = Math.floor(time / 60);
      h = Math.floor(m / 60);
      m = m % 60;
      s = time % 60;
      return { h: h, m: m, s: s };
    }
    if (flag == 'hms') {
      m = time.h * 60;
      m += time.m;
      s = m * 60;
      s += time.s;
      return s;
    }
  }
  public lender_bidedd;
  public parseTimeRemaining(data){
    let c_data = data.invoice.loan_id;
    if(c_data == data.invoice.loan_id){
      this.lenderserviceService.aftertimeexit(c_data).subscribe(data => {
        console.log(data);
        if(data.b == "sucesss"){
          this.lender_bidedd = data.a;
          console.log("kkkkkkkkkkk")
          $(this.bidedpopupView.nativeElement).modal('show');
          localStorage.removeItem('expired_time');
        }
        if(data == "Rebid"){
          this.lender_bidedd = data[1]
          console.log("kkkkkkkkkkk")
          // $(this.rebidepopupVIew.nativeElement).modal('show');
          localStorage.removeItem('expired_time');
        }
      });
    }
}


 public seconds:any;
  getTime(data) {
  console.log("hiii",data);
    let test;
    let c_t = new Date().getTime();
    
    if (data.time > c_t) {
      let d = new Date(c_t + (data.time - c_t));
      test = data.loan.pk;
      let r_d = new Date();
      this.seconds = this.secondsCalculate('hms', { h: d.getHours(), m: d.getMinutes(), s: d.getSeconds() }) 
      - this.secondsCalculate('hms', { h: r_d.getHours(), m: r_d.getMinutes(), s: r_d.getSeconds() })
      this.seconds = this.secondsCalculate('seconds', this.seconds);
      // console.log("ffffff",this.seconds);
      // this.times=this.seconds.h + 'H:'  + this.seconds.m + 'M:'  + this.seconds.s + 'S';
      return  this.seconds.h + 'H:'  + this.seconds.m + 'M:'  + this.seconds.s + 'S';
    }  
    else if (data.time < c_t){
       
      
      if(localStorage.getItem('expired_time')==null){
        console.log(test)
        localStorage.setItem('expired_time',"check");
        this.parseTimeRemaining(data); 
      }
      // this.times=this.seconds.h + 'H:'  + this.seconds.m + 'M:'  + this.seconds.s + 'S';
      
      this.loanCountViewFun();
      // this.getTimes();
      // return  "expired"; 
    }
  }








// myFunction() {
//   setInterval(loanCountViewFun, 3000);


// }

  loanCountViewFun() {
    this.results = [];
    this.newloanrequestloader = true;
    this.lenderserviceService.loanlistViewMembers().subscribe((data: any) => {
      console.log("@@@@@gggg@@",data);
      this.newloanrequestloader = false;
      for (let i = 0; i < data.dict.length; i = i + 2) {
        let invoice = '';
        for (let j = 0; j < data.invoice.length; j++) {
          if (data.dict[i].pk == data.invoice[j].loan_id) {
            invoice = data.invoice[j];
          }
        }
        let d = new Date(data.dict[i].fields.requested_date);
        let t = d.getTime() + (5 * 60 * 1000)
        // let t = d.getTime() + (3 * 60 * 60 * 1000)
        this.results.push({
          company: data.dict[i + 1], loan: data.dict[i], invoice: invoice,
          time: t
        });
      
         console.log("fffffffff",this.results);

      }
    });
  }





  public companydetails
  public show1 = false;
  public show2 = false;
  company_details(companyData) {
    this.show1 = true;
    this.companydetails = companyData
    console.log(this.companydetails);
    $(this.companyview.nativeElement).modal('show');
  }
  borrinpopupDetails(companyData) {
    this.companydetails = companyData;
    this.show2 = true;
    console.log(this.companydetails);
    $(this.companyalldetailsView.nativeElement).modal('show');
  }
  public loan_Id
  acceptloan(id) {
    this.loan_Id = id
    $(this.acceptpopup.nativeElement).modal('show');
  }
  public invoice: any
  viewinvoice(invoc) {
    console.log("loan id", invoc);
    // for (let i = 0; i < this.results.length; i++) {
    //   if (this.results[i].loan_id == invoc) {
        this.invoice = invoc.invoice.invoice;
        $(this.invoicepopup.nativeElement).modal('show');
        console.log('hiiii invoice', this.invoice); //use i instead of 0
    //   }
    // }
  }
  loanaccepted(deduc) {
    let data = { 'deduction': deduc, 'loan_id': this.loan_Id }
    this.lenderserviceService.AcceptedLoans(data).subscribe(data => {
      if (data) {
        this.router.navigate(['lender']);
        $(this.acceptpopup.nativeElement).modal('hide');
      }
    });
  }

  public loans_Id;
  public deduction;
  bid(id) {
    this.error_bid_msg = '';
    console.log( this.error_bid_msg);
    this.loans_Id = id.loan.pk
    $(this.bidpopup.nativeElement).modal('show');
  }
 public error_bid_msg  = '';
  bidAmnt(data) {
    let bid_interst = data;
    let lon_id = this.loans_Id;
    console.log("dataaaaaaaaa", bid_interst, lon_id);
    let finaldata = { "interest":bid_interst, "loan_id": lon_id }
    console.log("finalllllllllllllllll", finaldata);
    this.lenderserviceService.biddedAmount(finaldata).subscribe(backdata => {
      this.deduction = '';
      if(backdata == "Bid interest saved successfully"){
        this.error_bid_msg = '';
        $(this.bidpopup.nativeElement).modal('hide');
        $(this.bidpopupsucess.nativeElement).modal('show');
      }
    else if(backdata == "Already Bided by someone please bid the lower interest"){
        this.error_bid_msg = backdata;
      }
    })
  }
  Bidalloted_popup(){
    this.router.navigate(['lender']);
    $(this.bidedpopupView.nativeElement).modal('hide');
    localStorage.removeItem('expired_time');
  }
  id:any;
  rebided(){
    // this.loanCountViewFun();
    $(this.invoicepopup.nativeElement).modal('hide');
    this.id = setInterval(() => {
      this.battleInit(); 
    }, 2000);
  
  }
  battleInit(){
    if (this.id) {
      clearInterval(this.id);
      this.router.navigate(['/lender']);
    } 
  }
  cancel(){
    this.error_bid_msg = '';
    $(this.bidpopup.nativeElement).modal('hide');
    localStorage.removeItem('expired_time');
  }
//invoice close
closed(){
  this.invoice = '';
  $(this.invoicepopup.nativeElement).modal('hide');
}
}
