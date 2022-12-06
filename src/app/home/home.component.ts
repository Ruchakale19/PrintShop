import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetails:any = [];
  googleLogin = false;
  facebookLogin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {  
    debugger;
    const storage = localStorage.getItem('user_auth');

    if (storage) {
      this.userDetails = JSON.parse(storage);

      if(this.userDetails.provider == "FACEBOOK") {
        this.facebookLogin = true;
      }
      else{
        this.googleLogin = true;
      }


    } 
    else {
      // this.signOut();
      this.router.navigateByUrl('/');
    }
  }

  signUp() { 
    this.router.navigateByUrl('/login');
  }

  signOut(): void {
    debugger;
    localStorage.removeItem('user_auth');
    this.router.navigateByUrl('/login').then();
  }

}
