import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription, Subject, Observable, forkJoin } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'book-search';
  subq$ = new Subscription();
  notifier$ = new Subject();
  baseUrl = 'https://randomuser.me/api';

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    // const user = this.http.get(this.baseUrl).pipe(
    //   map((res: any) => {
    //     return res.results[0];
    //   })
    // );
    // const usesObs: Observable<any>[] = [];
    // new Array(3).fill(0).forEach((_) => {
    //   usesObs.push(user);
    // });
    // forkJoin({
    //   user1: this.http.get(this.baseUrl).pipe(
    //     map((res: any) => {
    //       return res.results[0];
    //     })
    //   ),
    //   num: interval(500).pipe(
    //     map((num) => {
    //       console.log(num);
    //       return num;
    //     }),
    //     take(10)
    //   ),
    // }).subscribe(console.log);
    // this.subq$ = interval(500)
    //   .pipe(takeUntil(this.notifier$))
    //   .subscribe(console.log);
  }

  ngOnDestroy(): void {}

  stopObs() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }
}
