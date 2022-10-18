import { Component, OnInit } from '@angular/core';
import { BooksearchService } from '../services/booksearch.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BooklistComponent implements OnInit {
  constructor(public bookService: BooksearchService) {}

  ngOnInit(): void {
    this.bookService.booklist$.subscribe();
  }

  onClickBook(bookName: string) {
    this.bookService.addBookToWishList(bookName);
  }
}
