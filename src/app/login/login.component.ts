/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @ngrx/no-typed-global-store */
/* eslint-disable @ngrx/prefer-action-creator-in-dispatch */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../Store/LoginModel';
import { OperationdataServiceService } from 'src/app/core/services/operationdata.service.service';

import { Store } from '@ngrx/store';
import * as pageStore from 'src/app/Store/PageStore/Page.Actions';
import { User } from '../core/models/iuser.model';

declare var swal: any;
import Swal from 'sweetalert2';
import { DbcallingService } from '../core/services/dbcalling.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginModel: LoginModel;
  submitted = false;
  id: any;
  UserList: any = [];

  constructor(
    private router: Router,
    private store: Store<any>,
    private operationDataService: OperationdataServiceService,
    private dbCallingService: DbcallingService
  ) {
    this.loginModel = new LoginModel();
  }

  ngOnInit(): void {}

  loginClick() {
    debugger;
    this.submitted = true;
    let objData = { User_Id: 1 };

    /* this.operationDataService.getUsers(this.id).subscribe((result)=>{          
        if(result.ServiceResponse===1){          
          alert(result.Msg); 
          sessionStorage.clear();   
          console.log("data:"+result);
        }
        else{      
          alert(result.Msg); 
        }
       },
      (err)=>alert(err)
    ) */

    // this.operationDataService.getUsers(objData).subscribe((result) => {
      this.dbCallingService.getUsers(objData).subscribe((result) => {
      debugger;
      this.UserList = result.data;
      debugger;
      console.log('status:' + result.data[0].User_Name);
    });

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

  // loginClick() {
  //   if(this.loginModel.email != '' && this.loginModel.password != '') {
  //     this.dbCallingService.login(1).subscribe((res) => {
  //       this.UserList = res;
  //     })
  //   }
  //   else {
  //     Swal.fire({
  //       text: 'Usename & Password id reuired !',
  //       icon: 'warning'
  //     })
  //   }
  // }
}
