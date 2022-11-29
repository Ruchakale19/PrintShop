import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbcallingService {

  URL="http://localhost:8090/api/";

  constructor(private _httpClient: HttpClient) { }

  getPaper(): Observable<any> {
    
    try {
      
      return this._httpClient.get<any>(this.URL + 'papermaster/getpaper', {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        })
        .pipe(
          timeout(120000),
          catchError((err) => {
            
            console.log('error ' +err)
            if (err.message.indexOf('Http failure response for') > 0) {
              return null;
            }
            
          })
        );
        
    } catch (err) {
      throw err;
    }
  }

  getOrientation(): Observable<any> {
    
    try {
      
      return this._httpClient.get<any>(this.URL + 'orientationmaster/getorientation', {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        })
        .pipe(
          timeout(120000),
          catchError((err) => {
            
            console.log('error ' +err)
            if (err.message.indexOf('Http failure response for') > 0) {
              return null;
            }
            
          })
        );
        
    } catch (err) {
      throw err;
    }
  }

  login(userId) {
    try {
      // let userid = JSON.stringify(userId)
      debugger;
      let userid = new HttpParams().set('userid',userId);
      debugger;
      return this._httpClient.get<any>((this.URL + 'login') , {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params: userId,
      })
      debugger;
    } catch (err) {
      throw err;
    }
  }

  getUsers(userid: any): Observable<any> {
    console.log(userid)
    debugger;
    // var userId = JSON.stringify(userid)
    return this._httpClient.get<any>(this.URL ,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: userid,
  })
      .pipe();
  }

}
