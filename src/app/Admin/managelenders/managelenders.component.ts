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
  selector: 'app-managelenders',
  templateUrl: './managelenders.component.html',
  styleUrls: ['./managelenders.component.css']
})
export class ManagelendersComponent implements OnInit {
   @ViewChild('nbfcpopup') nbfcpopup:ElementRef;
   companyRegForm: FormGroup;
public selectpages:any=10;
  public states:State[];
districts: District[];
cities:City[];
public banklist;
public ifsc; 
public ifsccodeName
public leanderSearch:string;
public filterStatus:any;
// public filterStatus:string;





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
  this.processing_nbfc();
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
public nbfcinfo = [];  
public nbfcData:any = {};
public companyData:any = {};
public showw: boolean = true;


  selectedFile: File;
  public profi:File = null;
  public borrphotofailure:boolean = false;
  public borrphotosuccess:boolean = false;
  public companysurprise:boolean = false;
  public companyfailure:boolean = false;

processing_nbfc(){
    this.request.processingnbfc_details().subscribe(data =>{
    console.log("########",data);
    this.nbfcinfo=data.data;
    console.log("Processing NBFC",this.nbfcinfo);

    });

}

pages(data:any){
  this.pages=data;
  console.log("assssssssssss",this.pages)
}


sendnbfctrue(nbfcdata){
  nbfcdata.is_active = !nbfcdata.is_active;
  this.request.manage_company(nbfcdata).subscribe( data => {
  console.log("----- NBFC SEND TRUE -----",data);
  this.processing_nbfc();

  });
 
}  

  callborrinpopup(nbfc){

  for (let i = 0; i < this.nbfcinfo.length; i++) {
 
     console.log(this.nbfcinfo[i].id);
  if(this.nbfcinfo[i].id == nbfc){
    this.nbfcData = this.nbfcinfo[i]
    console.log("((((((()))))",this.nbfcData);
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


 $(this.nbfcpopup.nativeElement).modal('show'); 
  }
}
   

  }
cancel(){
$(this.nbfcpopup.nativeElement).modal('hide');  
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

  nbfcadminupdate() {
  this.status1 = !this.status1;
  this.status2 = !this.status2;
  this.status3 = !this.status3;
 let finaldatas = this.nbfcData;
  this.showw=true;
 console.log(finaldatas);  
 this.request.update_nbfc(finaldatas).subscribe( data => {
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


// triggerverification3(test2){
  
//   }  


// triggerverification4(test3){
  
//   }  




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

UploadDoc(event){
    console.log("Fileeeeeeefrom event",event);
    this.selectedFile= event.target.files[0]
    console.log("tttttyyyyyy",this.selectedFile);

  }

 
      frontphoto(event){
       const uploadData = new FormData();
       uploadData.append('front_photo', this.selectedFile, this.selectedFile.name);
       uploadData.append('id', this.nbfcData.id);
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





 bank_statement(event){
     const uploadData3 = new FormData();
       uploadData3.append('bank_statement', this.selectedFile, this.selectedFile.name);
       uploadData3.append('id', this.nbfcData.id);
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


 licencecopy(event){
     const uploadData4 = new FormData();
       uploadData4.append('licence_copy', this.selectedFile, this.selectedFile.name);
       uploadData4.append('id', this.nbfcData.id);
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



@Component({
  selector: 'app-managelenders',
  templateUrl: './registerednbfc.component.html',
  styleUrls: ['./managelenders.component.css']
})
export class RegisteredNbfcComponent implements OnInit {
   @ViewChild('nbfcpopup') nbfcpopup:ElementRef;
   companyRegForm: FormGroup;
public selectpages:any=5;
  public states:State[];
districts: District[];
cities:City[];
public banklist;
public ifsc; 
public ifsccodeName
public registerNbfc:string;
public filterStatus:string;





  constructor(private countryservice: CustomService,
    private formBuilder: FormBuilder,

    public request:AdminserviceService) { 
  this.states = this.countryservice.getStates();
    this.banklist = this.countryservice.getbanks();
    this.districts = this.countryservice.getDistrict();
    console.log(this.banklist);
    

  }
  // public filterStatus = '';

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
  this.registered_nbfc();
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
public nbfcinfo = [];  
public nbfcData:any = {};
public companyData:any = {};

public showw: boolean = true;
  selectedFile: File;
  public profi:File = null;
  public borrphotofailure:boolean = false;
  public borrphotosuccess:boolean = false;
  public companysurprise:boolean = false;
  public companyfailure:boolean = false;

registered_nbfc(){
    this.request.registerednbfc_details().subscribe(data =>{
    console.log("########",data);
    this.nbfcinfo=data.data;
    console.log("Processing NBFC",this.nbfcinfo);

    });

}

pages(data:any){
  this.pages=data;
  console.log("assssssssssss",this.pages)
}


sendnbfctrue(nbfcdata){
  nbfcdata.is_active = !nbfcdata.is_active;
  this.request.manage_company(nbfcdata).subscribe( data => {
  console.log("----- NBFC SEND TRUE -----",data);
    this.registered_nbfc();


  });
 
}  

  callborrinpopup(nbfc){

  for (let i = 0; i < this.nbfcinfo.length; i++) {
 
     console.log(this.nbfcinfo[i].id);
  if(this.nbfcinfo[i].id == nbfc){
    this.nbfcData = this.nbfcinfo[i]
    console.log("((((((()))))",this.nbfcData);
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


 $(this.nbfcpopup.nativeElement).modal('show'); 
  }
}
   

  }
cancel(){
$(this.nbfcpopup.nativeElement).modal('hide');  
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

  nbfcadminupdate() {
  this.status1 = !this.status1;
  this.status2 = !this.status2;
  this.status3 = !this.status3;
 let finaldatas = this.nbfcData;
  this.showw=true;
 console.log(finaldatas);  
 this.request.update_nbfc(finaldatas).subscribe( data => {
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


// triggerverification3(test2){
  
//   }  


// triggerverification4(test3){
  
//   }  




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

UploadDoc(event){
    console.log("Fileeeeeeefrom event",event);
    this.selectedFile= event.target.files[0]
    console.log("tttttyyyyyy",this.selectedFile);

  }

 
      frontphoto(event){
       const uploadData = new FormData();
       uploadData.append('front_photo', this.selectedFile, this.selectedFile.name);
       uploadData.append('id', this.nbfcData.id);
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




 bank_statement(event){
     const uploadData3 = new FormData();
       uploadData3.append('bank_statement', this.selectedFile, this.selectedFile.name);
       uploadData3.append('id', this.nbfcData.id);
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


 licencecopy(event){
     const uploadData4 = new FormData();
       uploadData4.append('licence_copy', this.selectedFile, this.selectedFile.name);
       uploadData4.append('id', this.nbfcData.id);
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
