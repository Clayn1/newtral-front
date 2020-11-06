import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostModel} from '../../../models/PostModel';

@Component({
  selector: 'app-section-posts',
  templateUrl: './section-posts.component.html',
  styleUrls: ['./section-posts.component.css']
})
export class SectionPostsComponent implements OnInit {

  posts: PostModel[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((param) => {
      this.posts = this.activatedRoute.snapshot.data.postsPage.posts;
    });
  }

  ngOnInit(): void {
  }

}
