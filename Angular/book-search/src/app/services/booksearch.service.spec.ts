import { TestBed } from '@angular/core/testing';

import { BooksearchService } from './booksearch.service';

describe('BooksearchService', () => {
  let service: BooksearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
