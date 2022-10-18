import { Component, OnInit } from '@angular/core';
import { BooksearchService } from '../services/booksearch.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  inputData: string = 'wishlist';

  constructor(public bookService: BooksearchService) {}

  ngOnInit(): void {}
}
