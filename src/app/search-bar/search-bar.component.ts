import { Component, OnInit } from '@angular/core';

import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  query : string;

  constructor(private githubApiService : GithubApiService) { }

  ngOnInit() {
  }

  searchRepos() {
    alert(this.query);

    // TODO: Make call to GitHub API and retrieve data
    this.githubApiService.getRepos(this.query).subscribe((data) => {
      console.log(data);
    });
  }
}
