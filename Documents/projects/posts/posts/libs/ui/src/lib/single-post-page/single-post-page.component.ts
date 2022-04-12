import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'posts-single-post-page',
  templateUrl: './single-post-page.component.html',
  styleUrls: ['./single-post-page.component.scss'],
})
export class SinglePostPageComponent implements OnInit {
  id = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
