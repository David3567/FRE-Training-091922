import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'product', component: ProductComponent }];

@NgModule({
  declarations: [ProductComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [ProductComponent],
})
export class ChildModule {}

('http://localhost:4200/lazyloadproduct/product');
