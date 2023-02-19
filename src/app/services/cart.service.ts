import { LOCAL_STORAGE } from '@ng-toolkit/universal'
import { Injectable, Inject } from '@angular/core'
import { Item } from '../models/item'
import { CartItem } from '../models/cart-item'
import { Price } from '../models/price'
import { ReplaySubject, BehaviorSubject } from '../../../node_modules/rxjs'
import Swal from 'sweetalert2'
import { Router } from '../../../node_modules/@angular/router'
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartTotalSubject = new BehaviorSubject<number>(0)
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([] as CartItem[])
  constructor(
    @Inject(LOCAL_STORAGE) private localStorage: any,
    private router: Router,
  ) {
    this.loadCart()
  }

  private saveCart(items: CartItem[]) {
    this.localStorage.setItem('cart', JSON.stringify(items))
    this.cartItemsSubject.next(this.getCart())
  }

  private getCart(): CartItem[] {
    if (!this.localStorage.getItem('cart')) {
      return null
    } else {
      let rawCart = JSON.parse(this.localStorage.getItem('cart'))
      return rawCart.map((item: CartItem) => new CartItem().deserialize(item))
    }
  }

  getItems() {
    return this.cartItemsSubject
  }

  add(newItem: Item): void {
    if (this.localStorage.getItem('cart') == null) {
      let cart: CartItem[] = []
      let cartItem: CartItem = new CartItem()
      cartItem.product = newItem.product
      cartItem.quantities.push(newItem.quantity)
      cart.push(cartItem)
      this.saveCart(cart)
    } else {
      let cart: CartItem[] = this.getCart()
      let index: number = -1
      for (var i = 0; i < cart.length; i++) {
        let item: CartItem = cart[i]
        if (item.product.id == newItem.product.id) {
          index = i
          break
        }
      }
      if (index == -1) {
        let cartItem: CartItem = new CartItem()
        cartItem.product = newItem.product
        cartItem.quantities = [newItem.quantity]
        cart.push(cartItem)
        this.saveCart(cart)
      } else {
        var foundSameUnit: boolean = false
        let item: CartItem = cart[index]
        for (var i = 0; i < item.quantities.length; i++) {
          if (item.quantities[i].unit == newItem.quantity.unit) {
            item.quantities[i].quantity += newItem.quantity.quantity
            foundSameUnit = true
            break
          }
        }
        if (!foundSameUnit) {
          item.quantities.push(newItem.quantity)
        }
        cart[index] = item
        this.saveCart(cart)
      }
    }
    Swal({
      title: 'Cart Updated',
      text:
        newItem.product.name +
        ' has been added to your cart.' +
        ' Go to Checkout?',
      animation: false,
      confirmButtonColor: '#f51167',
      showCancelButton: true,
      imageWidth: 250,
      imageHeight: 300,
      imageUrl: newItem.product.photo,
      confirmButtonText: 'Checkout',
      cancelButtonText: 'Keep Shopping',
    }).then((result) => {
      if (result.value) {
        this.router.navigate(['/checkout'])
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
    this.cartTotalSubject.next(this.getCart().length)
  }

  remove(item: CartItem): CartItem[] {
    Swal({
      title: 'Delete?',
      text:
        'Are you sure you want to remove ' +
        item.product.name +
        ' from your cart?',
      animation: false,
      confirmButtonColor: '#f51167',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      imageWidth: 250,
      imageHeight: 300,
      imageUrl: item.product.photo,
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        let cart: CartItem[] = this.getCart()
        for (var i = 0; i < cart.length; i++) {
          if (item.product.id == cart[i].product.id) {
            cart.splice(i, 1)
            break
          }
        }
        this.saveCart(cart)
        this.cartTotalSubject.next(this.cartTotalSubject.value - 1)
        Swal(
          'Deleted!',
          item.product.name + ' has been removed from your cart',
          'success',
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
    return this.getCart()
    //this.loadCart();
  }

  total(): number {
    let total: number = 0
    if (this.getCart() != null) {
      let cart: CartItem[] = this.getCart()
      for (var i = 0; i < cart.length; i++) {
        let item: CartItem = cart[i]
        for (var j = 0; j < item.quantities.length; j++) {
          total +=
            item.quantities[j].quantity *
            this.getPrice(item.quantities[j].unit, item.product.prices)
        }
      }
    }
    return total
  }

  update(cartItems: CartItem[]): void {
    this.saveCart(cartItems)
    this.cartTotalSubject.next(cartItems.length)
  }

  getCartNumber() {
    return this.cartTotalSubject
  }

  loadCart() {
    let cartItems: CartItem[] = this.getCart()
    if (cartItems != null && cartItems.length > 0) {
      this.cartTotalSubject.next(cartItems.length)
      this.cartItemsSubject.next(this.getCart())
    } else {
      this.cartItemsSubject.next([] as CartItem[])
      this.cartTotalSubject.next(0)
    }
  }

  private getPrice(unit: string, prices: Price[]): number {
    let price: number = 0
    for (var i = 0; i < prices.length; i++) {
      if (unit == prices[i].unit) {
        price = prices[i].amount - 20
        break
      }
    }
    return price
  }

  purge() {
    this.localStorage.removeItem('cart')
    this.cartItemsSubject.next([] as CartItem[])
    this.cartTotalSubject.next(0)
  }
}
