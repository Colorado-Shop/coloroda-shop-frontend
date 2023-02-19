import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'
import { Product } from '../../models/product'
import { ProductService } from '../../services/product.service'
import { UNITS } from '../../models/price'
import { CartService } from '../../services/cart.service'
import { Item } from '../../models/item'
import { Quantity } from '../../models/quantity'
import Swal from 'sweetalert2'
import { filter, map, mergeMap } from 'rxjs/operators'
import { Title } from '@angular/platform-browser'
import { ProductDBService } from 'src/app/services/product.db.service'
import { Subscription } from 'rxjs'
declare var $: any

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product = new Product()
  private productSubscribe: Subscription
  products: Product[] = []
  productId: string = ''
  productCategory: string = ''
  units = UNITS
  chosenUnit: string = UNITS[0].name
  quant: number = 1
  keyUp = ''
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private productDbService: ProductDBService,
    private cartService: CartService,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id']
      // this.productDbService.getAProduct
      this.productDbService
        .getAProduct(this.productId)
        .subscribe((productData) => {
          this.product = productData.product
          console.log(this.product)
          this.product = {
            id: productData.product.id,
            name: productData.product.name,
            category: productData.product.category,
            photo: productData.product.photo,
            prices: productData.product.prices,
            description1: productData.product.description1,
            description2: productData.product.description2,
          } as Product
          this.productCategory = this.product.category
          this.chosenUnit = this.product.prices[0].unit
          this.titleService.setTitle('Buy ' + this.product.name + ' online')

          this.productDbService
            .getProductByCategory(this.product.category)
            .subscribe((data) => {
              let total = 0
              for (var i = 0; i < data.products.length; i++) {
                this.products[i] = data.products[i]
                ++total
                if (total == 4) {
                  return
                }
              }
            })

          if (!this.product) {
            this.router.navigate(['/'])
          }
        })
    })
  }

  addToCart() {
    if (this.keyUp) this.quant = parseFloat(this.keyUp)
    if (this.chosenUnit && Number.isFinite(this.quant) && !(this.quant <= 0)) {
      let item: Item = new Item()
      let quant: Quantity = new Quantity()
      quant.quantity = this.quant
      quant.unit = this.chosenUnit
      item.product = this.product
      item.quantity = quant
      this.cartService.add(item)
    } else {
      this.quant = 1
      Swal({
        title: 'Bad Quantity',
        text: 'Please enter a non zero quantity value to proceed',
        type: 'warning',
        confirmButtonText: 'Ok got it!',
      })
    }
  }

  addQuant() {
    if (this.keyUp) {
      this.quant = parseFloat(this.keyUp)
      this.keyUp = ''
    }
    this.quant += 1
  }

  reduceQuant() {
    if (this.keyUp) {
      this.quant = parseFloat(this.keyUp)
      this.keyUp = ''
    }
    if (this.quant - 1 <= 0) this.quant = 0
    else this.quant -= 1
  }

  onQuantityChange(value: string) {
    this.keyUp = value
  }

  ngOnDestroy() {
    this.productSubscribe.unsubscribe()
  }
}
