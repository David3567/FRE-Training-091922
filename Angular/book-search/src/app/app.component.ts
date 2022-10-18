import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'book-search';
  subq$ = new Subscription();
  notifier$ = new Subject();

  constructor() {}

  ngOnInit(): void {
    // const obs$: Observable<number> = of(1, 2, 3);
    // obs$.subscribe((data) => console.log(data));

    // const obs$ = from([1, 2, 3]);
    // obs$.subscribe((data) => console.log(data));

    this.subq$ = interval(500)
      .pipe(takeUntil(this.notifier$))
      .subscribe(console.log);
  }
  ngOnDestroy(): void {
    // this.subq$.unsubscribe();
  }

  stopObs() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }
}
