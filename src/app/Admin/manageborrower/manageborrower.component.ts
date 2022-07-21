import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { AdminserviceService } from '../../services/adminservice.service';
declare var $;
import {CustomService } from '../../custom.service';
import { District } from '../../district';
import { State } from '../../state';
import { City } from '../../city';


@Component({
  selector: 'app-manageborrower',
  templateUrl: './manageborrower.component.html',
  styleUrls: ['./manageborrower.component.css']
})
export class ManageborrowerComponent implements OnInit {

	  @ViewChild('companypopup') companypopup:ElementRef;
    companyRegForm: FormGroup;
  // state and city dynamic
public states:State[];
districts: District[];
public itemsPerPage123;
cities:City[];
public banklist;
public ifsc; 
public ifsccodeName
perPager=5;
public p:number=1;
  constructor(private countryservice: CustomService,
    private formBuilder: FormBuilder,
    public request:AdminserviceService) { 
  this.states = this.countryservice.getStates();
    this.banklist = this.countryservice.getbanks();
    this.districts = this.countryservice.getDistrict();
    console.log(this.banklist);


  }
  public filterStatus = '';

  //get district
 onSelect(statename) {
   console.log(statename);
  this.districts = this.countryservice.getDistrict().filter((item)=> item.statename == statename);
}
//get city based on district
butDisabled: boolean = true;
select(districtid){
  this.cities = this.countryservice.getCities().filter((item)=> item.districtName == districtid);
  
}

  ngOnInit() {
     this.profile_detaile();
     this.companyRegForm = this.formBuilder.group({
      organization: ['', Validators.required],
      pancard: ['', Validators.required],
      gstnumber:['', Validators.required],
      bussiness_since: ['', Validators.required],
      companyturnover:['', Validators.required],
      employee_count:['', Validators.required],
       din: ['', Validators.required],
      cin: ['', Validators.required],
      company_website:['', Validators.required],
      email_id: ['', Validators.required],
      officenumber:['', Validators.required],
      directorname:['', Validators.required],
      directornumber:['', Validators.required],
      partnerName:['', Validators.required],
      partnernumber:['', Validators.required],
      aadhaar_card: ['',Validators.required],
      donthave:[''],
      addresstype:['', Validators.required],
        housenumber:['', Validators.required],
        permanent_street:['', Validators.required],
        Building:['', Validators.required],
        landmark:['', Validators.required],
        states:['', Validators.required],
        districs:[''],
        city:[''],
        stayedDurations:['',Validators.required],
        pincode:['', Validators.required],
        bankname:['',Validators.required],
        banknames:['',],
        accounttype1:['',],
        accountname:['',Validators.required],
        branchname:['',Validators.required],
        otherifsccode:['',Validators.required],
        ifsccode:['',Validators.required],
        ifscnames:['',Validators.required],
        accountnumber:['',Validators.required],  
         Score:['',Validators.required],
        Credit:['',Validators.required], 
        companyname:['',Validators.required],
        doe:['',Validators.required],   
        address_proof:['',Validators.required],
        business_pan:['',Validators.required],
        bank_stat:['',Validators.required],
        it_return:['',Validators.required],
        address_proof_verify:['',Validators.required],
        business_pan_verify:['',Validators.required],
        bank_stat_verify:['',Validators.required],
        balance_sheet:['',Validators.required],
      });
  } 
   
public companyData:any = {};
public profile:any  = {};
public accounttype = ['Savings', 'Salary', 'Current'];
  public companytypes = ['Joint Hindu Family business', 'Sole proprietorship', 'Private Ltd Company', 'Limited Liability Partnership (LLP)', 'Public Ltd Company', 'Unlimited Company', 'Subsidiary Company'];
  public numberofyearsinbusiness = ['< 1', '1 to 3 Years', '3 to 5 Years', ' More than 5 Years'];
  public company_turnover = ['Less than 1 Crore', '1 to 5 Crore', '5 to 10 Crore', '10 to 50 Crore', '50 to 100 Crore', '100 to 500 Crore', 'More than 500 Crore'];
  public numberofemployees = ['1 to 100', '100 to 500', '500 to 1000', '1000 and more'];
  public monthlybalance = ['less than 1 Lakh', 'less than 10 Lakh', 'more than 10 Lakh and less than 1 Cr','More than 1 CR'];
 public stayduration = ['less than 1 year', '1 to 3 Years', '3 to 5 Years', 'More than 5 Years'];
  public profileinfo = [];
  public status1:boolean=true;
  public status2: boolean = true;
  public status3: boolean = false;
  public showw: boolean = true;
  // public status4: boolean = true;
  people = [

    {name: "Yoshi", belt: "black"},
    {name: "Ryu", belt: "red"},
    {name: "Crystal", belt: "purple"}


 ];
 pager;
   profile_detaile(){
    this.request.manage_getprofile().subscribe(data =>{
      console.log("dataaaaaa",data);
      this.pager = data.count
      console.log("counttttttttttttt",this.pager)
      this.profileinfo=data.data;
      console.log("########",this.profileinfo);

    });

  }
  userpag(data:any){
    this.perPager=data;
    console.log("asdasdasdasddddddddddddddddd",this.perPager)
  }

public companyDetail:any
  callborrinpopup(borrower){

  for (let i = 0; i < this.profileinfo.length; i++) {
 
     console.log(this.profileinfo[i].id);
  if(this.profileinfo[i].id == borrower){
    this.companyData = this.profileinfo[i]
    console.log(this.companyData);
    this.companyRegForm.get('organization').disable();
    this.companyRegForm.get('bussiness_since').disable();
    this.companyRegForm.get('companyturnover').disable();
    this.companyRegForm.get('employee_count').disable();
    this.companyRegForm.get('states').disable();
    this.companyRegForm.get('districs').disable();
    this.companyRegForm.get('city').disable();
    this.companyRegForm.get('stayedDurations').disable();
    this.companyRegForm.get('bankname').disable();
    this.companyRegForm.get('accounttype1').disable();
    this.companyRegForm.get('addresstype').disable();


 $(this.companypopup.nativeElement).modal('show'); 
  }
}
   

  }


cancel(){
$(this.companypopup.nativeElement).modal('hide');  
  this.status2 = true;
  this.status3 = false;
  this.status1=true;
  this.showw=true;
  
}

enableCancel(){
  // this.callborrinpopup(borrower);
  this.status1 = !this.status1;
  this.status2 = !this.status2;
  this.status3 = !this.status3;
   this.showw=true;
  this.companyRegForm.get('organization').disable();
    this.companyRegForm.get('bussiness_since').disable();
    this.companyRegForm.get('companyturnover').disable();
    this.companyRegForm.get('employee_count').disable();
    this.companyRegForm.get('states').disable();
    this.companyRegForm.get('districs').disable();
    this.companyRegForm.get('city').disable();
    this.companyRegForm.get('stayedDurations').disable();
    this.companyRegForm.get('bankname').disable();
    this.companyRegForm.get('accounttype1').disable();
    this.companyRegForm.get('addresstype').disable();

    // this.profile_detaile();


}


enableEdit(){
    this.status1 = !this.status1;
    this.status2 = !this.status2;
    this.status3 = !this.status3;
    this.showw=false;
    this.companyRegForm.get('organization').enable();
    this.companyRegForm.get('bussiness_since').enable();
    this.companyRegForm.get('companyturnover').enable();
    this.companyRegForm.get('employee_count').enable();
    this.companyRegForm.get('states').enable();
    this.companyRegForm.get('districs').enable();
    this.companyRegForm.get('city').enable();
    this.companyRegForm.get('stayedDurations').enable();
    this.companyRegForm.get('bankname').enable();
    this.companyRegForm.get('accounttype1').enable();
    this.companyRegForm.get('addresstype').enable();



}

  compnydatareg1() {
  this.status1 = !this.status1;
  this.status2 = !this.status2;
  this.status3 = !this.status3;
   this.showw=true;
 let finaldatas = this.companyData;
 console.log(finaldatas);  
 this.request.manage_borrower(finaldatas).subscribe( data => {
        console.log("backenddaattaaaaaammmmmcomp",data);
    this.companyRegForm.get('organization').disable();
    this.companyRegForm.get('bussiness_since').disable();
    this.companyRegForm.get('companyturnover').disable();
    this.companyRegForm.get('employee_count').disable();
    this.companyRegForm.get('states').disable();
    this.companyRegForm.get('districs').disable();
    this.companyRegForm.get('city').disable();
    this.companyRegForm.get('stayedDurations').disable();
    this.companyRegForm.get('bankname').disable();
    this.companyRegForm.get('accounttype1').disable();
    this.companyRegForm.get('addresstype').disable();
  // this.callborrinpopup(borrower);
  
 });
}

triggerverification1(test){
  
}

triggerverification2(test1){
 
  }     


triggerverification3(test2){
  
  }  


triggerverification4(test3){
  
  }  




showPopup1(url: string){
    window.open(url, "_blank");
}

showPopup2(url: string){
    window.open(url, "_blank");
}

showPopup3(url: string){
    window.open(url, "_blank");
}

showPopup4(url: string){
    window.open(url, "_blank");
}



sendtrue(companydata){
  companydata.is_active = !companydata.is_active;
  this.request.manage_company(companydata).subscribe( data => {
  console.log("backend activeeeeeeee",data);
  // for (var i = 0; i < data.length; i++)
  // {
  // if (data[i].mobilenumber == companydata.mobilenumber) {
  // data[i].is_active = companydata.is_active;
  //      }
  // }
  });
 
}  


sendtoprocessing(profileinfo){
  console.log("*********",profileinfo);

  // this.profile=this.profileinfo;
  // console.log("((((((((())))))))",this.profileinfo);
  this.request.assign_company({'id':profileinfo}).subscribe( data => {
  console.log("backend activeeeeeeee",data);
  this.profile_detaile();
  // if(data=="Assignment Success"){

  // }

  });
 
} 

  // profile_detaile(){
  //   this.request.manage_getprofile().subscribe(data =>{
  //     console.log("dataaaaaa",data);
  //     this.profileinfo=data.data;
  //     console.log("########",this.profileinfo);

  //   });

  // }

 

//upload documents
   // public dat:File;
 
  selectedFile: File;
  public profi:File = null;
  public borrphotofailure:boolean = false;
  public borrphotosuccess:boolean = false;
  public companysurprise:boolean = false;
  public companyfailure:boolean = false;



  UploadDoc(event){
    console.log("Fileeeeeeefrom event",event);
    this.selectedFile= event.target.files[0]
    console.log("tttttyyyyyy",this.selectedFile);

  }

 
      frontphoto(event){
       const uploadData = new FormData();
       uploadData.append('front_photo', this.selectedFile, this.selectedFile.name);
       uploadData.append('id', this.companyData.id);
       console.log("############",uploadData);
       this.request.frontupload(uploadData).subscribe(
      backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi);
        if(this.profi){
        this.borrphotosuccess = ! this.borrphotosuccess;}
        else{
        this.borrphotofailure = ! this.borrphotosuccess;}

        
      },
      error => console.log("erroorrrr",error)
     
    );
       
     }




  present_address_proof(event){
     const uploadData1 = new FormData();
       uploadData1.append('present_address_proof', this.selectedFile, this.selectedFile.name);
       uploadData1.append('id', this.companyData.id);
       console.log("############",uploadData1);
  
    this.request.uploaddocs(uploadData1).subscribe(backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi);
        if(this.profi){
        this.companysurprise = !this.companysurprise;}
        else{
          this.companyfailure = !this.companyfailure;
        }

      }
    );
  }


    business_pan(event){
     const uploadData2 = new FormData();
       uploadData2.append('Business_pan', this.selectedFile, this.selectedFile.name);
       uploadData2.append('id', this.companyData.id);
       console.log("############",uploadData2);
  
    this.request.uploaddocs(uploadData2).subscribe(backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi);
      }
    );
  }

 bank_statement(event){
     const uploadData3 = new FormData();
       uploadData3.append('bank_stmnt_borwr', this.selectedFile, this.selectedFile.name);
       uploadData3.append('id', this.companyData.id);
       console.log("############",uploadData3);
  
    this.request.uploaddocs(uploadData3).subscribe(backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi);
      }
    );
  }


 balance_sheet(event){
     const uploadData4 = new FormData();
       uploadData4.append('Balance_sheet', this.selectedFile, this.selectedFile.name);
       uploadData4.append('id', this.companyData.id);
       console.log("############",uploadData4);
  
    this.request.uploaddocs(uploadData4).subscribe(backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi)
      }
    );
  }
}

//second html page ts file below
@Component({
  selector: 'app-manageproces',
  templateUrl: './manageprocessingapplications.html',
  styleUrls: ['./manageborrower.component.css']
  })
export class ManageProcessingComponent implements OnInit {

    @ViewChild('companypopup') companypopup:ElementRef;
    companyRegForm: FormGroup;
  // state and city dynamic
public states:State[];
districts: District[];
cities:City[];
public banklist;
public ifsc; 
public ifsccodeName;
public searchborrower:string;
public namesearch:string;




  constructor(private countryservice: CustomService,
    private formBuilder: FormBuilder,

    public request:AdminserviceService) { 
  this.states = this.countryservice.getStates();
    this.banklist = this.countryservice.getbanks();
    this.districts = this.countryservice.getDistrict();
    console.log(this.banklist);


  }

  //get district
 onSelect(statename) {
   console.log(statename);
  this.districts = this.countryservice.getDistrict().filter((item)=> item.statename == statename);
}
//get city based on district
butDisabled: boolean = true;
select(districtid){
  this.cities = this.countryservice.getCities().filter((item)=> item.districtName == districtid);
  
}
   ngOnInit() {
     this.processing_application();
      this.companyRegForm = this.formBuilder.group({
      organization: ['', Validators.required],
      pancard: ['', Validators.required],
      gstnumber:['', Validators.required],
      bussiness_since: ['', Validators.required],
      companyturnover:['', Validators.required],
      employee_count:['', Validators.required],
       din: ['', Validators.required],
      cin: ['', Validators.required],
      company_website:['', Validators.required],
      email_id: ['', Validators.required],
      officenumber:['', Validators.required],
      directorname:['', Validators.required],
      directornumber:['', Validators.required],
      partnerName:['', Validators.required],
      partnernumber:['', Validators.required],
      aadhaar_card: ['',Validators.required],
      donthave:[''],
      addresstype:['', Validators.required],
        housenumber:['', Validators.required],
        permanent_street:['', Validators.required],
        Building:['', Validators.required],
        landmark:['', Validators.required],
        states:['', Validators.required],
        districs:[''],
        city:[''],
        stayedDurations:['',Validators.required],
        pincode:['', Validators.required],
        bankname:['',Validators.required],
        banknames:['',],
        accounttype1:['',],
        accountname:['',Validators.required],
        branchname:['',Validators.required],
        otherifsccode:['',Validators.required],
        ifsccode:['',Validators.required],
        ifscnames:['',Validators.required],
        accountnumber:['',Validators.required],  
         Score:['',Validators.required],
        Credit:['',Validators.required], 
        companyname:['',Validators.required],
        doe:['',Validators.required],   
        address_proof:['',Validators.required],
        business_pan:['',Validators.required],
        bank_stat:['',Validators.required],
        it_return:['',Validators.required],
        address_proof_verify:['',Validators.required],
        business_pan_verify:['',Validators.required],
        bank_stat_verify:['',Validators.required],
        balance_sheet:['',Validators.required],
      });
   }
public companyData:any = {};
public profile:any  = {};
public accounttype = ['Savings', 'Salary', 'Current'];
  public companytypes = ['Joint Hindu Family business', 'Sole proprietorship', 'Private Ltd Company', 'Limited Liability Partnership (LLP)', 'Public Ltd Company', 'Unlimited Company', 'Subsidiary Company'];
  public numberofyearsinbusiness = ['< 1', '1 to 3 Years', '3 to 5 Years', ' More than 5 Years'];
  public company_turnover = ['Less than 1 Crore', '1 to 5 Crore', '5 to 10 Crore', '10 to 50 Crore', '50 to 100 Crore', '100 to 500 Crore', 'More than 500 Crore'];
  public numberofemployees = ['1 to 100', '100 to 500', '500 to 1000', '1000 and more'];
  public monthlybalance = ['less than 1 Lakh', 'less than 10 Lakh', 'more than 10 Lakh and less than 1 Cr','More than 1 CR'];
 public stayduration = ['less than 1 year', '1 to 3 Years', '3 to 5 Years', 'More than 5 Years'];
  public profileinfo = [];
  public status1:boolean=true;
  public status2: boolean = true;
  public status3: boolean = false;
  public profileinfo1 = [];
  public showw: boolean = true;





   processing_application(){
    this.request.processing_details().subscribe(data =>{
      console.log("proicessinggggggggg",data);
      this.profileinfo1=data.data;
      console.log("process aplllllll########",this.profileinfo1);

    });

}

public companyDetail:any
  callborrinpopup(borrower){

  for (let i = 0; i < this.profileinfo1.length; i++) {
 
     console.log(this.profileinfo1[i].id);
  if(this.profileinfo1[i].id == borrower){
    this.companyData = this.profileinfo1[i]
    console.log(this.companyData);
    this.companyRegForm.get('organization').disable();
    this.companyRegForm.get('bussiness_since').disable();
    this.companyRegForm.get('companyturnover').disable();
    this.companyRegForm.get('employee_count').disable();
    this.companyRegForm.get('states').disable();
    this.companyRegForm.get('districs').disable();
    this.companyRegForm.get('city').disable();
    this.companyRegForm.get('stayedDurations').disable();
    this.companyRegForm.get('bankname').disable();
    this.companyRegForm.get('accounttype1').disable();
    this.companyRegForm.get('addresstype').disable();


 $(this.companypopup.nativeElement).modal('show'); 
  }
}
   

  }


  cancel(){
$(this.companypopup.nativeElement).modal('hide');  
  this.status2 = true;
  this.status3 = false;
  this.status1=true;
  this.showw=true;

}

enableCancel(){
  // this.callborrinpopup(borrower);
  this.status1 = !this.status1;
  this.status2 = !this.status2;
  this.status3 = !this.status3;
 this.showw=true;
  this.companyRegForm.get('organization').disable();
    this.companyRegForm.get('bussiness_since').disable();
    this.companyRegForm.get('companyturnover').disable();
    this.companyRegForm.get('employee_count').disable();
    this.companyRegForm.get('states').disable();
    this.companyRegForm.get('districs').disable();
    this.companyRegForm.get('city').disable();
    this.companyRegForm.get('stayedDurations').disable();
    this.companyRegForm.get('bankname').disable();
    this.companyRegForm.get('accounttype1').disable();
    this.companyRegForm.get('addresstype').disable();

    // this.profile_detaile();


}


enableEdit(){
    this.status1 = !this.status1;
    this.status2 = !this.status2;
    this.status3 = !this.status3;
        this.showw=false;
    this.companyRegForm.get('organization').enable();
    this.companyRegForm.get('bussiness_since').enable();
    this.companyRegForm.get('companyturnover').enable();
    this.companyRegForm.get('employee_count').enable();
    this.companyRegForm.get('states').enable();
    this.companyRegForm.get('districs').enable();
    this.companyRegForm.get('city').enable();
    this.companyRegForm.get('stayedDurations').enable();
    this.companyRegForm.get('bankname').enable();
    this.companyRegForm.get('accounttype1').enable();
    this.companyRegForm.get('addresstype').enable();



}

  compnydatareg1() {
  this.status1 = !this.status1;
  this.status2 = !this.status2;
  this.status3 = !this.status3;
  this.showw=true;
 let finaldatas = this.companyData;
 console.log(finaldatas);  
 this.request.manage_borrower(finaldatas).subscribe( data => {
        console.log("backenddaattaaaaaammmmmcomp",data);
    this.companyRegForm.get('organization').disable();
    this.companyRegForm.get('bussiness_since').disable();
    this.companyRegForm.get('companyturnover').disable();
    this.companyRegForm.get('employee_count').disable();
    this.companyRegForm.get('states').disable();
    this.companyRegForm.get('districs').disable();
    this.companyRegForm.get('city').disable();
    this.companyRegForm.get('stayedDurations').disable();
    this.companyRegForm.get('bankname').disable();
    this.companyRegForm.get('accounttype1').disable();
    this.companyRegForm.get('addresstype').disable();
  // this.callborrinpopup(borrower);
 });
}

triggerverification1(test){
  
}

triggerverification2(test1){
 
  }     


triggerverification3(test2){
  
  }  


triggerverification4(test3){
  
  }  


updatecreditremarks(details2)
{
  console.log("---CREDIT LIMIT--- & ---REMARKS---",details2);
  this.request.manage_borrower(details2).subscribe(data =>{
  console.log("**************",data);
   this.processing_application();
 });
}


showPopup1(url: string){
    window.open(url, "_blank");
}

showPopup2(url: string){
    window.open(url, "_blank");
}

showPopup3(url: string){
    window.open(url, "_blank");
}

showPopup4(url: string){
    window.open(url, "_blank");
}

sendtrue(companydata){
  companydata.is_active = !companydata.is_active;
  this.request.manage_company(companydata).subscribe( data => {
  console.log("backend activeeeeeeee",data);
  // for (var i = 0; i < data.length; i++)
  // {
  // if (data[i].mobilenumber == companydata.mobilenumber) {
  // data[i].is_active = companydata.is_active;
  //      }
  // }
  });
 
}  


 
  selectedFile: File;
  public profi:File = null;
  public borrphotofailure:boolean = false;
  public borrphotosuccess:boolean = false;
  public companysurprise:boolean = false;
  public companyfailure:boolean = false;



  UploadDoc(event){
    console.log("Fileeeeeeefrom event",event);
    this.selectedFile= event.target.files[0]
    console.log("tttttyyyyyy",this.selectedFile);

  }

 
      frontphoto(event){
       const uploadData = new FormData();
       uploadData.append('front_photo', this.selectedFile, this.selectedFile.name);
       uploadData.append('id', this.companyData.id);
       console.log("############",uploadData);
       this.request.frontupload(uploadData).subscribe(
      backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi);
        if(this.profi){
        this.borrphotosuccess = ! this.borrphotosuccess;}
        else{
        this.borrphotofailure = ! this.borrphotosuccess;}

        
        
      },
      error => console.log("erroorrrr",error)
     
    );
     }


     present_address_proof(event){
     const uploadData1 = new FormData();
       uploadData1.append('present_address_proof', this.selectedFile, this.selectedFile.name);
       uploadData1.append('id', this.companyData.id);
       console.log("############",uploadData1);
  
    this.request.uploaddocs(uploadData1).subscribe(backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi);
        if(this.profi){
        this.companysurprise = !this.companysurprise;}
        else{
          this.companyfailure = !this.companyfailure;
        }

      }
    );
  }


    business_pan(event){
     const uploadData2 = new FormData();
       uploadData2.append('Business_pan', this.selectedFile, this.selectedFile.name);
       uploadData2.append('id', this.companyData.id);
       console.log("############",uploadData2);
  
    this.request.uploaddocs(uploadData2).subscribe(backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi);
      }
    );
  }

 bank_statement(event){
     const uploadData3 = new FormData();
       uploadData3.append('bank_stmnt_borwr', this.selectedFile, this.selectedFile.name);
       uploadData3.append('id', this.companyData.id);
       console.log("############",uploadData3);
  
    this.request.uploaddocs(uploadData3).subscribe(backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi);
      }
    );
  }


 balance_sheet(event){
     const uploadData4 = new FormData();
       uploadData4.append('Balance_sheet', this.selectedFile, this.selectedFile.name);
       uploadData4.append('id', this.companyData.id);
       console.log("############",uploadData4);
  
    this.request.uploaddocs(uploadData4).subscribe(backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi)
      }
    );
  }


}




//Third html page ts file below
@Component({
  selector: 'app-managecomplete',
  templateUrl: './managecompletedapp.html',
  styleUrls: ['./manageborrower.component.css']
  })
export class ManageCompletedComponent implements OnInit {

    @ViewChild('companypopup') companypopup:ElementRef;
    companyRegForm: FormGroup;
  // state and city dynamic
public states:State[];
districts: District[];
cities:City[];
public banklist;
public ifsc; 
public ifsccodeName;
public completeSearch;





  constructor(private countryservice: CustomService,
    private formBuilder: FormBuilder,

    public request:AdminserviceService) { 
  this.states = this.countryservice.getStates();
    this.banklist = this.countryservice.getbanks();
    this.districts = this.countryservice.getDistrict();
    console.log(this.banklist);


  }

  //get district
 onSelect(statename) {
   console.log(statename);
  this.districts = this.countryservice.getDistrict().filter((item)=> item.statename == statename);
}
//get city based on district
butDisabled: boolean = true;
select(districtid){
  this.cities = this.countryservice.getCities().filter((item)=> item.districtName == districtid);
  
}
   ngOnInit() {
     this.completed_application();
      this.companyRegForm = this.formBuilder.group({
      organization: ['', Validators.required],
      pancard: ['', Validators.required],
      gstnumber:['', Validators.required],
      bussiness_since: ['', Validators.required],
      companyturnover:['', Validators.required],
      employee_count:['', Validators.required],
       din: ['', Validators.required],
      cin: ['', Validators.required],
      company_website:['', Validators.required],
      email_id: ['', Validators.required],
      officenumber:['', Validators.required],
      directorname:['', Validators.required],
      directornumber:['', Validators.required],
      partnerName:['', Validators.required],
      partnernumber:['', Validators.required],
      aadhaar_card: ['',Validators.required],
      donthave:[''],
      addresstype:['', Validators.required],
        housenumber:['', Validators.required],
        permanent_street:['', Validators.required],
        Building:['', Validators.required],
        landmark:['', Validators.required],
        states:['', Validators.required],
        districs:[''],
        city:[''],
        stayedDurations:['',Validators.required],
        pincode:['', Validators.required],
        bankname:['',Validators.required],
        banknames:['',],
        accounttype1:['',],
        accountname:['',Validators.required],
        branchname:['',Validators.required],
        otherifsccode:['',Validators.required],
        ifsccode:['',Validators.required],
        ifscnames:['',Validators.required],
        accountnumber:['',Validators.required],  
         Score:['',Validators.required],
        Credit:['',Validators.required], 
        companyname:['',Validators.required],
        doe:['',Validators.required],   
        address_proof:['',Validators.required],
        business_pan:['',Validators.required],
        bank_stat:['',Validators.required],
        it_return:['',Validators.required],
        address_proof_verify:['',Validators.required],
        business_pan_verify:['',Validators.required],
        bank_stat_verify:['',Validators.required],
        balance_sheet:['',Validators.required],
      });
   }
public companyData:any = {};
public profile:any  = {};
public accounttype = ['Savings', 'Salary', 'Current'];
  public companytypes = ['Joint Hindu Family business', 'Sole proprietorship', 'Private Ltd Company', 'Limited Liability Partnership (LLP)', 'Public Ltd Company', 'Unlimited Company', 'Subsidiary Company'];
  public numberofyearsinbusiness = ['< 1', '1 to 3 Years', '3 to 5 Years', ' More than 5 Years'];
  public company_turnover = ['Less than 1 Crore', '1 to 5 Crore', '5 to 10 Crore', '10 to 50 Crore', '50 to 100 Crore', '100 to 500 Crore', 'More than 500 Crore'];
  public numberofemployees = ['1 to 100', '100 to 500', '500 to 1000', '1000 and more'];
  public monthlybalance = ['less than 1 Lakh', 'less than 10 Lakh', 'more than 10 Lakh and less than 1 Cr','More than 1 CR'];
 public stayduration = ['less than 1 year', '1 to 3 Years', '3 to 5 Years', 'More than 5 Years'];
  public profileinfo = [];
  public status1:boolean=true;
  public status2: boolean = true;
  public status3: boolean = false;
  public profileinfo2 = [];
  public showw: boolean = true;



  completed_application(){
    this.request.completed_details().subscribe(data =>{
      console.log("completeddddddddddd",data);
      this.profileinfo2=data.data;
      console.log("completedddddd aplllllll########",this.profileinfo2);

    });

}

public companyDetail:any
  callborrinpopup(borrower){

  for (let i = 0; i < this.profileinfo2.length; i++) {
 
     console.log(this.profileinfo2[i].id);
  if(this.profileinfo2[i].id == borrower){
    this.companyData = this.profileinfo2[i]
    console.log(this.companyData);
    this.companyRegForm.get('organization').disable();
    this.companyRegForm.get('bussiness_since').disable();
    this.companyRegForm.get('companyturnover').disable();
    this.companyRegForm.get('employee_count').disable();
    this.companyRegForm.get('states').disable();
    this.companyRegForm.get('districs').disable();
    this.companyRegForm.get('city').disable();
    this.companyRegForm.get('stayedDurations').disable();
    this.companyRegForm.get('bankname').disable();
    this.companyRegForm.get('accounttype1').disable();
    this.companyRegForm.get('addresstype').disable();


 $(this.companypopup.nativeElement).modal('show'); 
  }
}
   

  }


  cancel(){
$(this.companypopup.nativeElement).modal('hide');  
  this.status2 = true;
  this.status3 = false;
  this.status1=true;
   this.showw=true;
}

enableCancel(){
  // this.callborrinpopup(borrower);
  this.status1 = !this.status1;
  this.status2 = !this.status2;
  this.status3 = !this.status3;
   this.showw=true;
  this.companyRegForm.get('organization').disable();
    this.companyRegForm.get('bussiness_since').disable();
    this.companyRegForm.get('companyturnover').disable();
    this.companyRegForm.get('employee_count').disable();
    this.companyRegForm.get('states').disable();
    this.companyRegForm.get('districs').disable();
    this.companyRegForm.get('city').disable();
    this.companyRegForm.get('stayedDurations').disable();
    this.companyRegForm.get('bankname').disable();
    this.companyRegForm.get('accounttype1').disable();
    this.companyRegForm.get('addresstype').disable();

    // this.profile_detaile();


}


enableEdit(){
    this.status1 = !this.status1;
    this.status2 = !this.status2;
    this.status3 = !this.status3;
        this.showw=false;
    this.companyRegForm.get('organization').enable();
    this.companyRegForm.get('bussiness_since').enable();
    this.companyRegForm.get('companyturnover').enable();
    this.companyRegForm.get('employee_count').enable();
    this.companyRegForm.get('states').enable();
    this.companyRegForm.get('districs').enable();
    this.companyRegForm.get('city').enable();
    this.companyRegForm.get('stayedDurations').enable();
    this.companyRegForm.get('bankname').enable();
    this.companyRegForm.get('accounttype1').enable();
    this.companyRegForm.get('addresstype').enable();



}

  compnydatareg1() {
  this.status1 = !this.status1;
  this.status2 = !this.status2;
  this.status3 = !this.status3;
  this.showw=true;
 let finaldatas = this.companyData;
 console.log(finaldatas);  
 this.request.manage_borrower(finaldatas).subscribe( data => {
        console.log("backenddaattaaaaaammmmmcomp",data);
    this.companyRegForm.get('organization').disable();
    this.companyRegForm.get('bussiness_since').disable();
    this.companyRegForm.get('companyturnover').disable();
    this.companyRegForm.get('employee_count').disable();
    this.companyRegForm.get('states').disable();
    this.companyRegForm.get('districs').disable();
    this.companyRegForm.get('city').disable();
    this.companyRegForm.get('stayedDurations').disable();
    this.companyRegForm.get('bankname').disable();
    this.companyRegForm.get('accounttype1').disable();
    this.companyRegForm.get('addresstype').disable();
  // this.callborrinpopup(borrower);
 });
}

triggerverification1(test){
  
}

triggerverification2(test1){
 
  }     


triggerverification3(test2){
  
  }  


triggerverification4(test3){
  
  }  


updatecreditremarks(details2)
{
  console.log("---CREDIT LIMIT--- & ---REMARKS---",details2);
  this.request.manage_borrower(details2).subscribe(data =>{
  console.log("**************",data);
 });
}


showPopup1(url: string){
    window.open(url, "_blank");
}

showPopup2(url: string){
    window.open(url, "_blank");
}

showPopup3(url: string){
    window.open(url, "_blank");
}

showPopup4(url: string){
    window.open(url, "_blank");
}


 
  selectedFile: File;
  public profi:File = null;
  public borrphotofailure:boolean = false;
  public borrphotosuccess:boolean = false;
  public companysurprise:boolean = false;
  public companyfailure:boolean = false;



  UploadDoc(event){
    console.log("Fileeeeeeefrom event",event);
    this.selectedFile= event.target.files[0]
    console.log("tttttyyyyyy",this.selectedFile);

  }

 
      frontphoto(event){
       const uploadData = new FormData();
       uploadData.append('front_photo', this.selectedFile, this.selectedFile.name);
       uploadData.append('id', this.companyData.id);
       console.log("############",uploadData);
       this.request.frontupload(uploadData).subscribe(
      backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi);
        if(this.profi){
        this.borrphotosuccess = ! this.borrphotosuccess;}
        else{
        this.borrphotofailure = ! this.borrphotosuccess;}

        
        
      },
      error => console.log("erroorrrr",error)
     
    );
     }


     present_address_proof(event){
     const uploadData1 = new FormData();
       uploadData1.append('present_address_proof', this.selectedFile, this.selectedFile.name);
       uploadData1.append('id', this.companyData.id);
       console.log("############",uploadData1);
  
    this.request.uploaddocs(uploadData1).subscribe(backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi);
        if(this.profi){
        this.companysurprise = !this.companysurprise;}
        else{
          this.companyfailure = !this.companyfailure;
        }

      }
    );
  }


    business_pan(event){
     const uploadData2 = new FormData();
       uploadData2.append('Business_pan', this.selectedFile, this.selectedFile.name);
       uploadData2.append('id', this.companyData.id);
       console.log("############",uploadData2);
  
    this.request.uploaddocs(uploadData2).subscribe(backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi);
      }
    );
  }

 bank_statement(event){
     const uploadData3 = new FormData();
       uploadData3.append('bank_stmnt_borwr', this.selectedFile, this.selectedFile.name);
       uploadData3.append('id', this.companyData.id);
       console.log("############",uploadData3);
  
    this.request.uploaddocs(uploadData3).subscribe(backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi);
      }
    );
  }


 balance_sheet(event){
     const uploadData4 = new FormData();
       uploadData4.append('Balance_sheet', this.selectedFile, this.selectedFile.name);
       uploadData4.append('id', this.companyData.id);
       console.log("############",uploadData4);
  
    this.request.uploaddocs(uploadData4).subscribe(backResponse => {
        console.log("hgfffffghfgjty",backResponse);
        this.profi=backResponse;
        this.selectedFile = null;
        console.log("neeeeeeeeee",this.profi);
        alert(this.profi)
      }
    );
  }

  sendtrue(companydata){
  companydata.is_active = !companydata.is_active;
  this.request.manage_company(companydata).subscribe( data => {
  console.log("backend activeeeeeeee",data);

  });
 
}  





}
