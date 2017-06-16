import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Repository } from './repository';

@Injectable()
export class GithubApiService {
  private githubUrl = 'https://api.github.com/search/repositories';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  // Sends GET request to GitHub API to search/query for repositories, returns Observable that can be subscribed to
  getRepos(query): Observable<Repository[]> {
    return this.http
        .get(`${this.githubUrl}?q=${query}`)
        .map(mapRepos);
  }
}

function mapRepos(response:Response): Repository[]{
  // Map data from GET request after converting it to JSON
  return response.json().items.map(toRepo)
}

function toRepo(r:any): Repository{
  // Process data from GitHub's API, extract the relevant data, and create a Repository model object
  let repo = <Repository>({
    id: r.id,
    name: r.name,
    owner_login: r.owner.login,
    url: r.html_url,
    description: r.description,
    stargazers_count: r.stargazers_count,
    watchers_count: r.watchers_count,
    forks: r.forks
  });

  return repo;
}
