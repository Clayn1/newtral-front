import {Component, Input, OnInit} from '@angular/core';
import {UserPageModel} from '../../../models/UserPageModel';

@Component({
  selector: 'app-popular-author',
  templateUrl: './popular-author.component.html',
  styleUrls: ['./popular-author.component.css']
})
export class PopularAuthorComponent implements OnInit {

  @Input()
  userPage: UserPageModel;
  @Input()
  position: number;
  constructor() { }

  ngOnInit(): void {
  }

}
