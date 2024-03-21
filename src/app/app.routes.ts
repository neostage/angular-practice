import { Routes } from '@angular/router'
import { MainlandComponent } from './mainland/mainland.component'
import { ProductDetailsComponent } from './mainland/products/product-details/product-details.component'
import { ProductListComponent } from './mainland/products/product-list/product-list.component'
import { CartComponent } from './mainland/cart/cart.component'
import { ShippingComponent } from './mainland/shipping/shipping.component'

export const routes: Routes = [
  {
    path: '',
    component: MainlandComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' }, // Redirect to 'products'
      { path: 'cart', component: CartComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'shipping', component: ShippingComponent },
    ],
  },
  { path: '**', redirectTo: '' }, // Redirect any unmatched route to the default route
]
