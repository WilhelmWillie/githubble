import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { GithubApiService } from './github-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  	GithubApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
