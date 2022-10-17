import { Component } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'book-search';

  constructor() {}

  ngOnInit(): void {
    // const obs$: Observable<number> = of(1, 2, 3);
    // obs$.subscribe((data) => console.log(data));
    // const obs$ = from([1, 2, 3]);
    // obs$.subscribe((data) => console.log(data));
  }
}
