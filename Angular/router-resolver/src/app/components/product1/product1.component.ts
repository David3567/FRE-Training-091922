import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  templateUrl: './product1.component.html',
})
export class Product1Component {
  products: Product[] | undefined;
  isloading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    // this.spinnerService.setspinner(false);
    this.productService.getProducts().subscribe((data) => {
      if (data) {
        this.products = data;
        this.isloading = false;
      }
    });
  }
}
