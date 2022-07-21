import { Component,ElementRef, OnInit,ViewChild,Inject} from '@angular/core';
import { BorrowerserviceService } from '../../services/borrowerservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { District } from '../../district';
import { State } from '../../state';
import { City } from '../../city';
import { Bank } from '../../bank';
import { Ifsc } from '../../ifsc';
import {CustomService } from '../../custom.service';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router'
declare var $: any;


@Component({
  selector: 'app-view-borrower-profile',
  templateUrl: './view-borrower-profile.component.html',
  styleUrls: ['./view-borrower-profile.component.css']
})
export class ViewBorrowerProfileComponent implements OnInit {
  @ViewChild('bankdetailspopup') bankdetailspopup:ElementRef;
  @ViewChild('updatesucess') updatesucess:ElementRef;
  @ViewChild('Businesspan') Businesspan: ElementRef;
  @ViewChild('Businesspan1') Businesspan1: ElementRef;
  @ViewChild('Businesspan2') Businesspan2: ElementRef;
  @ViewChild('Businesspan3') Businesspan3: ElementRef;

  public edit:boolean=false;
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
 mobpattern=/^([6-9]){1}([0-9]){9}?$/;
  companypan=/^[A-Z]{3}(P|C|H|F|A|T|B|L|J|G)[a-zA-Z][\d]{4}[\A-Z]?$/
  panpattern=/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
  gstpattern=/^([0-9]){2}([A-Z]){5}([0-9]){4}([A-Z]){1}([0-9]){1}([A-Z]){1}([0-9]){1}?$/;
  emailpattern=/^[a-zA-Z]+[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,5}$/;
  websitepattern=/^(http?|https):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;


 public accounttype = ['Savings', 'Salary', 'Current'];
 public companytypes = ['Joint Hindu Family business', 'Sole proprietorship', 'Private Ltd Company', 'Limited Liability Partnership (LLP)', 'Public Ltd Company', 'Unlimited Company', 'Subsidiary Company'];
 public numberofyearsinbusiness = ['< 1', '1 to 3 Years', '3 to 5 Years', ' More than 5 Years'];
 public company_turnover = ['Less than 1 Crore', '1 to 5 Crore', '5 to 10 Crore', '10 to 50 Crore', '50 to 100 Crore', '100 to 500 Crore', 'More than 500 Crore'];
 public numberofemployees = ['1 to 100', '100 to 500', '500 to 1000', '1000 and more'];
 public monthlybalance = ['less than 1 Lakh', 'less than 10 Lakh', 'more than 10 Lakh and less than 1 Cr','More than 1 CR'];
 public stayduration = ['less than 1 year', '1 to 3 Years', '3 to 5 Years', 'More than 5 Years'];

companyUpdateForm: FormGroup;  
public states:State[];
districts: District[];
city:City[];

public bankname;
public ifsc;
public ifsccodeName;
public companydetails:any={};
constructor(private formBuilder: FormBuilder,public companyService:BorrowerserviceService, private countryservice: CustomService) {
this.getviewProfile();
this.bankname = this.countryservice.getbanks();
this.states = this.countryservice.getStates();
this.districts = this.countryservice.getDistrict();
this.city = this.countryservice.getCities();
}
 
  //get district
 onSelect(statename) {
   console.log(statename);
  this.districts = this.countryservice.getDistrict().filter((item)=> item.statename == statename);
}
//get city based on district
butDisabled: boolean = true;
select(districtid){
this.city = this.countryservice.getCities().filter((item)=> item.districtName == districtid);
  
}

//get ifsc
public bankshow
selctifsc(bank){
  if(bank !== 'Others'){
    this.bankshow = true;
    console.log('bank name',bank)
    this.ifsc = this.countryservice.getIfscs().filter((item)=> item.bankName == bank);
   
    this.companydetails.ifsccodeName = this.ifsc['0'].ifscname;
    console.log('bank name', this.companydetails.ifsccodeName)
    $(this.bankdetailspopup.nativeElement).modal('show'); 
    
  }
  else{
    $(this.bankdetailspopup.nativeElement).modal('show'); 
    this.bankshow = false;
  }
}
  

public updateddata:any={};
public status1 : boolean = true;
public status2 : boolean = false;
public status3 : boolean = true;
public status4:boolean=true; 
public iconss:boolean=true;
public account:boolean=true;
public account1:boolean=false;
public number:boolean=true;
public number1:boolean=false;
public name:boolean=true;
public name1:boolean=false;
public branch:boolean=true;
public branch1:boolean=false;

public ifscs:boolean=true;
public ifsc1:boolean=false;

public banks:boolean=true;
public banks1:boolean=false;


get editform() { return this.companyUpdateForm.controls; }
public getviewProfile(){
this.companyService.companyprofileview().subscribe(data =>{
      console.log("********** DATA ********",data);

    this.companydetails=data;
    this.companyUpdateForm.get('organization').disable();
    this.companyUpdateForm.get('bussiness_since').disable();
    this.companyUpdateForm.get('companyturnover').disable();
    this.companyUpdateForm.get('employee_count').disable();
    this.companyUpdateForm.get('states').disable();
    this.companyUpdateForm.get('districts').disable();
    this.companyUpdateForm.get('city').disable();
    this.companyUpdateForm.get('stayedDurations').disable();
    this.companyUpdateForm.get('bankname').disable();
    this.companyUpdateForm.get('accounttype1').disable();
    console.log("********** DATA ********",this.companydetails);
  
  },)

} 
public save(updatedetails){
  this.status1=!this.status1;  
  this.status2 = !this.status2;
  this.status3 = !this.status3;
  this.account=true;
    this.account1=false;
    this.number=true;
    this.number1=false;
    this.name=true;
    this.name1=false;
    this.branch=true;
    this.branch1=false;

    this.ifscs=true;
    this.ifsc1=false;
    
    this.banks=true;
    this.banks1=false;
  
   this.edit=!this.edit;
  this.companyService.companydetailsupdate(updatedetails).subscribe(data =>{
    $(this.updatesucess.nativeElement).modal('show');
    this.companydetails=data;
    this.getviewProfile();
   },)
}

public update(){
    this.status2 = !this.status2 ;
    this.status1= !this.status1;  
    this.status3 = !this.status3;
    this.account=false;
    this.account1=true;
    this.number=false;
    this.number1=true;
    this.name=false;
    this.name1=true;

    this.branch=false;
      this.branch1=true;

      this.ifscs=false;
    this.ifsc1=true;

    this.banks=false;
    this.banks1=true;
    
    
     this.edit=!this.edit;
    this.companyUpdateForm.get('organization').enable();
    this.companyUpdateForm.get('bussiness_since').enable();
    this.companyUpdateForm.get('companyturnover').enable();
    this.companyUpdateForm.get('employee_count').enable();
    this.companyUpdateForm.get('states').enable();
    this.companyUpdateForm.get('districts').enable();
    this.companyUpdateForm.get('city').enable();
    this.companyUpdateForm.get('stayedDurations').enable();
    this.companyUpdateForm.get('bankname').enable();
    this.companyUpdateForm.get('accounttype1').enable();
}

public cancel(){
  this.getviewProfile();
  this.status1=!this.status1;  
  this.status2 = !this.status2;
  this.status3 = !this.status3;
  this.account=true;
    this.account1=false;
    this.number=true;
    this.number1=false;
    this.name=true;
    this.name1=false;
     this.branch=true;
      this.branch1=false;

      this.ifscs=true;
    this.ifsc1=false;

    this.banks=true;
    this.banks1=false;
 
   this.edit=!this.edit;
}



 buss;
  buss1;
  buss2;
  buss3;
  viewdocs(docs:any) {
    console.log("test",docs);
    let documents = {'Business_pan':docs}
    this.companyService.getdocs(documents).subscribe(backenddata => {
      console.log("printttttttttt ", backenddata);
      this.buss = backenddata['img'];
      // this.request.BusinessPan = this.buss;
      // console.log("finalllllllllllllll",this.buss);
      


      $(this.Businesspan.nativeElement).modal('show')

    })
  }

  viewdocs1(docs:any) {
    let documents = {'bank_stmnt_borwr':docs}
    this.companyService.getdocs(documents).subscribe(backenddata => {
      console.log("printttttttttt ", backenddata);
      this.buss1 = backenddata['img1'];
      $(this.Businesspan1.nativeElement).modal('show')

    })
  }
  viewdocs2(docs:any) {
    let documents = {'Balance_sheet':docs}
    this.companyService.getdocs(documents).subscribe(backenddata => {
      console.log("printttttttttt ", backenddata);
      this.buss2 = backenddata['img2'];
      $(this.Businesspan2.nativeElement).modal('show')

    })
  }
  viewdocs3(docs:any) {
    let documents = {'present_address_proof':docs}
    this.companyService.getdocs(documents).subscribe(backenddata => {
      console.log("printttttttttt ", backenddata);
      this.buss3 = backenddata['img3'];
      $(this.Businesspan3.nativeElement).modal('show')


    })
    }

ngOnInit() {
   $(document).ready(function() {
    $('#trigger').click(function(){
      $("#dialog").dialog();
    }); 
  }); 
    this.companyUpdateForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      organization: ['', Validators.required],
      doe: ['', Validators.required],
      pancard: ['', [Validators.required, Validators.minLength(10) ,Validators.maxLength(10),Validators.pattern(this.panpattern)]],
      gstnumber: ['', [Validators.required, Validators.minLength(15) ,Validators.maxLength(15),Validators.pattern(this.gstpattern)]], 
      bussiness_since: ['', Validators.required],
      companyturnover:['', Validators.required],
      employee_count:['', Validators.required],
      din: ['', [Validators.required, Validators.minLength(8) ,Validators.maxLength(8)]],
      cin: ['', [Validators.required, Validators.minLength(21) ,Validators.maxLength(21)]],
      company_website:['', [Validators.required,Validators.pattern(this.websitepattern)]],
      email_id: ['', [Validators.required,Validators.pattern(this.emailpattern)]],
      officenumber:['',[Validators.required,Validators.pattern(this.mobpattern)]],
      directorname:['', Validators.required],
      directornumber:['',[Validators.required,Validators.pattern(this.mobpattern)]],
      partnerName:['', Validators.required],
      partnernumber:['',[Validators.required,Validators.pattern(this.mobpattern)]],
      aadhaar_card: ['', [Validators.required,Validators.minLength(12) ,Validators.maxLength(12)]],
      addresstype:['', Validators.required],
      housenumber:['', Validators.required],
      permanent_street:['', Validators.required],
      Building:['', Validators.required],
      landmark:['', Validators.required],
      states:['', Validators.required],
      districts:['', Validators.required],
      city:['',Validators.required],
      stayedDurations:['',Validators.required],
      pincode:['', Validators.required],
      bank:['',Validators.required],
      //   banknames:['',],
      acounttypes:['',],
      holder_name:['',Validators.required],
      branch_name:['',Validators.required],
      //   otherifsccode:['',Validators.required],
      ifsc_code:['',Validators.required],
      //   ifscnames:['',Validators.required],
      account_number:['',Validators.required],   
       
       
      });
  }


}