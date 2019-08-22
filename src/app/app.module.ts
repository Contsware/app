import { ToolsModalPageModule } from './tools-modal/tools-modal.module';
import { ProjectsModalPageModule } from './projects-modal/projects-modal.module';
import { AccountsModalPageModule } from './accounts-modal/accounts-modal.module';
import { ActivitiesModalPageModule } from './activities-modal/activities-modal.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgCalendarModule } from 'ionic2-calendar';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { ContactsModalPageModule } from './contacts-modal/contacts-modal.module';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(), 
            AppRoutingModule,
            HttpModule,
            ContactsModalPageModule,
            NgCalendarModule,
            ActivitiesModalPageModule,
            AccountsModalPageModule,
            ProjectsModalPageModule,
            ToolsModalPageModule,
            HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    NativeGeocoder,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
