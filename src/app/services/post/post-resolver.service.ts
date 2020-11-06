import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostModel} from '../../../models/PostModel';
import {PostService} from './post.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolverService implements Resolve<PostModel[]>{

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> {
    return this.postService.getPosts(route.paramMap.get('page'),
      route.queryParamMap.get('orderBy'),
      route.queryParamMap.get('direction'),
      route.paramMap.get('section'),
      route.queryParamMap.get('title'));
  }
}
