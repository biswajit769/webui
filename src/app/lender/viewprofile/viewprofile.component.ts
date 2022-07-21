import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LenderserviceService } from '../../services/lenderservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { District } from '../../district';
import { State } from '../../state';
import { City } from '../../city';
import { Bank } from '../../bank';
import { Ifsc } from '../../ifsc';
import { CustomService } from '../../custom.service';

declare var $;
@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  @ViewChild('bankdetailspopup') bankdetailspopup: ElementRef;
  @ViewChild('updatesucess') updatesucess: ElementRef;
  public edit:boolean=false;

  mobpattern = /^([6-9]){1}([0-9]){9}?$/;
  companypan = /^[A-Z]{3}(P|C|H|F|A|T|B|L|J|G)[a-zA-Z][\d]{4}[\A-Z]?$/
  panpattern = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
  gstpattern = /^([0-9]){2}([A-Z]){5}([0-9]){4}([A-Z]){1}([0-9]){1}([A-Z]){1}([0-9]){1}?$/;
  emailpattern = /^[a-zA-Z]+[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,5}$/;
  websitepattern = /^(http?|https):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;


  public accounttype = ['Savings', 'Salary', 'Current'];
  public companytypes = ['Joint Hindu Family business', 'Sole proprietorship', 'Private Ltd Company', 'Limited Liability Partnership (LLP)', 'Public Ltd Company', 'Unlimited Company', 'Subsidiary Company'];
  public numberofyearsinbusiness = ['< 1', '1 to 3 Years', '3 to 5 Years', ' More than 5 Years'];
  public company_turnover = ['Less than 1 Crore', '1 to 5 Crore', '5 to 10 Crore', '10 to 50 Crore', '50 to 100 Crore', '100 to 500 Crore', 'More than 500 Crore'];
  public numberofemployees = ['1 to 100', '100 to 500', '500 to 1000', '1000 and more'];
  public monthlybalance = ['less than 1 Lakh', 'less than 10 Lakh', 'more than 10 Lakh and less than 1 Cr', 'More than 1 CR'];
  public stayduration = ['less than 1 year', '1 to 3 Years', '3 to 5 Years', 'More than 5 Years'];

  nbfcUpdateForm: FormGroup;
  public states: State[];
  districts: District[];
  public city: City[];

  public bankname;
  public ifsc;
  public ifsccodeName;
  public nbfcdetails: any = {};

  constructor(private formBuilder: FormBuilder, public lenderService: LenderserviceService, private countryservice: CustomService) {
    this.getnbfcviewProfile();
    this.bankname = this.countryservice.getbanks();
    this.states = this.countryservice.getStates();
    this.districts = this.countryservice.getDistrict();
    this.city = this.countryservice.getCities();
  }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  //get district
  onSelect(statename) {
    console.log(statename);
    this.districts = this.countryservice.getDistrict().filter((item) => item.statename == statename);
  }
  //get city based on district
  butDisabled: boolean = true;
  select(districtid) {
    this.city = this.countryservice.getCities().filter((item) => item.districtName == districtid);

  }
  //get ifsc
  public bankshow
  selctifsc(bank) {
    if (bank !== 'Others') {
      this.bankshow = true;
      console.log('bank name', bank)
      this.ifsc = this.countryservice.getIfscs().filter((item) => item.bankName == bank);

      this.nbfcdetails.ifsccodeName = this.ifsc['0'].ifscname;
      console.log('bank name', this.nbfcdetails.ifsccodeName)
      $(this.bankdetailspopup.nativeElement).modal('show');

    }
    else {
      $(this.bankdetailspopup.nativeElement).modal('show');
      this.bankshow = false;
    }
  }
  public updateddata: any = {};
  public status1: boolean = true;
  public status2: boolean = false;
  public status3: boolean = true;
  public types: boolean = true;
   public types1: boolean = false;

    public pancards: boolean = true;
   public pancards1: boolean = false;

   public gstnumbers: boolean = true;
   public gstnumbers1: boolean = false;

   public numbersyears: boolean = true;
   public numbersyears1: boolean = false;

   public turnovers: boolean = true;
   public turnovers1: boolean = false;

   public dinnumbers: boolean = true;
   public dinnumbers1: boolean = false;

   public licencenumbers: boolean = true;
   public licencenumbers1: boolean = false;

   public companywebsites: boolean = true;
   public companywebsites1: boolean = false;

   public officialemailids: boolean = true;
   public officialemailids1: boolean = false;

   public contactnumberss: boolean = true;
   public contactnumberss1: boolean = false;

   public directornameses: boolean = true;
   public directornameses1: boolean = false;

   public directormnumbers: boolean = true;
   public directormnumbers1: boolean = false;

   public companypertnernamess: boolean = true;
   public companypertnernamess1: boolean = false;

   public partnermobilnumberss: boolean = true;
   public partnermobilnumberss1: boolean = false;

public aadharenumberss: boolean = true;
   public aadharenumberss1: boolean = false;

public companyadddress: boolean = true;
   public companyadddress1: boolean = false;

public flatrooms: boolean = true;
   public flatrooms1: boolean = false;

   public bwuildings: boolean = true;
   public bwuildings1: boolean = false;

   public ststreets: boolean = true;
   public ststreets1: boolean = false;

   public landmarkss: boolean = true;
   public landmarkss1: boolean = false;

   public statesss: boolean = true;
   public statesss1: boolean = false;

    public districtss: boolean = true;
   public districtss1: boolean = false;

    public cityss: boolean = true;
   public cityss1: boolean = false;

 public howlongss: boolean = true;
   public howlongss1: boolean = false;

   public pincodess: boolean = true;
   public pincodess1: boolean = false;

   public bankkcs: boolean = true;
   public bankkcs1: boolean = false;

    public ifcscssnums: boolean = true;
   public ifcscssnums1: boolean = false;

 public branchnamees: boolean = true;
   public branchnamees1: boolean = false;

   public accountnmamess: boolean = true;
   public accountnmamess1: boolean = false;

   public accountnumbersed: boolean = true;
   public accountnumbersed1: boolean = false;
   

   public accounttypeeeds: boolean = true;
   public accounttypeeeds1: boolean = false;

    public companynameesds: boolean = true;
   public companynameesds1: boolean = false;

    public doesesas: boolean = true;
   public doesesas1: boolean = false;
   

  get editform() { return this.nbfcUpdateForm.controls; }
  public getnbfcviewProfile() {
    this.lenderService.nbfcprofileview().subscribe(data => {
      this.nbfcdetails = data;
      this.nbfcUpdateForm.get('organization').disable();
      this.nbfcUpdateForm.get('bussiness_since').disable();
      this.nbfcUpdateForm.get('companyturnover').disable();
      this.nbfcUpdateForm.get('employee_count').disable();
      this.nbfcUpdateForm.get('states').disable();
      this.nbfcUpdateForm.get('districts').disable();
      this.nbfcUpdateForm.get('city').disable();
      this.nbfcUpdateForm.get('stayedDurations').disable();
      this.nbfcUpdateForm.get('bankname').disable();
      this.nbfcUpdateForm.get('accounttype1').disable();
      console.log("********** DATA ********", this.nbfcdetails);

    })

  }

  public save(updatedetails) {
    this.status1 = !this.status1;
    this.status2 = !this.status2;
    this.status3 = !this.status3;
    this.edit=!this.edit;
    this.tests=true;
    this.types=true;
    this.types1=false;
 
 this.pancards=true;
    this.pancards1=false;

    this.gstnumbers=true;
    this.gstnumbers1=false;

    this.numbersyears=true;
    this.numbersyears1=false;

this.turnovers=true;
    this.turnovers1=false;

    this.dinnumbers=true;
    this.dinnumbers1=false;

    this.licencenumbers=true;
    this.licencenumbers1=false;

  this.companywebsites=true;
    this.companywebsites1=false;

    this.officialemailids=true;
    this.officialemailids1=false;

    this.contactnumberss=true;
    this.contactnumberss1=false;

    this.directornameses=true;
    this.directornameses1=false;

    this.directormnumbers=true;
    this.directormnumbers1=false;

    this.companypertnernamess=true;
    this.companypertnernamess1=false;

    this.partnermobilnumberss=true;
    this.partnermobilnumberss1=false;
  
  this.aadharenumberss=true;
    this.aadharenumberss1=false;

this.companyadddress=true;
    this.companyadddress1=false;

    this.flatrooms=true;
    this.flatrooms1=false;

this.bwuildings=true;
    this.bwuildings1=false;

    this.ststreets=true;
    this.ststreets1=false;

    this.landmarkss=true;
    this.landmarkss1=false;

    this.statesss=true;
    this.statesss1=false;

    this.districtss=true;
    this.districtss1=false;

    this.cityss=true;
    this.cityss1=false;

    this.howlongss=true;
    this.howlongss1=false;

    this.pincodess=true;
    this.pincodess1=false;

    this.bankkcs=true;
    this.bankkcs1=false;

 this.ifcscssnums=true;
    this.ifcscssnums1=false;

this.branchnamees=true;
    this.branchnamees1=false;

    this.accountnmamess=true;
    this.accountnmamess1=false;

    this.accountnumbersed=true;
    this.accountnumbersed1=false;

    this.accounttypeeeds=true;
    this.accounttypeeeds1=false;

    this.companynameesds=true;
    this.companynameesds1=false;

    this.doesesas=true;
    this.doesesas1=false;


    this.lenderService.nbfcdetailsupdate(updatedetails).subscribe(data => {
      this.nbfcdetails = data;
      $(this.updatesucess.nativeElement).modal('show');
      this.getnbfcviewProfile();
    })
  }



  public update() {


    this.status2 = !this.status2;
    this.status1 = !this.status1;
    this.status3 = !this.status3;
    this.edit=!this.edit;
    this.tests=true;
    this.types=false;
    this.types1=true;

    this.pancards=false;
    this.pancards1=true;

    this.gstnumbers=false;
    this.gstnumbers1=true;

    this.numbersyears=false;
    this.numbersyears1=true;

    this.turnovers=false;
    this.turnovers1=true;

    this.dinnumbers=false;
    this.dinnumbers1=true;

    this.licencenumbers=false;
    this.licencenumbers1=true;

    this.companywebsites=false;
    this.companywebsites1=true;

    this.officialemailids=false;
    this.officialemailids1=true;

    this.contactnumberss=false;
    this.contactnumberss1=true;

    this.directornameses=false;
    this.directornameses1=true;

    this.directormnumbers=false;
    this.directormnumbers1=true;

    this.companypertnernamess=false;
    this.companypertnernamess1=true;
    
    this.partnermobilnumberss=false;
    this.partnermobilnumberss1=true;
    
     this.aadharenumberss=false;
    this.aadharenumberss1=true;
    
     this.companyadddress=false;
    this.companyadddress1=true;

    this.flatrooms=false;
    this.flatrooms1=true;

    this.bwuildings=false;
    this.bwuildings1=true;

    this.ststreets=false;
    this.ststreets1=true;


    this.landmarkss=false;
    this.landmarkss1=true;

    this.statesss=false;
    this.statesss1=true;

    this.districtss=false;
    this.districtss1=true;

    this.cityss=false;
    this.cityss1=true;

    this.howlongss=false;
    this.howlongss1=true;


    this.pincodess=false;
    this.pincodess1=true;
    

    this.bankkcs=false;
    this.bankkcs1=true;
    
    this.ifcscssnums=false;
    this.ifcscssnums1=true;

    this.branchnamees=false;
    this.branchnamees1=true;

    this.accountnmamess=false;
    this.accountnmamess1=true;

     this.accountnumbersed=false;
    this.accountnumbersed1=true;

     this.accounttypeeeds=false;
    this.accounttypeeeds1=true;

      this.companynameesds=false;
    this.companynameesds1=true;
    

       this.doesesas=false;
    this.doesesas1=true;
    
    
    this.nbfcUpdateForm.get('organization').enable();
    this.nbfcUpdateForm.get('bussiness_since').enable();
    this.nbfcUpdateForm.get('companyturnover').enable();
    this.nbfcUpdateForm.get('employee_count').enable();
    this.nbfcUpdateForm.get('states').enable();
    this.nbfcUpdateForm.get('districts').enable();
    this.nbfcUpdateForm.get('city').enable();
    this.nbfcUpdateForm.get('stayedDurations').enable();
    this.nbfcUpdateForm.get('bankname').enable();
    this.nbfcUpdateForm.get('accounttype1').enable();


  }


public tests:boolean=true;


  public cancel() {
    this.status1 = !this.status1;
    this.status2 = !this.status2;
    this.status3 = !this.status3;
    this.edit=!this.edit;
    this.types=true;
    this.types1=false;

    this.pancards=true;
    this.pancards1=false;

    this.gstnumbers=true;
    this.gstnumbers1=false;

    this.numbersyears=true;
    this.numbersyears1=false;

    this.turnovers=true;
    this.turnovers1=false;
    
    this.dinnumbers=true;
    this.dinnumbers1=false;

    this.licencenumbers=true;
    this.licencenumbers1=false;
    
    this.companywebsites=true;
    this.companywebsites1=false;
    
    this.officialemailids=true;
    this.officialemailids1=false;
    

    this.contactnumberss=true;
    this.contactnumberss1=false;

    this.directornameses=true;
    this.directornameses1=false;

    this.directormnumbers=true;
    this.directormnumbers1=false;

    this.companypertnernamess=true;
    this.companypertnernamess1=false;

    this.partnermobilnumberss=true;
    this.partnermobilnumberss1=false;

    this.aadharenumberss=true;
    this.aadharenumberss1=false;

    this.companyadddress=true;
    this.companyadddress1=false;

    this.flatrooms=true;
    this.flatrooms1=false;


    this.bwuildings=true;
    this.bwuildings1=false;

    this.ststreets=true;
    this.ststreets1=false;
    
    this.landmarkss=true;
    this.landmarkss1=false;

    this.statesss=true;
    this.statesss1=false;

    this.districtss=true;
    this.districtss1=false;

    this.cityss=true;
    this.cityss1=false;

    this.howlongss=true;
    this.howlongss1=false;

    this.pincodess=true;
    this.pincodess1=false;

     this.bankkcs=true;
    this.bankkcs1=false;

     this.ifcscssnums=true;
    this.ifcscssnums1=false;

    this.branchnamees=true;
    this.branchnamees1=false;

    this.accountnmamess=true;
    this.accountnmamess1=false;

    this.accountnumbersed=true;
    this.accountnumbersed1=false;

    this.accounttypeeeds=true;
    this.accounttypeeeds1=false;

    this.companynameesds=true;
    this.companynameesds1=false;

    this.doesesas=true;
    this.doesesas1=false;
    
    
    // this.tests = this.tests;
    this.getnbfcviewProfile();
  }

  ngOnInit() {
    this.nbfcUpdateForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      organization: ['', Validators.required],
      doe: ['', Validators.required],
      pancard: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.panpattern)]],
      gstnumber: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(15), Validators.pattern(this.gstpattern)]],
      bussiness_since: ['', Validators.required],
      companyturnover: ['', Validators.required],
      employee_count: ['', Validators.required],
      din: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      cin: ['', [Validators.required, Validators.minLength(21), Validators.maxLength(21)]],
      company_website: ['', [Validators.required, Validators.pattern(this.websitepattern)]],
      email_id: ['', [Validators.required, Validators.pattern(this.emailpattern)]],
      officenumber: ['', [Validators.required, Validators.pattern(this.mobpattern)]],
      directorname: ['', Validators.required],
      directornumber: ['', [Validators.required, Validators.pattern(this.mobpattern)]],
      partnerName: ['', Validators.required],
      partnernumber: ['', [Validators.required, Validators.pattern(this.mobpattern)]],
      aadhaar_card: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      addresstype: ['', Validators.required],
      housenumber: ['', Validators.required],
      permanent_street: ['', Validators.required],
      Building: ['', Validators.required],
      landmark: ['', Validators.required],
      states: ['', Validators.required],
      districts: ['', Validators.required],
      city: ['', Validators.required],
      stayedDurations: ['', Validators.required],
      pincode: ['', Validators.required],
      bankname: ['', Validators.required],
      //   banknames:['',],
      accounttype1: ['',],
      accountname: ['', Validators.required],
      branchname: ['', Validators.required],
      //   otherifsccode:['',Validators.required],
      ifsccodes: ['', Validators.required],
      //   ifscnames:['',Validators.required],
      accountno: ['', Validators.required],


    });
  }


}