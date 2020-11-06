import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserPageModel} from '../../../models/UserPageModel';
import {UserPageService} from './user-page.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleUserPageResolverService implements Resolve<UserPageModel>{

  constructor(private userPageService: UserPageService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserPageModel> {
    return this.userPageService.getUser(route.paramMap.get('username'));
  }
}
