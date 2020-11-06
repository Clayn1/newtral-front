import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {MainNavbarComponent} from './components/main-navbar/main-navbar.component';
import {SharedNavbarComponent} from './components/shared-navbar/shared-navbar.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {TopCardComponent} from './components/top-card/top-card.component';
import {PopularPostComponent} from './components/popular-post/popular-post.component';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {AuthorsComponent} from './components/authors/authors.component';
import {PopularAuthorComponent} from './components/popular-author/popular-author.component';
import {PostPageComponent} from './components/post-page/post-page.component';
import {CommentComponent} from './components/comment/comment.component';
import {UserPageComponent} from './components/user-page/user-page.component';
import {PostResolverService} from './services/post/post-resolver.service';
import {HttpClientModule} from '@angular/common/http';
import {SinglePostResolverService} from './services/post/single-post-resolver.service';
import {CommentResolverService} from './services/comment/comment-resolver.service';
import {UserPageResolverService} from './services/user-page/user-page-resolver.service';
import { SectionPostsComponent } from './components/section-posts/section-posts.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  resolve: {postsPage: PostResolverService}
}, {
  path: 'authors',
  component: AuthorsComponent,
  resolve: {userPages: UserPageResolverService}
}, {
  path: 'post/:id',
  component: PostPageComponent,
  resolve: {postsPage: SinglePostResolverService, comments: CommentResolverService}
}, {
  path: 'user/:username',
  component: UserPageComponent
}, {
  path: ':section',
  component: SectionPostsComponent,
  resolve: {postsPage: PostResolverService}
}];

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    SharedNavbarComponent,
    CarouselComponent,
    TopCardComponent,
    PopularPostComponent,
    MainComponent,
    AuthorsComponent,
    PopularAuthorComponent,
    PostPageComponent,
    CommentComponent,
    UserPageComponent,
    SectionPostsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
