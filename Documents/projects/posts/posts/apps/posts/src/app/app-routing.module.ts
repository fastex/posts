import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsPageComponent, SinglePostPageComponent } from '@posts/ui';

const routes: Routes = [
  { path: 'all', component: PostsPageComponent },
  { path: 'post/:id', component: SinglePostPageComponent },
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  { path: '**', redirectTo: '/all' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
