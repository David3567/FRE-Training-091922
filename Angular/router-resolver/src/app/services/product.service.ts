import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[];

  public constructor() {
    this.products = [
      new Product(1, 'Memory Card', 500),
      new Product(2, 'Pen Drive', 750),
      new Product(3, 'Power Bank', 100),
      new Product(4, 'Computer', 100),
      new Product(5, 'Laptop', 100),
      new Product(6, 'Printer', 100),
    ];
  }

  //Return Products List with a delay
  public getProducts(): Observable<Product[]> {
    return of(this.products).pipe(delay(2500));
  }

  public getProduct(id: number): Observable<any> {
    const Product = this.products.find((i) => i.productID == id);
    return of(Product).pipe(delay(2500));
  }
}
