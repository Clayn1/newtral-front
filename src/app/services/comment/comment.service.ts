import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../../models/PostModel';
import {apiPath} from '../../../globals';
import {CommentModel} from '../../../models/CommentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getPostComments(id): Observable<CommentModel[]>{
    return this.http.get<CommentModel[]>(apiPath + 'comment/' + id);
  }
}
