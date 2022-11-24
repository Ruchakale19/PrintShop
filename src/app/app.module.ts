import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { localStorageSync } from 'ngrx-store-localstorage';
import { StoreModule } from '@ngrx/store';
import { Pagereducer } from './Store/PageStore/Page.Reducer';
import { AddClientProfileComponent } from './add-client-profile/add-client-profile.component';
import { AddShopProfileComponent } from './add-shop-profile/add-shop-profile.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

export function localStorageSyncReducer(rootReducer: any) {
  return localStorageSync({
   keys: [{'PrintWebsite': {
     encrypt: state => btoa(state),
     decrypt: state => atob(state)
   }}], rehydrate: true
 })(rootReducer);
 }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    AddClientProfileComponent,
    AddShopProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,

    StoreModule.forRoot(
      { PrintWebsite: Pagereducer },
      { metaReducers: [localStorageSyncReducer],}
    ),

    StoreModule.forRoot({}, {}),
     ServiceWorkerModule.register('ngsw-worker.js', {
       enabled: environment.production,
       // Register the ServiceWorker as soon as the application is stable
       // or after 30 seconds (whichever comes first).
       registrationStrategy: 'registerWhenStable:30000'
     }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
