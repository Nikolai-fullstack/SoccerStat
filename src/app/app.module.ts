import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompetitionsModule } from './competitions/competitions.module';

import { CompetitionsService } from './shared/services/competitions.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterOutlet,
    CompetitionsModule,
  ],
  providers: [CompetitionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
