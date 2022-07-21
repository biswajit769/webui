import { Component, OnInit, ViewChild,OnChanges,DoCheck,ElementRef} from '@angular/core';
import { AdminserviceService } from '../../services/adminservice.service';
import { CSVRecord } from './CSVModel';
declare var $;


@Component({
  selector: 'app-crm-dashbord',
  templateUrl: './crm-dashbord.component.html',
  styleUrls: ['./crm-dashbord.component.css']
})
export class CrmDashbordComponent implements OnInit {
  // searchText;
  userFilter: any = { Company_Name: '' };
  p: number = 1;


@ViewChild('successmessage') successmessage:ElementRef;

  constructor(private adminserv: AdminserviceService) {

    console.log("CrmDashbordComponent");
  }
public count:number=0;
 
public interval:any;


  ngOnInit() {

    


// // var timeperiod=1296000200;

//  var timeperiod=15000;

// this.initial();

//  var a=    setInterval(() => {
//                 this.initial(); 
//                 }, timeperiod);



//   clearInterval(a);

    



// this.interval = setInterval(() => {
//       // console.log(a++)
//       this.initial();
//       if(this.messagecounts >2){
//         clearInterval(this.interval);
//       }
//     }, 10000);



    


    // this.stt();
    this.drpdn();

    this.tablesatages = "Stages0";
    this.Stagest01();
    this.Stagest02();
    this.Stagesst1();
    this.Stagesst2();
    this.Stagesst3();
    this.Stagesst4();
    this.Stagesst5();
    this.Stagesst6();
    this.Stagestts0()


  }

  Stagestts0() {
    this.adminserv.getdata().subscribe(

      data => {
        this.totaldatas = data;
        console.log("dddddddd", data)
      }


    )

  }

  public stagest01: any;

  Stagest01() {
    this.adminserv.Stages01().subscribe(data => {
      this.stagest01 = data;

      console.log("Stages01", data);
    })

  }

  public stagest02: any;

  Stagest02() {
    this.adminserv.Stages02().subscribe(data => {
      this.stagest02 = data;

      console.log("Stages02", data);
    })

  }

  public stagest1: any;

  Stagesst1() {
    this.adminserv.Stagest1().subscribe(data => {
      this.stagest1 = data;

      console.log("Stagest1", data);
    })

  }

  public stagest2: any;

  Stagesst2() {
    this.adminserv.Stagest2().subscribe(data => {
      this.stagest2 = data;

      console.log("Stagest2", data);
    })

  }


  public stagest3: any;

  Stagesst3() {
    this.adminserv.Stagest3().subscribe(data => {
      this.stagest3 = data;

      console.log("Stagest3", data);
    })

  }

  public stagest4: any;

  Stagesst4() {
    this.adminserv.Stagest4().subscribe(data => {
      this.stagest4 = data;

      console.log("Stagest4", data);
    })

  }

  public stagest5: any;

  Stagesst5() {
    this.adminserv.Stagest5().subscribe(data => {
      this.stagest5 = data;

      console.log("Stagest5", data);
    })

  }

  public stagest6: any;

  Stagesst6() {

    this.adminserv.Stagest6().subscribe(data => {
      this.stagest6 = data;

      console.log("Stagest6", data);
    })

  }

  stt() {
    window.onscroll = function () { myFunction() };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }


  public s: boolean = true;
  public s1: boolean = false;
  public s2: boolean = false;
  public s3: boolean = false;
  public s4: boolean = false;
  public s5: boolean = false;
  public s6: boolean = false;
  public s7: boolean = false;
  public s8: boolean = false;
  public tablesatages: any;

  stage() {
    this.s = true;
    this.s1 = false;
    this.s2 = false;
    this.s3 = false;
    this.s4 = false;
    this.s5 = false;
    this.s6 = false;
    this.s7 = false;
    this.s8 = false;
    this.tablesatages = "Stages0";
  }
  stage01() {

    this.s = false;
    this.s1 = true;
    this.s2 = false;
    this.s3 = false;
    this.s4 = false;
    this.s5 = false;
    this.s6 = false;
    this.s7 = false;
    this.s8 = false;
    this.tablesatages = "Stages01";

  }
  stage02() {
    this.s = false;
    this.s1 = false;
    this.s2 = true;
    this.s3 = false;
    this.s4 = false;
    this.s5 = false;
    this.s6 = false;
    this.s7 = false;
    this.s8 = false;
    this.tablesatages = "Stages02";
  }
  stage03() {
    this.s = false;
    this.s1 = false;
    this.s2 = false;
    this.s3 = true;
    this.s4 = false;
    this.s5 = false;
    this.s6 = false;
    this.s7 = false;
    this.s8 = false;
    this.tablesatages = "Stages1";
  }
  stage04() {
    this.s = false;
    this.s1 = false;
    this.s2 = false;
    this.s3 = false;
    this.s4 = true;
    this.s5 = false;
    this.s6 = false;
    this.s7 = false;
    this.s8 = false;
    this.tablesatages = "Stages2";
  }
  stage05() {
    this.s = false;
    this.s1 = false;
    this.s2 = false;
    this.s3 = false;
    this.s4 = false;
    this.s5 = true;
    this.s6 = false;
    this.s7 = false;
    this.s8 = false;
    this.tablesatages = "Stages3";
  }
  stage06() {
    this.s = false;
    this.s1 = false;
    this.s2 = false;
    this.s3 = false;
    this.s4 = false;
    this.s5 = false;
    this.s6 = true;
    this.s7 = false;
    this.s8 = false;
    this.tablesatages = "Stages4";
  }
  stage07() {
    this.s = false;
    this.s1 = false;
    this.s2 = false;
    this.s3 = false;
    this.s4 = false;
    this.s5 = false;
    this.s6 = false;
    this.s7 = true;
    this.s8 = false;
    this.tablesatages = "Stages5";
  }
  stage08() {
    this.s = false;
    this.s1 = false;
    this.s2 = false;
    this.s3 = false;
    this.s4 = false;
    this.s5 = false;
    this.s6 = false;
    this.s7 = false;
    this.s8 = true;
    this.tablesatages = "Stages6";
  }

  public Selectedfiles1: any;
  public GroupName: any;
  public Groupcode: any;
  public GroupOwner: any;
  public GroupCategoryID: any;
  public csvdata: any;

  public messagestatus:any ="values";

  Selectsfiles1(event) {

this.messagestatus="no_value";

console.log("wwwwwwwwwwww",this.messagestatus);
    this.Selectedfiles1 = event.target.files[0];
    console.log("rrrrrrrrrrrrr", this.Selectedfiles1);

    var custom: any[] = [];

    // console.log("csvssssss",csvs);

    // if (this.Selectedfiles1) {

    let reader: FileReader = new FileReader();
    reader.readAsText(this.Selectedfiles1);

    // var reader = new FileReader();
    reader.onload = function (e) {
      var customers = new Array();
      var rows = e.target.result.split("\n");
      for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].split(",");
        if (cells.length > 1) {
          var mr: any = {};
          mr.Company_Name = cells[0];
          mr.Contact_Person = cells[1];
          mr.Designation = cells[2];
          mr.Email_Id = cells[3];


          custom.push(mr);
          console.log("data is data", custom)

        }
      }

    }

    console.log("custom", custom);
    this.csvdata = custom;
    console.log("sssssssssssss", this.csvdata)

    let a = { b: this.csvdata };
  }


  public totaldatas: any;
  Csvdata(data) {


    console.log("ggggggggggggg", data);

    let object = { b: data };
    this.adminserv.Csvfiles(object).subscribe(data => {

      console.log("rrrrrrrrrrr", data);

      this.totaldatas = data;
    })
  

this.messagestatus="values";
$(this.successmessage.nativeElement).modal('show');





  }
  




  drpdn() {
    $(document).ready(function () {
      $('.dropdown a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });
    });
  }

  public currnetstage: any;
  public tablerowdata: any;

  Movestage(data: any, stages: any) {

    let object = { a: stages, b: data, c: this.tablesatages };
    console.log("qqqqqqq", object);
    console.log("qqqqqqqqqqqqq", data);

    this.adminserv.Movedata(object).subscribe(data => {
      console.log("ttttttttttttt", data);

      this.Stagestts0()
      this.Stagest01();
      this.Stagest02();
      this.Stagesst1();
      this.Stagesst2();
      this.Stagesst3();
      this.Stagesst4();
      this.Stagesst5();
      this.Stagesst6();

    })

  }





public message0:any;
public message1:any;

public message2:any;

public message3:any;



public messagecounts:number=-1;




public counts:number=-1;
 

initial(){

var time1=10000;
var time2=1000000000000000;

this.message0=document.getElementById('messages0').innerHTML;



console.log("messagenumber",this.message0);


console.log("dassadsadaaaaa",this.tablesatages)



let emailstage={a:this.tablesatages,b:this.message0};
console.log("emailstage",emailstage)

this.adminserv.Emailstage(emailstage).subscribe(data => {

      console.log("Emailstage", data);

      
    })



this.interval = setInterval(() => {
    
      this.initials1();



      if(this.messagecounts==4){
        clearInterval(this.interval);
      }


    
          
    },time1);



}



initials1(){
  this.counts++;
  






   this.message0=document.getElementById('messages0').innerHTML;
   this.message1=document.getElementById('messages1').innerHTML;
   this.message2=document.getElementById('messages2').innerHTML;
   this.message3=document.getElementById('messages3').innerHTML;

console.log("qvvvvvvvvvvv",this.message0)
  this.messagecounts++;
  console.log("messagecounts",this.messagecounts);


  if(this.messagecounts <3){
// var Arraymessage=["message for intial stage",'message for first stage','message for second stage'];

var Arraymessage=[this.message1,this.message2,this.message3];


var messagenumber=Arraymessage[this.messagecounts];
console.log("messagenumber",messagenumber);


console.log("dassadsadaaaaa",this.tablesatages)



let emailstage={a:this.tablesatages,b:messagenumber};
console.log("emailstage",emailstage)

this.adminserv.Emailstage(emailstage).subscribe(data => {

      console.log("Emailstage", data);

      
    })


}










}



























}