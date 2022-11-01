import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-router-resolve';
  isloading = false;

  constructor(
    private readonly router: Router,
    private readonly spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.router.events
      // .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(console.log);
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
 *   ChildActivationStart
 *    ActivationStart
 *     ResolveStart
 *     ResolveEnd
 *    ActivationEnd
 *   ChildActivationEnd
 * NavigationEnd
 * Scroll
 */
