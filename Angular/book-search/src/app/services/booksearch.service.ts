import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, RootObject } from '../interfaces/book.interface';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksearchService {
  private readonly searchApi = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private readonly http: HttpClient) {}

  getBookList(bookname: string) {
    return this.http.get<RootObject>(this.searchApi + bookname).pipe(
      filter((res: RootObject) => {
        return res.totalItems !== 0;
      }),
      map(({ items }: RootObject): any => {
        console.log('items', items);
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
      })
    );
  }
}

// [{
//   bookpic: ,
//   bookname: ,
//   publisher: ,
//   publishdate: ,
//   description ,
// }]
