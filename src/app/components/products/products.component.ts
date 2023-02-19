import { Component, OnInit } from '@angular/core'
import { Product } from '../../models/product'
import { ProductService } from '../../services/product.service'
import { ActivatedRoute, Router } from '@angular/router'
import { all } from 'q'
import { ProductDBService } from 'src/app/services/product.db.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  private productsSubscribe: Subscription
  products: Product[] = new Array()
  maxProducts: number = 12
  numberPages: number = 1
  currentPage: number = 1

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private productdbService: ProductDBService,
  ) {}

  ngOnInit() {
    this.productdbService.getAllProducts()
    this.productsSubscribe = this.productdbService
      .getProductUpdatedListener()
      .subscribe((productData: { products: Product[] }) => {
        this.products = productData.products
      })

    this.route.params.subscribe((params) => {
      let page: number = params['page']
      this.currentPage = page
      // let allProducts = this.productService.findAll();
      this.numberPages = Math.ceil(this.products.length / this.maxProducts)
      // if (this.currentPage <= 0 || this.currentPage > this.numberPages) {
      //   this.router.navigate(['/'])
      // }
      this.products = this.productService.slice(
        (this.currentPage - 1) * this.maxProducts,
        this.currentPage * this.maxProducts,
      )
    })
  }

  getPagesArray() {
    let pages = this.numberPages
    return Array(pages)
      .fill(1)
      .map((x, i) => i + 1)
  }

  ngOnDestroy() {
    this.productsSubscribe.unsubscribe()
  }
}
