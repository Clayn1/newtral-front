import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {PostModel} from '../../../models/PostModel';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../services/comment/comment.service';
import {CommentModel} from '../../../models/CommentModel';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  post: PostModel;
  comments: CommentModel[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((param) => {
      this.post = this.activatedRoute.snapshot.data.postsPage;
      this.comments = this.activatedRoute.snapshot.data.comments;
    });
  }

  ngOnInit(): void {
  }

}
