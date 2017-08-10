import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export class Post {
    constructor(
        public id: number,
        public userId: number,
        public title: string,
        public body: string,
    ) { }
}


@Injectable()
export class PostService {
    postData: Array<any>;
    constructor(private http: Http) {}

    getPosts() {
        return this.http.get('https:/jsonplaceholder.typicode.com/posts')
            .map(response => response.json());
    }

    getPost(id: number | string) {
        return this.http.get('https:/jsonplaceholder.typicode.com/posts/'+id)
            .map(response => response.json());
    }

    getPostComments(id: number | string) {
        return this.http.get('https:/jsonplaceholder.typicode.com/posts/'+id+'/comments')
            .map(response => response.json());

    }

    getUsers() {
        return this.http.get('https:/jsonplaceholder.typicode.com/users')
            .map(response => response.json());
    }

    getComments() {
        return this.http.get('https:/jsonplaceholder.typicode.com/comments')
            .map(response => response.json());
    }
}