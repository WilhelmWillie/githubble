import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { GithubApiService } from './github-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
  	GithubApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
