import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '..';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly serviceUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.serviceUrl)
      .pipe(map((posts) => posts || []));
  }
}
