import { Component } from '@angular/core'

import { products } from '../../../products'
import { NgForOf, NgIf } from '@angular/common'
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ProductAlertsComponent,
    RouterLink,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {

  products = [...products]

  share() {
    window.alert('The product has been shared!')
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }
}
