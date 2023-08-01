import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
// import { _sanitizeHtml } from '@angular/core/src/sanitization/html_sanitizer';
import { CartItem } from '../../models/cart-item'
import { Quantity } from '../../models/quantity'
import { PRODUCTS, Product } from '../../models/product'
import { CartService } from '../../services/cart.service'
import { ProductService } from '../../services/product.service'
import { ProductDBService } from 'src/app/services/product.db.service'
import { Subscription } from 'rxjs'

declare var $: any
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  concentrates = []
  strains = []
  seeds = []
  vape_pens = []

  private productSubscribe: Subscription
  cartNumber: number = 0
  products = PRODUCTS
  searchString = ''
  cartItems: CartItem[] = new Array()
  total: number = 0
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private productDbService: ProductDBService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.cartService.getCartNumber().subscribe((data) => {
      this.cartNumber = data
      this.total = this.cartService.total()
    })
    this.cartService.getItems().subscribe((data) => {
      this.cartItems = data
    })

    // this.concentrates = this.getCategoryArray('concentrate')
    // this.strains = this.getCategoryArray('strain')
    // this.seeds = this.getCategoryArray('seed')
    // this.vape_pens = this.getCategoryArray('vape_pen')
  }

  printQuantity(item: CartItem) {
    let quantities = item.quantities

    let all: string = ''
    for (var i = 0; i < quantities.length; i++) {
      if (i == 0) all = quantities[i].quantity + ' - ' + quantities[i].unit
      else
        all = all + ' & ' + quantities[i].quantity + ' - ' + quantities[i].unit
    }
    return all
  }

  itemTotal(item: CartItem): number {
    let prices = item.product.prices
    let map: Map<string, number> = new Map<string, number>()
    for (var i = 0; i < prices.length; i++) {
      map.set(prices[i].unit, prices[i].amount)
    }

    let total = 0
    item.quantities.forEach((quantity: Quantity) => {
      total += map.get(quantity.unit) * quantity.quantity
    })

    return total
  }

  search() {
    if (this.searchString !== '') {
      this.router.navigate(['search/' + this.searchString.replace(' ', '+')])
    }
  }

  getCategoryArray(category: string) {
    let products = []
    this.productDbService
      .getProductByCategory(category)
      .subscribe((productData) => {
        products = productData.products
      })
    // console.log(products)
    return products
  }

  // ngOnDestroy() {
  //   this.productSubscribe.unsubscribe()
  // }
}
