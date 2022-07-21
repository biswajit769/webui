import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-invoiceadminhome',
  templateUrl: './invoiceadminhome.component.html',
  styleUrls: ['./invoiceadminhome.component.css']
})
export class InvoiceadminhomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      $('[data-toggle="tooltip"]').tooltip();
      $(".side-nav .collapse").on("hide.bs.collapse", function() {                   
          $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
      });
      $('.side-nav .collapse').on("show.bs.collapse", function() {                        
          $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");        
      });
  })    
  }

}
