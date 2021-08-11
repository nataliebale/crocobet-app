import { CommonService } from './../../core/services/clients/common.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  users: any;

  constructor(private commonService: CommonService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.commonService
      .get(`users`)
      .pipe(
        takeUntil(this.unsubscribe$),
        catchError((err) => {
          console.error('error: ', err);
          return EMPTY;
        })
      )
      .subscribe((response: any) => {
        this.users = response;
      });
  }

  onClick(id: number): void {
    this.router.navigate(['/users/details', id]);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
