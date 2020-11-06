import { Injectable } from '@angular/core';
import {UserPageService} from './user-page.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserPageModel} from '../../../models/UserPageModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPageResolverService implements Resolve<UserPageModel[]>{

  constructor(private userPageService: UserPageService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserPageModel[]> {
    return this.userPageService.getUsers(route.paramMap.get('page'),
      route.queryParamMap.get('orderBy'),
      route.queryParamMap.get('direction'),
      route.queryParamMap.get('username'));
  }
}
