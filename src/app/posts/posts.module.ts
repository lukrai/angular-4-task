import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
 
import { PostsComponent }    from './posts.component';
import { PostDetailComponent }    from './postDetail.component';
import { PostService } from './post.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule } from '@angular/material';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCardModule, 
    MdMenuModule, 
    MdToolbarModule, 
    MdIconModule,
    MdInputModule
  ],
  declarations: [
    PostsComponent,
    PostDetailComponent,
  ],
  providers: [ PostService ]
})
export class PostsModule {}