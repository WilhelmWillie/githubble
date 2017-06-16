import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { GithubApiService } from '../github-api.service';

import { Repository } from '../repository';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  private query : string;
  private placeholder : string;

  @Output() search : EventEmitter<Repository[]> = new EventEmitter<Repository[]>();

  constructor(private githubApiService : GithubApiService) { }

  ngOnInit() {
    const placeholders = [
      'machine learning',
      'big data',
      'iot',
      'neural networks',
      'data mining',
      'blockchain',
      'cryptography',
      'embedded systems',
      'c++',
      'java',
      'python',
      'javascript',
      'sql'
    ];

    this.placeholder = placeholders[Math.floor(Math.random() * placeholders.length)];
  }

  searchRepos() {
    // Make call to GitHub API and emit data to parent
    this.githubApiService.getRepos(this.query).subscribe((data) => {
      this.search.emit(data);
    });
  }
}
