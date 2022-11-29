import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../Store/LoginModel';
import { OperationdataServiceService } from 'src/app/core/services/operationdata.service.service';

import { Store } from '@ngrx/store';
import * as pageStore from 'src/app/Store/PageStore/Page.Actions';
import {User } from '../core/models/iuser.model'

declare var swal: any;
import Swal from 'sweetalert2';
import { size } from '../core/models/isize.model';

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

  constructor(private router: Router, private store: Store<any>, private operationDataService: OperationdataServiceService) { 
    this.loginModel = new LoginModel();
  }

  ngOnInit(): void {
    debugger;
  }

  loginClick() { 
    this.submitted = true;
      let objData={ 	"User_Id": 1};
   /* this.operationDataService.getUsers(this.id).subscribe(
      (result)=>{          
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

   
     
    this.operationDataService.getUsers(objData).subscribe((result)=>{
     // this.UserList=result.data; 
      console.log("status:"+result.data[0].User_Name);
      })


      this.operationDataService.getSize().subscribe(
        (result) => {
         this.sizeList = result.data;
         console.log(result);
         console.log("Size:"+result.data[0].Size_Name);
  
        },
        (err) => console.log(err)
      );

    //console.log("in:"+this.UserList);

    if (this.loginModel.email == 'client' && this.loginModel.password == '1234') {

      this.loginModel.id = 1;
      this.loginModel.email = "sample@sample.com";
      this.loginModel.name = "John Willson";
      this.loginModel.password = "1234";
      this.loginModel.mobileNumber = 9876543210;
      this.loginModel.userType = 2;

      debugger;

      this.store.dispatch(new pageStore.OpenPage(Object.assign({ }, this.loginModel)));
      debugger;
      if(this.loginModel.id > 0) {
        // this.router.navigateByUrl('addclientprofile');
      }
    }

    else {
      Swal.fire({
        text: 'Invalid Credentials!',
        icon: 'error'
      })
    }
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

}