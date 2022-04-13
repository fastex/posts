import { createAction, props } from '@ngrx/store';
import { Post } from '..';

export const LOADED = '[Posts API] Posts retreived successfuly';
export const TOGGLE = '[Posts UI] Toggle expanded state';
export const FILTER = '[Posts UI] Filter changed';

export const retrievedPosts = createAction(LOADED, props<{ posts: Post[] }>());
export const toggleExpanded = createAction(TOGGLE, props<{ postId: number }>());
export const filterChanged = createAction(
  FILTER,
  props<{ filterValue: string }>()
);
