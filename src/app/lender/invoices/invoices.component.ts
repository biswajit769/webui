import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { LenderserviceService } from '../../services/lenderservice.service';
declare var $;

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  constructor(private lenderservicess: LenderserviceService) { }

public viewhistory:any;
public Searchfilter:any;

@ViewChild('invoicepopup') invoicepopup: ElementRef;


  ngOnInit() {

this.getlenderactiveloans();

  }






 getlenderactiveloans() {
    this.lenderservicess.getlenderactiveloans().subscribe(data => {
      this.viewhistory = data;
      console.log("active aaaaaaa @@@@loans", this.viewhistory);
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
