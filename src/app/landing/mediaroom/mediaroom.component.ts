import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mediaroom',
  templateUrl: './mediaroom.component.html',
  styleUrls: ['./mediaroom.component.css']
})
export class MediaroomComponent implements OnInit {

  constructor() { }
  firstLoad: boolean = true;
  ngOnInit() {
    if(this.firstLoad) {
      window.scroll(0,0);
      this.firstLoad = false;
    }
  }

}
