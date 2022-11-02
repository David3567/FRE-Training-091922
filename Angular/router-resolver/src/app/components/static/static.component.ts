import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  templateUrl: './static.component.html',
})
export class StaticComponent implements OnInit {
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    this.spinnerService.setspinner(false);
    // this.activatedRoute.data.subscribe((data) => {
    //   this.product = data;
    // });
    this.product = this.activatedRoute.snapshot.data['id'];
    // console.log(this.activatedRoute.snapshot.data);
  }
}
