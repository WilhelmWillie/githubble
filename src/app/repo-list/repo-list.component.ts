import { Component, OnInit, Input } from '@angular/core';

import { Repository } from '../repository';

@Component({
  selector: 'repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  @Input() repos : Repository[];

  constructor() { }

  ngOnInit() {
  }

}
