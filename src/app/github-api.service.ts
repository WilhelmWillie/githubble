import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubApiService {
  private githubUrl = 'https://api.github.com/search/repositories';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  // Sends GET request to GitHub API to search/query for repositories 
  getRepos(query): Promise<Object[]> {
    return this.http.get(`${this.githubUrl}?q=${query}`)
               .toPromise()
               .then(response => response.json() as Object[]);
  }
}
