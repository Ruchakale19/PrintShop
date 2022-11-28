import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AsyncSubject, BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUserResponce } from '../models/iuser.model';
import { environment } from 'src/environments/environment';
import { Isize } from '../models/isize.model';

@Injectable({
  providedIn: 'root'
})
export class OperationdataServiceService {

  API_URL = environment.baseUrl;
  baseURL=this.API_URL;

  

  constructor(private _httpClient: HttpClient) { }

  private handleError(errorResponce: HttpErrorResponse) {
    if (errorResponce.error instanceof ErrorEvent) {
      console.log("Client side Error ", errorResponce.error.message)
    }
    else {
      console.log("Server side Error ", errorResponce)
    }
    return throwError("something went wrong");
  }

 
  getUsers(userid: any): Observable<IUserResponce> {
    console.log(userid)
    return this._httpClient.post<IUserResponce>(this.baseURL+"/login/getloginById",JSON.stringify(userid),{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
  })
      .pipe(catchError(this.handleError));
  }

  getSize(): Observable<Isize> {
    return this._httpClient.get<Isize>(this.baseURL + "/sizemaster/getsize")
      .pipe(catchError(this.handleError));
  }
}
