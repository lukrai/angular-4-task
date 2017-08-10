import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Post, PostService } from './post.service';

import 'rxjs/Rx';

@Component({

  templateUrl: './posts.component.html',
})

export class PostsComponent implements OnInit {
  posts: Array<any> = [];

  postData: Array<any>;
  comments: Array<any>;
  users: Array<any> = [];

  private selectedId: number;

  constructor(
    private service: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getPosts().subscribe(data => this.posts = data);
    this.service.getUsers().subscribe(data => (this.users = data, this.filterUsers()));
    this.service.getComments().subscribe(data => (this.comments = data, this.countComments()));
  }

  onSelect(post: Post) {
    this.router.navigate(['/post', post.id]);
  }

  filterUsers() {
    for (var i = 0; i < this.posts.length; i++) {
      var postObj = this.posts[i];
      var user = "";
      user = this.users.find(x => x.id === postObj.userId);
      postObj.user = user['name'];
      this.posts[i] = postObj;
    }
  }

  countComments() {
    for (var i = 0; i < this.posts.length; i++) {
      var postObj = this.posts[i];
      if (!this.posts[i].comments_count) {
        postObj.comments_count = 0;
      }

      for (var j = 0; j < this.comments.length; j++) {
        if (postObj['id'] === this.comments[j].postId) {
          postObj.comments_count++;
          this.posts[i] = postObj;
        }
      }
    }
  }

}

