import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TraineeComponent } from './trainee/trainee.component';
import { TraineeTestsComponent } from './trainee-tests/trainee-tests.component';
import { TraineeTestsService } from './trainee-tests.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TraineeComponent,
    TraineeTestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TraineeTestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
