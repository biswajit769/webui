import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AdminserviceService } from '../../services/adminservice.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,public request:AdminserviceService) { }

  ngOnInit() {
  
   this.company_count();
  }
  public autoStartVar1:any;
  public autoStartVar2:any;
  public autoStartVar3:any;
  public autoStartVar4:any;
  public autoStartVar5:any;
  public autoStartVar6:any;
  public autoStartVar7:any;
  public autoStartVar8:any;
  public autoStartVar9:any;
  public autoStartVar10:any;







  
  company_count(){
    this.request.manage_borrowercount().subscribe(data =>{
      console.log("dataaaaaa",data);
      this.autoStartVar1=data.borrcount;
      this.autoStartVar2=data.processcount;
      this.autoStartVar3=data.completedcount;
      this.autoStartVar4=data.processingnbfc;
      this.autoStartVar5=data.non_karnataka_count;
      this.autoStartVar6=data.pendingloans;
      this.autoStartVar7=data.acceptedloans;
      this.autoStartVar8=data.disbursedloans;      
      this.autoStartVar9=data.registerednbfc;
      this.autoStartVar10=data.closedloans;

      console.log("########",this.autoStartVar1);
      console.log("########",this.autoStartVar2);
      console.log("########",this.autoStartVar3);
      console.log("########",this.autoStartVar4);
      console.log("########",this.autoStartVar5);
      console.log("########",this.autoStartVar6);
      console.log("########",this.autoStartVar7);
      console.log("--------- Disbursed --------",this.autoStartVar8);


});

  }


 
 
}
