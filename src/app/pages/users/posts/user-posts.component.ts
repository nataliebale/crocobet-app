import { CommonService } from './../../../core/services/clients/common.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
})
export class UserPostsComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  itemId: number;
  user: any;
  posts: any;

  constructor(
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get user id from ActivatedRoute
    if (this.activatedRoute.snapshot.params['id']) {
      this.itemId = +this.activatedRoute.snapshot.params['id'];
      this.getUserById();
      this.getUserPosts();
    }
  }

  private getUserById(): void {
    this.commonService
      .get(`users?id=${this.itemId}`)
      .pipe(
        takeUntil(this.unsubscribe$),
        catchError((err) => {
          console.error('error: ', err);
          return EMPTY;
        })
      )
      .subscribe((response) => {
        if (response) {
          this.user = response[0];
        }
      });
  }

  private getUserPosts(): void {
    this.commonService
      .get(`posts?userId=${this.itemId}`)
      .pipe(
        takeUntil(this.unsubscribe$),
        catchError((err) => {
          console.error('error: ', err);
          return EMPTY;
        })
      )
      .subscribe((response) => {
        if (response) {
          this.posts = response;
        }
      });
  }

  onBackClick(): void {
    this.router.navigate(['/users/details', this.itemId]);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
