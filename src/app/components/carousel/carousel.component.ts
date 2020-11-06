import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../../models/PostModel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input()
  posts: PostModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
