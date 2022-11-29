/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { DbcallingService } from '../core/services/dbcalling.service';

@Component({
  selector: 'app-add-shop-profile',
  templateUrl: './add-shop-profile.component.html',
  styleUrls: ['./add-shop-profile.component.css']
})
export class AddShopProfileComponent implements OnInit {
  result: any = [];

  orientationList:any = [];
  paperList: any =[];

  constructor(private dbCallingService: DbcallingService) { }

  ngOnInit(): void {
    this.getPaper();
    this.getOrientation(); 
  }

  getOrientation() {
    this.dbCallingService.getOrientation().subscribe((res) => {
      this.result = res;
      debugger;
      this.orientationList = this.result.data;
      console.log('Orientation List'+ this.orientationList);
    })
  }

  getPaper() {
    this.dbCallingService.getPaper().subscribe((res) => {
      this.result = res;
      debugger;
      this.paperList = this.result.data;
      console.log('paper List'+ this.paperList);
    });
  }

}
