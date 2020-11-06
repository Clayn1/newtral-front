import { Component, OnInit } from '@angular/core';
import {PostModel} from '../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  posts: PostModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((param) => {
      this.posts = this.activatedRoute.snapshot.data.postsPage.posts;
    });
  }

  ngOnInit(): void {
  }

}
