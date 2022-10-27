import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  snapshortPage = '';
  page = '';
  name = '';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('product page');

    this.snapshortPage =
      this.activatedRoute.snapshot.queryParamMap.get('page') || '0';

    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.page = params.get('page') || '0';
      this.name = params.get('name') || 'hello';
    });
  }

  next() {
    this.router.navigate(['product'], {
      queryParams: { page: +this.page + 1 },
    });
  }
}
