import { Component } from '@angular/core'
import { CartService } from '../../cart.service'
import { Observable } from 'rxjs'
import { AsyncPipe, CurrencyPipe, NgForOf } from '@angular/common'

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [
    CurrencyPipe,
    AsyncPipe,
    NgForOf,
  ],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css',
})
export class ShippingComponent {

  shippingCosts!: Observable<{ type: string, price: number }[]>

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices()
  }
}
