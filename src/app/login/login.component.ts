/* eslint-disable @ngrx/no-typed-global-store */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../Store/LoginModel';

import {User } from '../core/models/iuser.model'
import { size } from '../core/models/isize.model';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel;
  sizeList: size[];
  submitted = false;
  id:any;
  UserList: User[];

  constructor(
    private router: Router, 
    private authService: SocialAuthService
    ) { 
      debugger;
    this.loginModel = new LoginModel();
  }

  ngOnInit(): void {
    debugger;

   
  }

  loginClick() { 
    
  }

  forgotPasswordClick() { 
    this.router.navigateByUrl('/forgotpassword');
  }

  home() { 
    this.router.navigateByUrl('');
  }

  regClick() { 
    this.router.navigateByUrl('/register');
  }

  // loginWithGmail() { 
  //   debugger;
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
  //     debugger;
  //     localStorage.setItem('google_auth', JSON.stringify(data));
  //     debugger;
  //     this.router.navigateByUrl('/home');
  //     debugger;
  //   });
  // }

  // loginWithFacebook() { 
   
  // }

  loginWithGmail(): void {
    debugger;
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      debugger;
      localStorage.setItem('user_auth', JSON.stringify(data));
      debugger;
      this.router.navigateByUrl('/home');
      debugger;
    });
  }

  loginWithFacebook() {
    debugger;
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((data) => {
      debugger;
      localStorage.setItem('user_auth', JSON.stringify(data));
      debugger;
      this.router.navigateByUrl('/home');
      debugger;
    });
  }
}