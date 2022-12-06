import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetails:any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {  
    debugger;
    const storage = localStorage.getItem('google_auth');

    if (storage) {
      this.userDetails = JSON.parse(storage);
    } else {
      // this.signOut();
      this.router.navigateByUrl('/');
    }
  }

  signUp() { 
    this.router.navigateByUrl('/login');
  }

  signOut(): void {
    debugger;
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }

}
