import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./details/user-details.module').then((m) => m.UserDetailsModule),
  },
  {
    path: 'posts/:id',
    loadChildren: () =>
      import('./posts/user-posts.module').then((m) => m.UserPostsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
