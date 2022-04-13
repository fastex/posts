import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from './post.model';

export const selectPosts = createFeatureSelector<ReadonlyArray<Post>>('posts');

export const selectFilter = createFeatureSelector<string>('filter');

export const filteredPosts = createSelector(
  selectPosts,
  selectFilter,
  (posts, filterValue) => {
    const filtered = posts.filter(
      (post) =>
        filterValue.length === 0 ||
        post.title.includes(filterValue) ||
        post.body.includes(filterValue)
    );
    return filtered;
  }
);
