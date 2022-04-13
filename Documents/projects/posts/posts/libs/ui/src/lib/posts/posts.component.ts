import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Post } from '@posts/data';

@Component({
  selector: 'posts-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent {
  @Input() posts: ReadonlyArray<Post> | undefined | null;
  @Output() toggle = new EventEmitter<number>();

  onToggle(post: Post) {
    this.toggle.emit(post.id);
  }
}
