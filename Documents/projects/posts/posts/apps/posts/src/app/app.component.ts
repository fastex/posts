import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostsService, retrievedPosts } from '@posts/data';

@Component({
  selector: 'posts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private postsService: PostsService, private store: Store) {}

  ngOnInit() {
    this.postsService
      .getPosts()
      .subscribe((posts) => this.store.dispatch(retrievedPosts({ posts })));
  }
}
