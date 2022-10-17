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
      // filter((data: any) => {
      //   return data.items?.length;
      // }),
      map((datafrombackend: any) => {
        return datafrombackend.items.map((item: any) => ({
          bookpic: item.volumeInfo.imageLinks.thumbnail || '',
          bookname: item.volumeInfo.title || '',
          publisher: item.volumeInfo.publisher || '',
          publishdate: item.volumeInfo.publishedDate || '',
          description: item.volumeInfo.description || '',
        }));
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
