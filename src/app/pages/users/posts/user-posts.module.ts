import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './../../../core/services/clients/common.service';
import { UserPostsComponent } from './user-posts.component';

const routes: Routes = [
  {
    path: '',
    component: UserPostsComponent,
  },
];

@NgModule({
  declarations: [UserPostsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, HttpClientModule],
  providers: [CommonService],
})
export class UserPostsModule {}
