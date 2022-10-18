import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, RootObject } from '../interfaces/book.interface';
import { filter, map, tap, take } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksearchService {
  private readonly searchApi = 'https://www.googleapis.com/books/v1/volumes?q=';

  //* ~~~~~~~~~~ books
  private books = [];
  private books$ = new BehaviorSubject<any>(this.books);
  booklist$ = this.books$.asObservable();

  //* ~~~~~~~~~~~ wishes
  private wishlist: any = [];
  private wishlist$ = new BehaviorSubject<any>(this.wishlist);
  wishes$ = this.wishlist$.asObservable();

  constructor(private readonly http: HttpClient) {}

  getBookList(bookname: string) {
    return this.http.get<RootObject>(this.searchApi + bookname).pipe(
      filter((res: RootObject) => {
        return res.totalItems !== 0;
      }),
      map(({ items }: RootObject): any => {
        if (items && items.length) {
          return items.map(({ volumeInfo }: Book) => {
            const book: any = {
              bookname: volumeInfo.title,
              publisher: volumeInfo.publisher,
              publishdate: volumeInfo.publishedDate,
              description: volumeInfo.description,
            };
            if (volumeInfo.imageLinks) {
              book.bookpic = volumeInfo.imageLinks.thumbnail || '';
            }
            return book;
          });
        }
      }),
      tap((books: any) => {
        this.books = books;
        this.books$.next(this.books);
      })
      // take(1)
    );
  }

  addBookToWishList(bookname: string) {
    console.log(bookname);
    this.wishlist.push(bookname);
    this.wishlist$.next(this.wishlist);
  }
}
