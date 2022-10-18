import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter, mergeMap, switchMap, tap } from 'rxjs/operators';
import { BooksearchService } from '../services/booksearch.service';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.scss'],
})
export class InputboxComponent implements OnInit, OnDestroy {
  @ViewChild('inputbox', { static: true })
  inputbox!: ElementRef;

  private eventSubscription!: Subscription;

  constructor(private bookService: BooksearchService) {}

  ngOnInit(): void {
    this.eventSubscription = fromEvent(this.inputbox.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        filter((_) => {
          return this.inputbox.nativeElement.value.trim() !== '';
        }),
        switchMap((_) => {
          return this.bookService.getBookList(
            this.inputbox.nativeElement.value
          );
        })
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }
}
