import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  filterChanged,
  filteredPosts,
  selectFilter,
  toggleExpanded,
} from '@posts/data';

@Component({
  selector: 'posts-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
})
export class PostsPageComponent {
  posts$ = this.store.select(filteredPosts);
  filter$ = this.store.select(selectFilter);

  constructor(private store: Store) {}

  onToggle(postId: number) {
    this.store.dispatch(toggleExpanded({ postId }));
  }

  onFilterChanged(filterValue: string) {
    this.store.dispatch(filterChanged({ filterValue }));
  }
}
