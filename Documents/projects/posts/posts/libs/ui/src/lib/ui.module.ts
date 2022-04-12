import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { DataModule } from '@posts/data';
import { PostsComponent } from './posts/posts.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { SinglePostPageComponent } from './single-post-page/single-post-page.component';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CdkAccordionModule,
    RouterModule,
    ReactiveFormsModule,
    DataModule,
    MatInputModule,
    MatIconModule,
  ],
  declarations: [
    PostsComponent,
    PostsPageComponent,
    SinglePostPageComponent,
    FilterComponent,
  ],
  exports: [
    PostsComponent,
    PostsPageComponent,
    SinglePostPageComponent,
    FilterComponent,
  ],
})
export class UiModule {}
