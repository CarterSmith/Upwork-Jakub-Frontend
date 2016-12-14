import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

// (Route) Components
import { HomeComponent } from './home/home.component';

// Services
import { HttpService } from '../services/http.service';
import { LoadingService } from '../services/loading.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HttpService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
