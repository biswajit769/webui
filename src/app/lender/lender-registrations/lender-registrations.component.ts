
import {EventEmitter, Input,Output,Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { MatDialog, MatDialogConfig,MatDialogRef} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

declare var $;
//servicess
import { LenderserviceService } from '../../services/lenderservice.service';
import {CustomService } from '../../custom.service';
import { District } from '../../district';
import { State } from '../../state';
import { City } from '../../city';
import { Bank } from '../../bank';
import { Ifsc } from '../../ifsc';
@Component({
  selector: 'app-lender-registrations',
  templateUrl: './lender-registrations.component.html',
  styleUrls: ['./lender-registrations.component.css']
})
export class LenderRegistrationsComponent implements OnInit {
    @ViewChild('companyAddressDetails') companyAddressDetails:ElementRef;
 @ViewChild('permenetAndpresent') permenetAndpresent:ElementRef;
  // @ViewChild('permenetHousedetails') permenetHousedetails:ElementRef;
  @ViewChild('bankdetailspopup') bankdetailspopup:ElementRef;
    
 
   datePickerConfig:Partial<BsDatepickerConfig>;


  lenderegForm: FormGroup;

  get lenderegFrm() { return this.lenderegForm.controls; }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  keyPress1(event: any) {
    const pattern = /[a-zA-Z]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  public lenderor:any = {};
// state and city dynamic

public states:State[];
districts: District[];
cities:City[];
public banklist;
public ifsc;
public ifsccodeName
 // public accounttype = ['Savings', 'Salary', 'Current'];
 public adresstype = ['Owned', 'Rented'];
 public companytypes = ['Joint Hindu Family business', 'Sole proprietorship', 'Private Ltd Company', 'Limited Liability Partnership (LLP)', 'Public Ltd Company', 'Unlimited Company', 'Subsidiary Company'];
 public numberofyearsinbusiness = ['< 1', '1 to 3 Years', '3 to 5 Years', ' More than 5 Years'];
 public company_turnover = ['Less than 1 Crore', '1 to 5 Crore', '5 to 10 Crore', '10 to 50 Crore', '50 to 100 Crore', '100 to 500 Crore', 'More than 500 Crore'];
 public numberofemployees = ['1 to 100', '100 to 500', '500 to 1000', '1000 and more'];
 public monthlybalance = ['less than 1 Lakh', 'less than 10 Lakh', 'more than 10 Lakh and less than 1 Cr','More than 1 CR'];
 // public stayduration = ['less than 1 year', '1 to 3 Years', '3 to 5 Years', 'More than 5 Years'];

get editform() { return this.lenderegForm.controls; }
//get ifsc
public bankshow
selctifsc(bank){
  if(bank !== 'Others'){
    this.bankshow = true;
    console.log('bank name',bank)
    this.ifsc = this.countryservice.getIfscs().filter((item)=> item.bankName == bank);
   
    this.lenderor.ifsccodeName = this.ifsc['0'].ifscname;
    console.log('bank name', this.lenderor.ifsccodeName)
    // $(this.bankdetailspopup.nativeElement).modal('show'); 
    
  }
  else{
    $(this.bankdetailspopup.nativeElement).modal('show'); 
    this.bankshow = false;
  }
  
}

  constructor(
    public dialog: MatDialog,
  private formBuilder: FormBuilder,
  // private route: ActivatedRoute,
  private router: Router,
  private lenderservicess: LenderserviceService,
  private countryservice: CustomService,
  ) { 
    this.states = this.countryservice.getStates();

    console.log(this.states)
    this.banklist = this.countryservice.getbanks();
    console.log(this.banklist)
     this.lenderservicess.currentMessage.subscribe((data: any) => {
      // this.companyRegForm.get('organization').disable();
      console.log("nextttttttt",data);
      this.lenderor=data;
      console.log("------Todayyyy",this.lenderor);
  }); 
  }
 //get district
 onSelect(statename) {
  this.districts = this.countryservice.getDistrict().filter((item)=> item.statename == statename);
}
//get city based on district
butDisabled: boolean = true;
select(districtid){
  this.cities = this.countryservice.getCities().filter((item)=> item.districtName == districtid);
  
}
 mobpattern=/^([6-9]){1}([0-9]){9}?$/;
 
  panpattern=/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
  gstpattern=/^([0-9]){2}([A-Z]){5}([0-9]){4}([A-Z]){1}([0-9]){1}([A-Z]){1}([0-9]){1}?$/;
  emailpattern=/^[a-zA-Z]+[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,5}$/;
  public qualifications = ['10th Std', '12th Std', 'Undergraduate', 'Postgraduate', 'Not Applicable'];
 public stayduration = ['less than 1 year', '1 to 3 Years', '3 to 5 Years', 'More than 5 Years'];
 public Religions = ['Hindu', 'Sikh', 'Christian', 'Jain','Judaism','Islam','Parsi','Others'];
 public professionsalaried1 = ['Teacher', 'Lawyer', 'Police', 'Salesman',
 'Engineer', 'Laborer', 'Business', 'Call Center', 'Chef', 'Fashion Designer',
 'Beautician', 'Hotel Management', 'Farmer', 'Doctor', 'Company Representative', 'Insurance'
];
 public accounttype = ['Savings', 'Salary', 'Current'];
public Noofyears = ['< 1 ', '1 to 3 Years', '3 to 5 Years ', 'More than 5 Years'];
public turnover = ['Less than 1 Crore ', '1 to 5 Crore', '5 to 10 Crore ', ' 10 to 50 Crore','50 to 100 Crore','100 to 500 Crore','More than 500 Crore '];
public companylist = ['Joint Hindu Family business', 'Sole proprietorship', 'Private Ltd Company', 'Limited Liability Partnership (LLP)', 'Public Ltd Company', 'Unlimited Company', 'Subsidiary Company'];
  public showparterner=true;
  disable_pancard1(event){
    if(event===true){
      this.showparterner = !this.showparterner;
    }
   else{
    this.showparterner = true;
   }

  }



 ngOnInit() {
    this.lenderegForm = this.formBuilder.group({

      companyname: ['', Validators.required],
      din: ['', [Validators.required, Validators.minLength(8) ,Validators.maxLength(8)]],
      lie_number: ['', [Validators.required, Validators.minLength(5) ,Validators.maxLength(21)]],
Company_Type: ['', Validators.required],
company_website:['', Validators.required], 
directorname: ['', Validators.required],
directornumber:['',[Validators.required,Validators.pattern(this.mobpattern)]],
partner_name: ['', Validators.required],
partnernumber:['',[Validators.required,Validators.pattern(this.mobpattern)]],
gstnum: ['', [Validators.required, Validators.minLength(15) ,Validators.maxLength(15),Validators.pattern(this.gstpattern)]],
organization: ['', Validators.required],
years_in_business: ['', Validators.required],
partnerName:['', Validators.required],

officenumber:['',[Validators.required,Validators.pattern(this.mobpattern)]],
        lender_type: ['', Validators.required],
        gender: ['', Validators.required],
        invest_amount : ['',Validators.required],
        investmentAmountStarting:[''],
        pancard: ['', [Validators.required, Validators.minLength(10) ,Validators.maxLength(10),Validators.pattern(this.panpattern)]],
        aadhaar_card: ['', [Validators.required,Validators.minLength(12) ,Validators.maxLength(12)]],
         donthave:[''],
         email_id: ['', [Validators.required,Validators.pattern(this.emailpattern)]],
         addresstype: ['', Validators.required],
         marital_status: ['', Validators.required],
         qualification:['', Validators.required],
         bankname:['',Validators.required],
        banknames:['',],
        accounttype1:['',],
        accountname:['',Validators.required],
        branchname:['',Validators.required],
        otherifsccode:['',Validators.required],
        ifsccode:['',Validators.required],
        ifscnames:['',Validators.required],
        accountnumber:['',Validators.required],
        companyturnover:['', Validators.required],
        privat_govtjob:[''],
         housenumber:['', Validators.required],
         permanent_street:['', Validators.required],
         Building:['', Validators.required],
         landmark:['', Validators.required],
         states:['', Validators.required],
         districs:[''],
         city:[''],
         stayedDurations:['',Validators.required],
        pincode:['', Validators.required],
        houseaddrestype:['', Validators.required],
        housepermanentno:['', Validators.required],
        housepermanent_street:['', Validators.required],
        house_building:['', Validators.required],
        house_landmark:['', Validators.required],
        housestate:['', Validators.required],
        housedistricts:[''],
        housecity:[''], 
        permanentpincod:['', Validators.required],
        housesstayed:['',Validators.required],
        houspincode:['', Validators.required],
        marriageDetails:['',Validators.required],
        alternumb:['',[Validators.required,Validators.pattern(this.mobpattern)]],
        spousenumber:['',Validators.required],
        spousename:['',Validators.required],
        spouseprofession:['',Validators.required],
        dateofMarriage:['',Validators.required],
        seperate:['',Validators.required],
        religion:['',Validators.required],
        earnings:['',Validators.required],
       
        seller:[''],
        
        empid:['',Validators.required],
        professional:['',Validators.required],
        salarypaidmode:['',Validators.required]
      });
  }
  //check mobilenumber is already regisetred
  //address Type
  public messagesss:string="hirrrrrrrrrrrr";
 // addresstypes(){
  
 //    $(this.permenetHousedetails.nativeElement).modal('show'); 

 //  }
 addresstypes(){
  
    $(this.permenetAndpresent.nativeElement).modal('show'); 

  }

      public showpan=true;
      disable_pancard(event){
        if(event===true){
          this.showpan = !this.showpan;
        }
       else{
        this.showpan = true;
       }

      }
        public showgst=true;
      disable_gst(event){
        if(event===true){
          this.showgst = !this.showgst;
        }
       else{
        this.showgst = true;
       }

      }


      //final brrower form submit
     //close modal
     //close modal
     cancel(){
      this.lenderor.permanent_office_roomno = '';
      this.lenderor.permanentbuildingname = '';
      this.lenderor.permanent_street = '';
      this.lenderor.permanent_landmark = '';
      this.lenderor.selectedState = '';
      this.lenderor.selecteddistric = '';
      this.lenderor.selectedcity = '';
      this.lenderor.pin_code = '';
      this.lenderor.longstay = '';
      $(this.permenetAndpresent.nativeElement).modal('hide');  
     }
  


     //  cancel2(){
     //  this.lenderor.bulidingnum = '';
     //  this.lenderor.permanent_buildingName = '';
     //  this.lenderor.permanent_street = '';
     //  this.lenderor.permanent_land = '';
     //  this.lenderor.permanentState = '';
     //  this.lenderor.permanentdisc = '';
     //  this.lenderor.permanentcity = '';
     //  this.lenderor.permanentpincod = '';
     //  this.lenderor.permanetDurations = '';
      
     //  $(this.permenetHousedetails.nativeElement).modal('hide');  
     // }

 
       cancel7(){
        this.lenderor.other_bank = '', 
        this.lenderor.acounttypes= '',
        this.lenderor.holder_name= '',
        this.lenderor.account_number= '',
        this.lenderor.branch_name= '',
        this.lenderor.ifsc= '',
        this.lenderor.ifsccodeName= '',
        this.lenderor.ifscdata= '',
        this.lenderor.accountnumber= '', 
        $(this.bankdetailspopup.nativeElement).modal('hide');  

     }

ok(){
  
  $(this.bankdetailspopup.nativeElement).modal('hide'); 
    $(this.permenetAndpresent.nativeElement).modal('hide'); 
  // $(this.permenetHousedetails.nativeElement).modal('hide'); 
   
}




  nbfcfinalSubmit(lenderor) {
    

 let finaldatas = this.lenderor;
 console.log(finaldatas);  
 this.lenderservicess.finalreg(finaldatas).subscribe( data => {
  
        console.log("backenddaattaaaaaammmmmcomp",data);
 });
}


nbfcfinalSubmitfinal(lenderor) {
 let finaldatas = this.lenderor
  if (this.lenderor.valid) {
      console.log('Personal Form is not valid');
      console.log(finaldatas);
  } else {
      console.log('Personal Form is valid');
      console.log(finaldatas);
      this.lenderservicess.finalreg(finaldatas).subscribe( data => {
        console.log("backend daattaaaaaa",data)
        if(data == 'success'){
           this.router.navigate(['/pendingdocs']);
          const dialogRef = this.dialog.open(lenderRegSucess, {
            // width: '800px',
            // height: '85%',
        
          })
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(`Dialog sent: ${result}`); 
            //this.name = result;
          });
     
    
        }
        else{
          alert("enter valid data");
        }
      },
      )
  
  }
}
   
  }
 


//end comp0netpopup above....
@Component({
  selector: 'lenderRegSucess',
  templateUrl: 'lenderRegistrationSucess.component.html',
  styleUrls: ['./lenderRegistrationSucess.component.css']
})
export class lenderRegSucess{

  constructor(
    public dialogRef: MatDialogRef<lenderRegSucess>,public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
      dialogRef.disableClose = true;
    }
}