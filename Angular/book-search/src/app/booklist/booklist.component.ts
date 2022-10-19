import { Component, OnInit } from '@angular/core';
import { BooksearchService } from '../services/booksearch.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent {
  constructor(public bookService: BooksearchService) {
    this.bookService.booklist$.subscribe();
  }

  // ngOnInit(): void {

  // }

  onClickBook(bookName: string) {
    this.bookService.addBookToWishList(bookName);
  }
}
