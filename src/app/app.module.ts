import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }      from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component'
import { PostsModule } from './posts/posts.module'
import { PageNotFoundComponent } from './not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    PostsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCardModule, 
    MdMenuModule, 
    MdToolbarModule, 
    MdIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
