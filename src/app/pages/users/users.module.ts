import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { CommonService } from './../../core/services/clients/common.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, HttpClientModule, UsersRoutingModule],
  providers: [CommonService],
})
export class UsersModule {}
