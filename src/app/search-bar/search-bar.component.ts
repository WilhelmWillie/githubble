import { Component, Input, Output, EventEmitter } from '@angular/core';

import { GithubApiService } from '../github-api.service';

import { Repository } from '../repository';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  private query : string;
  @Output() search : EventEmitter<Repository[]> = new EventEmitter<Repository[]>();

  constructor(private githubApiService : GithubApiService) { }

  searchRepos() {
    // Make call to GitHub API and emit data to parent
    this.githubApiService.getRepos(this.query).subscribe((data) => {
      this.search.emit(data);
    });
  }
}
