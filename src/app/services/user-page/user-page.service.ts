import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../../models/PostModel';
import {apiPath} from '../../../globals';
import {UserPageModel} from '../../../models/UserPageModel';

@Injectable({
  providedIn: 'root'
})
export class UserPageService {

  constructor(private http: HttpClient) { }

  getUsers(page, orderBy, direction, username): Observable<UserPageModel[]>{
    return this.http.get<UserPageModel[]>(apiPath + 'user?page=' + (page == null ? 1 : page) +
      (orderBy == null ? '' : '&orderBy=' + orderBy) +
      (direction == null ? '' : '&direction=' + direction) +
      (username == null ? '' : '&title=' + username));
  }
  getUser(username): Observable<UserPageModel>{
    return this.http.get<UserPageModel>(apiPath + 'user/' + username);
  }
  postUser(user): Observable<UserPageModel>{
    return this.http.post<UserPageModel>(apiPath + 'user/', user);
  }
  deleteUser(id): Observable<any>{
    return this.http.delete(apiPath + 'user/' + id);
  }
}
