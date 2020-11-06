import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../../models/PostModel';

@Component({
  selector: 'app-popular-post',
  templateUrl: './popular-post.component.html',
  styleUrls: ['./popular-post.component.css']
})
export class PopularPostComponent implements OnInit {

  @Input()
  post: PostModel;

  constructor() { }

  ngOnInit(): void {
  }

}
