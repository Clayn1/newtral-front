import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  @Input()
  template = '<h1>Hello</h1>' +
    '<p>This is post</p>';

  constructor() {
  }

  ngOnInit(): void {
  }

}
