import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../../models/PostModel';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.css']
})
export class TopCardComponent implements OnInit {
  @Input()
  post: PostModel;
  constructor() { }

  ngOnInit(): void {
  }

}
