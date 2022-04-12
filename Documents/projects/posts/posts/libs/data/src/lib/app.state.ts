import { Post } from './post.model';

export interface AppState {
  posts: ReadonlyArray<Post>;
  filter: string;
}
