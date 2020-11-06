import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostModel} from '../../../models/PostModel';
import {Observable} from 'rxjs';
import {PostService} from './post.service';

@Injectable({
  providedIn: 'root'
})
export class SinglePostResolverService implements Resolve<PostModel>{

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel>{
    return this.postService.getPost(route.paramMap.get('id'));
  }
}
