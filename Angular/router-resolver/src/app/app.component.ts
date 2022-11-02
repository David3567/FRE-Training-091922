import { Component, Inject } from '@angular/core';
import { NavigationStart, Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PRODCT } from './app.module';
import { ProductService } from './services/product.service';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService],
})
export class AppComponent {
  title = 'angular-router-resolve';
  isloading = false;

  constructor(
    private readonly router: Router,
    private readonly spinnerService: SpinnerService,
    private productservice: ProductService
  ) // @Inject(PRODCT) private service: any,
  // @Inject('baseUrl') private baseUrl: string,
  {}

  ngOnInit(): void {
    // this.service.getProducts().subscribe(console.log);
    // this.router.events
    //   // .pipe(filter((event) => event instanceof NavigationStart))
    //   .subscribe(console.log);
  }

  loadProduct2() {
    this.spinnerService.setspinner(true);
  }
}

/**
 * NavigationStart
 *  RoutesRecognized
 *  GuardsCheckStart
 *  GuardsCheckEnd
 *     ResolveStart
 *     ResolveEnd
 *   ChildActivationStart
 *    ActivationStart
 *    ActivationEnd
 *   ChildActivationEnd
 * NavigationEnd
 * Scroll
 */
