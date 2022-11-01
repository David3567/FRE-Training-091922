import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product';

@Component({
  templateUrl: './product1-detail.component.html',
})
export class Product1DetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this._Activatedroute.snapshot.params['id'];

    this._productService.getProduct(id).subscribe((data) => {
      this.product = data;
    });
  }
}
