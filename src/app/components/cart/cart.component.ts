import { Component, OnInit } from '@angular/core'
import { CartItem } from '../../models/cart-item'
import { CartService } from '../../services/cart.service'
import { Quantity } from '../../models/quantity'
import { Product } from '../..//models/product'
import { ProductService } from '../../services/product.service'
import Swal from 'sweetalert2'
import swal from 'sweetalert2'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  private pathToAssets: string = '../../assets/'
  items: CartItem[] = new Array()
  products: Product[] = new Array()

  constructor(
    private cartService: CartService,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.cartService.getItems().subscribe((data: CartItem[]) => {
      this.items = data
    })
    this.products = this.productService.findRandom(6)
  }

  printPrices(item: CartItem): string {
    let prices = item.product.prices

    let all: string = ''
    for (var i = 0; i < prices.length; i++) {
      if (i == 0) all = '$' + prices[i].amount + '/' + prices[i].unit
      else all = all + ' , ' + '$' + prices[i].amount + '/' + prices[i].unit
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
      total = total + map.get(quantity.unit) * quantity.quantity
    })
    console.log(total)
    console.log(map)
    return total
  }

  delete(item: CartItem) {
    this.items = this.cartService.remove(item)
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

  total() {
    return this.cartService.total()
  }

  clearCart() {
    if (this.items.length > 0) {
      Swal({
        title: 'Delete Cart!',
        type: 'warning',
        text: 'Are you sure you want to empty your cart ?',
        animation: false,
        confirmButtonColor: '#f51167',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.value) {
          this.cartService.purge()
          swal({
            title: 'Deleted!',
            type: 'success',
            text: 'Your cart is now empty!',
            confirmButtonText: 'Okay',
            confirmButtonColor: '#f51167',
          })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
      })
    } else {
      swal({
        type: 'warning',
        text: 'Your cart is already empty!',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#f51167',
      })
    }
  }
}
