import { createReducer, on } from '@ngrx/store';

import { retrievedPosts, toggleExpanded } from './posts.actions';
import { Post } from '..';

export const initialState: ReadonlyArray<Post> = [];

export const postsReducer = createReducer(
  initialState,
  on(retrievedPosts, (state, { posts }) => posts),

  on(toggleExpanded, (state, { postId }) => {
    return state.map((post) => {
      if (post.id === postId) {
        const toggledPost = { ...post };
        toggledPost.expanded = !post.expanded;
        return toggledPost;
      }
      return post;
    });
  })
);
