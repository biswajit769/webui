import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { BorrowerserviceService } from '../../services/borrowerservice.service';
declare var $;

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private borrowers:BorrowerserviceService) { }

public Searchfilter:any;

public Borrowerid:any;

@ViewChild('invoicepopup') invoicepopup: ElementRef;

  ngOnInit() {



this.Getlenderactiveloans1();



  }


public viewhistory:any;

Getlenderactiveloans1() {
this.Borrowerid=localStorage.getItem('borrowerid');

let obj={a:this.Borrowerid}
    this.borrowers.getlenderactiveloans1(obj).subscribe(data => {
      this.viewhistory = data;
      console.log("active loans @@@@@", this.viewhistory);
    });
  }







public invoices:any;

Viewinvoices1(loan){


  console.log("weqeqqqqqqqqqqq",loan);
  this.invoices=loan;


   console.log("@@@@@@weqeqqqqqqqqqqq@@@",this.invoices);


 $(this.invoicepopup.nativeElement).modal('show');
 
 
}














}
