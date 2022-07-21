
import { Component, OnInit } from '@angular/core';
import { LenderserviceService } from '../../services/lenderservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public interest: any;
  public current_user: any = {};
  finchain: any;
  public show: boolean = false
  constructor(public loginServices: LoginService,
    public lenderserviceService: LenderserviceService, public router: Router) {
    this.selffunction();
  }

  public selffunction() {
    var currentUser = JSON.parse(localStorage.getItem('current_user_data'));
    var role = currentUser.role; // your token
    this.current_user = role;
  }
  ngOnInit() {
    this.getnewloanCount();
    this.profiledata();
    this.getrateofinterest();
  }

  openNav() {
    this.show = true;
    document.getElementById('mydiv').style.visibility='visible';
    document.getElementById("mydiv").style.display='block';

  }

  closeNav() {
    this.show = false;
    document.getElementById('mydiv').style.visibility='hidden';
    document.getElementById("mydiv").style.width = "0";
  }



  public dat: File;
  public profil: File = null;
  changefrontimage() {
    let certificate = { "val": this.dat['name'] };
    let obj = { "certify": certificate }
    this.lenderserviceService.fileAdressing(obj).subscribe(data => {
    });
  }
  public profi: File = null;
  selectedFile: File;
  public texthide
  changefrontimage1(event) {
    this.selectedFile = event.target.files[0]
    const uploadData = new FormData();
    uploadData.append('front_photo', this.selectedFile, this.selectedFile.name);
    this.lenderserviceService.uploaddocs(uploadData).subscribe(
      backResponse => {
        this.texthide = true
        this.profil = backResponse;
      },
      error => console.log("erroorrrr", error)
    );
  }
  profiledata() {
    this.lenderserviceService.profiledata2().subscribe(backResponse => {
      this.profil = backResponse.profile_photo;

    },
      error => console.log("erroorrrr", error)
    );
  }

acceptedloan;
disburseloan;
findate;
intr;
  getrateofinterest() {
    this.lenderserviceService.interestservice().subscribe(data => {
      console.log("!@@@@@@@@@@@@@@@@@@@@@",data);
      this.acceptedloan = data['accptloan']
      console.log("Accpetdloannnnnnnnnnnnnnnnn",this.acceptedloan);
      this.disburseloan = data['discount']
      console.log("disbursloannnnnnnn",this.disburseloan);
      this.findate = data['interest'][0]['date_of_establishment'];
      console.log("hdhhhhhh",this.findate);
      this.intr = data['interest'] [0] ['interest_rate']
       this.router.navigate(['/lenderdashboard']);
    });
  }
  public count
  getnewloanCount() {
    this.lenderserviceService.getNewloanscount().subscribe(data => {
      this.count = data;
      this.router.navigate(['/lenderdashboard']);
    });
  }
  loanrequestCountView() {
    this.router.navigate(['/loanrequest']);
  }
  public recalll(data) {
    this.lenderserviceService.changeMessage(data);
  }

  newloan_accept() {
    this.lenderserviceService.checkFinalRegField2().subscribe(backResponse => {
      console.log("##########", backResponse);
      // if (backResponse.companytype == null || backResponse.director_identification_number == null || backResponse.Licence_number == null || backResponse.director_mobile_number == null || backResponse.adharcard_number == null || backResponse.selectedcity == null ||
      //   backResponse.permanent_street == null || backResponse.pin_code == null || backResponse.account_number == null || backResponse.acounttypes == null) {
      //   this.recalll(backResponse);
      //   this.router.navigate(['/customers']);
      // }
      if (backResponse){
        this.router.navigate(['loanrequest']);
      }
    },
      error => console.log("erroorrrr", error)
    );

  }

}

