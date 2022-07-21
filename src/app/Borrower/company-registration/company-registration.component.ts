import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, ViewChild, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
declare var $;
import { LoginService } from '../../services/login.service';

import { BorrowerserviceService } from '../../services/borrowerservice.service';
import { CustomService } from '../../custom.service';
import { District } from '../../district';
import { State } from '../../state';
import { City } from '../../city';
import { Bank } from '../../bank';
import { Ifsc } from '../../ifsc';
@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {
  @ViewChild('companyAddressDetails') companyAddressDetails: ElementRef;
  @ViewChild('bankdetailspopup') bankdetailspopup: ElementRef;

  companyRegForm: FormGroup;

  public states: State[];
  districts: District[];
  cities: City[];
  public banklist;
  public ifsc;
  public ifsccodeName

  constructor(public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private Borrowerservice: BorrowerserviceService,
    private countryservice: CustomService,
    public loginService: LoginService
  ) {

    this.getviewProfile();
    this.states = this.countryservice.getStates();
    this.banklist = this.countryservice.getbanks();
    this.Borrowerservice.currentMessage.subscribe((data: any) => {
      console.log("nextttttttt", data);
      this.companydetails = data;
      console.log("------Todayyyy", this.companydetails);
    });

  }

  onSelect(statename) {
    console.log(statename);
    this.districts = this.countryservice.getDistrict().filter((item) => item.statename == statename);
  }
  butDisabled: boolean = true;
  select(districtid) {
    this.cities = this.countryservice.getCities().filter((item) => item.districtName == districtid);

  }
  public bankshow
  selctifsc(bank) {
    if (bank !== 'Others') {
      this.bankshow = true;
      console.log('bank name', bank)
      this.ifsc = this.countryservice.getIfscs().filter((item) => item.bankName == bank);
      this.companyData.ifsccodeName = this.ifsc['0'].ifscname;
      console.log('bank name', this.companyData.ifsccodeName)
    }
    else {
      this.bankshow = false;
    }

  }
  get editform() { return this.companyRegForm.controls; }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  public companyData: any = {};
  public status1: boolean = false;
  public status2: boolean = true;

  ContactNumberpattern = /^([2-9]){1}([0-9]){7}?$/;
  mobpattern = /^([6-9]){1}([0-9]){9}?$/;
  companypan = /^[A-Z]{3}(P|C|H|F|A|T|B|L|J|G)[a-zA-Z][\d]{4}[\A-Z]?$/
  panpattern = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
  gstpattern = /^([0-9]){2}([A-Z]){5}([0-9]){4}([A-Z]){1}([0-9]){1}([A-Z]){1}([0-9]){1}?$/;
  emailpattern = /^[a-zA-Z]+[a-zA-Z0-9._]+@[a-zA-Z]+\./;
  websitepattern = /^([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
  public adresstype = ['Owned', 'Rented'];
  public accounttype = ['Savings', 'Salary', 'Current'];
  public companytypes = ['Joint Hindu Family business', 'Sole proprietorship', 'Private Ltd Company', 'Limited Liability Partnership (LLP)', 'Public Ltd Company', 'Unlimited Company', 'Subsidiary Company'];
  public numberofyearsinbusiness = ['< 1', '1 to 3 Years', '3 to 5 Years', ' More than 5 Years'];
  public company_turnover = ['Less than 1 Crore', '1 to 5 Crore', '5 to 10 Crore', '10 to 50 Crore', '50 to 100 Crore', '100 to 500 Crore', 'More than 500 Crore'];
  public numberofemployees = ['1 to 100', '100 to 500', '500 to 1000', '1000 and more'];
  public monthlybalance = ['less than 1 Lakh', 'less than 10 Lakh', 'more than 10 Lakh and less than 1 Cr', 'More than 1 CR'];
  public stayduration = ['less than 1 year', '1 to 3 Years', '3 to 5 Years', 'More than 5 Years'];
  public showparterner = true;
  disable_pancard(event) {
    if (event === true) {
      this.showparterner = !this.showparterner;
    }
    else {
      this.showparterner = true;
    }

  }

  public Logdata;

  ngOnInit() {
    this.companyRegForm = this.formBuilder.group({
      companytype: ['', Validators.required],
      bussiness_pan: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.panpattern)]],
      gst_number: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(15), Validators.pattern(this.gstpattern)]],
      business_years: ['', Validators.required],
      company_turnover: ['', Validators.required],
      number_of_employees: ['', Validators.required],
      director_identification_number: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      corporate_identification_number: ['', [Validators.required, Validators.minLength(21), Validators.maxLength(21)]],
      company_website_link: ['', [Validators.required, Validators.pattern(this.websitepattern)]],
      email_id: ['', [Validators.required, Validators.pattern(this.emailpattern)]],
      contact_phone_number: ['', [Validators.required, Validators.pattern(this.ContactNumberpattern)]],
      director_name: ['', Validators.required],
      director_mobile_number: ['', [Validators.required, Validators.pattern(this.mobpattern)]],
      partner_name: ['', Validators.required],
      partner_mobile_number: ['', [Validators.required, Validators.pattern(this.mobpattern)]],
      adharcard_number: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],

      present_address_type: ['', Validators.required],
      office_roomno: ['', Validators.required],
      company_street: ['', Validators.required],
      permanentbuildingname: ['', Validators.required],
      permanent_landmark: ['', Validators.required],
      selectedState: ['', Validators.required],
      selecteddistric: [''],
      selectedcity: [''],
      longstay: ['', Validators.required],
      pin_code: ['', Validators.required],

      bank: ['', Validators.required],
      acounttypes: ['',],
      holder_name: ['', Validators.required],
      branch_name: ['', Validators.required],

      ifsc_code: ['', Validators.required],

      account_number: ['', Validators.required],
  });
  
    this.Logdata = this.loginService.logdata;
    console.log("MYLOGGGGGGGGGGGDATAAAAAAAAAAAA", this.Logdata);
    }
  selectedFile: File;
  selectedFile1: File;
  selectedFile2: File;
  selectedFile3: File;
  public profi: File = null;
  public profi1: File = null;
  public profi2: File = null;
  public profi3: File = null;
  public profi4: File = null;
  public message: File = null;
  public message1: File = null;
  public message2: File = null;
  public message3: File = null;
  public dat: File;
  buss;
  buss1;
  buss2;
  buss3;
  public companydetails: any = {};
  companyreg() {
    console.log(this.companyRegForm.value, "hiooo");
    this.status1 = true;
    this.status2 = true;
    this.Borrowerservice.borrowing_company_finalreg(this.companyRegForm.value).subscribe(data => {
      console.log("backenddaattaaaaaammmmmcomp", data);
    });
  }

  skkkip() {
    this.status1 = false;
    this.status2 = false;
  }

  public getviewProfile() {
    this.Borrowerservice.companyprofileview().subscribe(data => {
      this.companydetails = data;
      console.log("********** DATA ********", this.companydetails);
    })
  }

  compnydatareg() {
    console.log("hiiiii", this.companyRegForm.value);
    console.log('Personal Form is valid');
    this.Borrowerservice.borrowing_company_finalreg(this.companyRegForm.value).subscribe(data => {
      console.log("backend1233 daattaaaaaa", data)
      if (data == 'success') {
        this.companydetails = ''
        this.router.navigate(['/Borrower_Dashboard/Dashboard-Details']);
      }
      else {
        alert("enter valid data");
      }
    })
  }


  viewdocs(docs: any) {
    console.log("test", docs);
    let documents = { 'Business_pan': docs }
    this.Borrowerservice.getdocs(documents).subscribe(backenddata => {
      console.log("printttttttttt ", backenddata);
      this.buss = backenddata['img'];
    })
  }

  UploadDoc(event: any) {
    console.log("Fileeeeeeefrom event", event);
    this.selectedFile = event.target.files[0]
    console.log("tttttyyyyyy", this.selectedFile);
    this.businesspan1();

  }
  UploadDoc1(event: any) {
    console.log("Fileeeeeeefrom event", event);
    this.selectedFile1 = event.target.files[0]
    console.log("tttttyyyyyy", this.selectedFile1);
    this.businesspan2();

  }
  UploadDoc2(event: any) {
    console.log("Fileeeeeeefrom event", event);
    this.selectedFile2 = event.target.files[0]
    console.log("tttttyyyyyy", this.selectedFile2);
    this.businesspan3();

  }
  UploadDoc3(event: any) {
    console.log("Fileeeeeeefrom event", event);
    this.selectedFile3 = event.target.files[0]

    console.log("tttttyyyyyy", this.selectedFile3);
    this.businesspan4();

  }

  businesspan1() {
    const uploadData = new FormData();
    uploadData.append('Business_pan', this.selectedFile, this.selectedFile.name);
    this.Borrowerservice.businesspan1(uploadData).subscribe(
      data => {
        console.log("hgfffffghfgjty", data);
        this.getviewProfile();
        this.profi = data.a;
        this.message = data.b;
        this.selectedFile = null;
        console.log("neeeeeeeeee", this.profi);
      },
      error => console.log("erroorrrr", error)
    );
  }

  businesspan2() {
    const uploadData = new FormData();
    uploadData.append('bank_stmnt_borwr', this.selectedFile1, this.selectedFile1.name);
    this.Borrowerservice.businesspan2(uploadData).subscribe(
      data => {
        console.log("hgfffffghfgjty", data);
        this.getviewProfile();
        this.profi1 = data.a;
        this.message1 = data.b;
        this.selectedFile1 = null;
        console.log("neeeeeeeeee", this.profi1);
      },
      error => console.log("erroorrrr", error)
    );
  }

  businesspan3() {
    const uploadData = new FormData();
    uploadData.append('Balance_sheet', this.selectedFile2, this.selectedFile2.name);
    this.Borrowerservice.businesspan3(uploadData).subscribe(
      data => {
        console.log("hgfffffghfgjty", data);
        this.getviewProfile();
        this.profi2 = data.a;
        this.message2 = data.b;
        this.selectedFile2 = null;
        console.log("neeeeeeeeee", this.profi2);
      },
      error => console.log("erroorrrr", error)
    );
  }

  businesspan4() {
    const uploadData = new FormData();
    uploadData.append('present_address_proof', this.selectedFile3, this.selectedFile3.name);
    this.Borrowerservice.businesspan4(uploadData).subscribe(
      data => {
        console.log("hgfffffghfgjty", data);
        this.getviewProfile();
        this.profi3 = data.a;
        this.message3 = data.b;
        this.selectedFile3 = null;
        console.log("neeeeeeeeee", this.profi3);
      },
      error => console.log("erroorrrr", error)
    );
  }

  keyPress1(data) {
    console.log(data.target.value);
  }
}

@Component({
  selector: 'CompanyRegSucess',
  templateUrl: 'companyRegistrationSucess.component.html',
  styleUrls: ['./companyRegistrationSucess.component.css']
})
export class CompanyRegSucess {

  constructor(
    public dialogRef: MatDialogRef<CompanyRegSucess>, public router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {
    dialogRef.disableClose = true;
  }
}