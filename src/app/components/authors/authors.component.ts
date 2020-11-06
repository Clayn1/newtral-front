import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserPageModel} from '../../../models/UserPageModel';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  userPages: UserPageModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((param) => {
      this.userPages = this.activatedRoute.snapshot.data.userPages.userPages;
    });
  }

  ngOnInit(): void {
  }

}
