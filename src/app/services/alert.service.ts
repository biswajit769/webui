import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { HttpClient } from'@angular/common/http';
import { Subject } from 'rxjs';
import { Observable} from 'rxjs/Observable';
@Injectable()
export class AlertService {
    private USERS=  
        {
            "firstName": "Jane",
            "lastName": "Doe"
        }
        
  

    private subject = new Subject<any>();
    private test:any={};
    private keepAfterNavigationChange = false;

    constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }

    success(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    }

    error(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    }

    texts(tesss){
      
      this.test={ "name":"John" }
      console.log('hiiiiii',this.test);
      this.getMessage()
    }
  
   getMessage():Observable<any[]>{
    //    alert("alert service")
   console.log(this.USERS);
    // return  this.HttpClient.post(url,otp);
    return this.test;

  }
}