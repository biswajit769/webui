import { Component, OnInit,ViewChild,Inject } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogConfig,MAT_DIALOG_DATA,MatDialogRef} from "@angular/material";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {formatDate } from '@angular/common';
import { AdminserviceService } from '../../services/adminservice.service';
import { Router, ActivatedRoute } from '@angular/router';
// import * as jsPDF from 'jspdf';
// import html2canvas from 'html2canvas'; 
@Component({
  selector: 'app-payinfo',
  templateUrl: './payinfo.component.html',
  styleUrls: ['./payinfo.component.css']
})
export class PayinfoComponent implements OnInit {
  displayedColumns = ['LoanId', 'CompanyName', 'Amount', 'Status'];
  dataSource = new MatTableDataSource<Element[]>();
public filtersclear:any;
 public alldates:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private dialog: MatDialog,private adminservice:AdminserviceService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
       
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  public doFilter = (value: string) => {
    // alert("ffff",value);
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  public clear(value: string){
    this.filtersclear=null;
    this.dataSource = new MatTableDataSource<Element[]>();
    this.dataSource.paginator = this.paginator
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width='750px';
    dialogConfig.height='300px';
    dialogConfig.position = {
      top: '240px',
      left: '100px'
  };
 
    const dialogRef = this.dialog.open(filterdaysDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
      this.alldates = result;
       this.dataSource.data = this.alldates;
       this.dataSource.paginator = this.paginator;
      console.log('The dialog was closed',this.dataSource);
    });
}
// public generatePdf()  
//   {  
//     var data = document.getElementById('html2Pdf');  
//     html2canvas(data).then(canvas => {  
//       // Few necessary setting options  
//       var imgWidth = 208;   
//       var pageHeight = 295;    
//       var imgHeight = canvas.height * imgWidth / canvas.width;  
//       var heightLeft = imgHeight;  
  
//       const contentDataURL = canvas.toDataURL('image/png')  
//       let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
//       var position = 0;  
//       pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
//       pdf.save('MYPdf.pdf'); // Generated PDF   
//     });  
//   } 
}
export interface Element {
  loan_id: number;
  borrower_name: string;
  paid_amount: number;
  status: string;
}

@Component({
  selector: 'filterdays-dialog',
  templateUrl: './filterdayspopup.component.html',
})
export class filterdaysDialogComponent implements OnInit {

  form: FormGroup;
  description:string;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<filterdaysDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,public request:AdminserviceService,private route: ActivatedRoute,
    private router: Router,) {

  }

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme, dayDisabled: [0, 1, 2] });
  }
  colorTheme = 'theme-red';
  bsConfig: Partial<BsDatepickerConfig>;
  showtab1 = true;
  showtab2: boolean;
  showtab3: boolean;
  showtab4: boolean;
  showtab5:boolean;
  public days:any;
  public daysange:any;
  todays(obj:any) {
    this.days=obj;
    this.showtab1 = true;
    this.showtab2 = false;
    this.showtab3 = false;
    this.showtab4 = false;
    this.apply();
  }
  Last2days(obj:any) {
    this.days=obj;
    this.showtab1 = false;
    this.showtab2 = true;
    this.showtab3 = false;
    this.showtab4 = false;
    this.apply();
  }
  Last7days(obj:any) {
    this.days=obj;
    this.showtab1 = false;
    this.showtab2 = false;
    this.showtab3 = true;
    this.showtab4 = false;
    this.apply();
  }
  Last30days(obj:any) {
    this.days=obj;
    this.showtab1 = false;
    this.showtab2 = false;
    this.showtab3 = false;
    this.showtab4 = true;
    this.apply();
  }
  Custom(obj:any) {
    console.log("hiiiiiiii",obj);
    this.apply();
    this.days=obj;
    this.showtab1 = false;
    this.showtab2 = false;
    this.showtab3 = false;
    this.showtab4 = false;
    this.showtab5 = true;
  }
  dataChanged(newObj:any) {
 this.days =  (formatDate(newObj[0], 'dd-MM-yyyy', 'en-US'));
 this.daysange = (formatDate(newObj[1], 'dd-MM-yyyy', 'en-US'))
 this.apply()
 // here comes the object as parameter
}
 public alldates;
  apply() {
    console.log("days",this.days,this.daysange);
    let finaldata={"data":this.days,"data2":this.daysange}
    this.request.payment_inforamtion(finaldata).subscribe( data => {
       this.alldates = data;
      console.log("backend activeeeeeeee",data, this.alldates );
    
      });
    
  }

 
}
