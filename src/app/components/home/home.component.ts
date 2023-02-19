import { Component, OnInit } from '@angular/core'
import { ProductService } from '../../services/product.service'
import { Product, PRODUCTS } from '../../models/product'
import { ScriptService } from '../../services/script.service'
import { ProductDBService } from 'src/app/services/product.db.service'
import { Subscription } from 'rxjs'
declare var $: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = new Array()
  trending: Product[] = new Array()
  private productsSubscribe: Subscription

  constructor(
    private productService: ProductService,
    private script: ScriptService,
    private productDbService: ProductDBService,
  ) {}

  ngOnInit() {
    // this.products = this.productService.findRandom(12);
    // this.trending = this.productService.findRandom(8);
    this.products = this.findRandom(6)
    this.trending = this.findRandom(2)
    // this.productDbService.getAllProducts()
    // this.productsSubscribe = this.productDbService
    //   .getProductUpdatedListener()
    //   .subscribe((productData: { products: Product[] }) => {
    //     let allProducts = productData.products
    //     // console.log(allProducts)
    //     let copied: Map<number, number> = new Map<number, number>()
    //     let total = allProducts.length
    //     let randomProducts: Product[] = []
    //     total = 8 > total ? total : 8
    //     let i = 0
    //     while (i < total) {
    //       let index = Math.floor(Math.random() * allProducts.length)
    //       if (!copied.has(index)) {
    //         randomProducts.push(allProducts[index])
    //         copied.set(index, index)
    //         i++
    //       }
    //     }
    //     console.log(this.products)
    //   })
  }

  findRandom(maxNo: number) {
    let randomProducts: Product[] = []
    this.productDbService.getAllProducts()
    this.productsSubscribe = this.productDbService
      .getProductUpdatedListener()
      .subscribe((productData: { products: Product[] }) => {
        let allProducts = productData.products
        // console.log(allProducts)
        let copied: Map<number, number> = new Map<number, number>()
        let total = allProducts.length
        total = maxNo > total ? total : maxNo
        let i = 0
        while (i < total) {
          let index = Math.floor(Math.random() * allProducts.length)
          if (!copied.has(index)) {
            randomProducts.push(allProducts[index])
            copied.set(index, index)
            i++
          }
        }
      })
    console.log(randomProducts)

    return randomProducts
  }

  ngOnDestroy() {
    this.productsSubscribe.unsubscribe()
  }
}
