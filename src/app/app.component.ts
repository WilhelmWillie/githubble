import { Component } from '@angular/core';

import { Repository } from './repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  repositories : Repository[];
  title = 'GitHubble';
  subtitle = 'Tool for finding GitHub repositories';
  test = '5';


  onSearch(repos : Repository[]) {
    this.repositories = repos;
  }
}
