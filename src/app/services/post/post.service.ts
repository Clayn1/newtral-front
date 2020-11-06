import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../../models/PostModel';
import {apiPath} from '../../../globals';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  /**
   * @param page - each page has 100 entries (pages start from 1)
   * @param orderBy - field name of first order sort
   * @param direction - string desc/acs (case insensitive) default - desc
   * @param section - string with value of explicit set
   * @param title - search entries that contain string
   */
  getPosts(page, orderBy, direction, section, title): Observable<PostModel[]>{
    return this.http.get<PostModel[]>(apiPath + 'post?page=' + (page == null ? 1 : page) +
      (orderBy == null ? '' : '&orderBy=' + orderBy) +
      (direction == null ? '' : '&direction=' + direction) +
      (section == null ? '' : '&section=' + section) +
      (title == null ? '' : '&title=' + title));
  }
  getPost(id): Observable<PostModel>{
    return this.http.get<PostModel>(apiPath + 'post/' + id);
  }
  postPost(post, userId): Observable<PostModel>{
    return this.http.post<PostModel>(apiPath + 'post/' + userId, post);
  }
  deletePost(id): Observable<any>{
    return this.http.delete(apiPath + 'post/' + id);
  }
}
