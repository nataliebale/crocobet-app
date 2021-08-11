import { CommonService } from './../../../core/services/clients/common.service';
import { UserDetailsComponent } from './user-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: UserDetailsComponent
  }
];

@NgModule({
  declarations: [
    UserDetailsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ],
  providers: [CommonService]
})
export class UserDetailsModule {}
