import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor() { }
  public displyfirst:string = 'displyFirstBlock';
  public displysecond:string = 'displySecondNone';

  public displyfirst1:string = 'displyFirstBlock';
  public displysecond1:string = 'displySecondNone';

  public displyfirst2:string = 'displyFirstBlock';
  public displysecond2:string = 'displySecondNone';

  ngOnInit() {
  	this.activeclass()
  }

  activeclass(){
  	let header = document.getElementById("myDiv");
	let btns = header.getElementsByClassName("btnn");
	for (var i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function() {
	  var current = document.getElementsByClassName("active");
	  current[0].className = current[0].className.replace(" active", "");
	  this.className += " active";
	  });
	}
  }

  activefun(val){
  	if(val == 'first'){
  		this.displyfirst = 'displyFirstBlock';
  		this.displysecond = 'displySecondNone';
  	}
  	else{
  		this.displyfirst = 'displyFirstNone';
  		this.displysecond = 'displySecondBlock';
  	}
  	
  }

  activefun1(val){
  	if(val == 'first'){
  		this.displyfirst1 = 'displyFirstBlock';
  		this.displysecond1 = 'displySecondNone';
  	}
  	else{
  		this.displyfirst1 = 'displyFirstNone';
  		this.displysecond1 = 'displySecondBlock';
  	}
  	
  }

  activefun2(val){
  	if(val == 'first'){
  		this.displyfirst2 = 'displyFirstBlock';
  		this.displysecond2 = 'displySecondNone';
  	}
  	else{
  		this.displyfirst2 = 'displyFirstNone';
  		this.displysecond2 = 'displySecondBlock';
  	}
  	
  }


}
