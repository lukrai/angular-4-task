import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 

import { AppComponent }     from './app.component';
import { PostsComponent }   from './posts/posts.component';
import { PostDetailComponent }   from './posts/postDetail.component';
import { PageNotFoundComponent } from './not-found.component';
 
const appRoutes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: '',   redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}