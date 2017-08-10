import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

import { Post, PostService } from './post.service';

@Component({
  templateUrl: './postDetail.component.html',
})
export class PostDetailComponent implements OnInit {
  post = {
    title: "",
    userId: "",
    body: ""
  };
  comments: Array<any>;
  email = "";
  comment = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PostService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getPostComments(params.get('id')))
      .subscribe((comments) => this.comments = comments);
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getPost(params.get('id')))
      .subscribe((post) => this.post = post);
  }

  onSubmit() { 
    if (this.email && this.comment) {
      var commentObj = {
        email: this.email,
        body: this.comment
      };
      this.comments.push(commentObj);
      this.comment = "";
    }
  }
}