import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostModel} from '../../../models/PostModel';
import {CommentModel} from '../../../models/CommentModel';
import {Observable} from 'rxjs';
import {CommentService} from './comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<CommentModel[]>{

  constructor(private comService: CommentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel[]> {
    return this.comService.getPostComments(route.paramMap.get('id'));
  }
}
