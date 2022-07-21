
import { LenderserviceService } from '../../services/lenderservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Component, AfterViewInit, ElementRef, ViewChild, OnInit, Inject } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-borrowerremarks',
  templateUrl: './borrowerremarks.component.html',
  styleUrls: ['./borrowerremarks.component.css']
})
export class BorrowerremarksComponent implements OnInit {
  @ViewChild('companyremarksview') companyremarksview: ElementRef;
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  public userFilter:any
  public paymentModemethods = ['IMPS', 'NEFT', 'UPI', 'CASH']
  public viewhistory: any = [];
  public loans: any = [];
  public status_message: string;
  public companyremarks: any = [];
  constructor(private lenderservicess: LenderserviceService, private router: Router) { }
  ngOnInit() {
    this.getcompanyremarrks();
  }

  getcompanyremarrks() {
    this.lenderservicess.getcompanyremarrks().subscribe(data => {
      this.viewhistory = data;
      console.log("active loans", this.viewhistory);
    });
  }

  viewwwinfo(view:any) {
    console.log("-----9999iddddd999---", view);
    this.lenderservicess.borrow_remark({ 'id': view }).subscribe(data => {
      console.log("------(((@@@@$$$$@@@@@))))------", data);
      this.companyremarks = data;
      console.log("*********", this.companyremarks);
    });
    $(this.companyremarksview.nativeElement).modal('show');
  }
}

