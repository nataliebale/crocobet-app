import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/clients/common.service';
import { EMPTY, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  userId: number;
  user: any;
  constructor(
    private commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get user id from ActivatedRoute
    if (this.activatedRoute.snapshot.params['id']) {
      this.userId = +this.activatedRoute.snapshot.params['id'];
      this.getUserById();
    }
  }

  private getUserById(): void {
    this.commonService
      .get(`users?id=${this.userId}`)
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

  onClick(): void {
    this.router.navigate(['/users/posts', this.userId]);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
