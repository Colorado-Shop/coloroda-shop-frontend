import { Component, OnInit } from '@angular/core'
import { Product } from '../../models/product'
import { ProductService } from '../../services/product.service'
import { ActivatedRoute } from '@angular/router'
import { ProductDBService } from 'src/app/services/product.db.service'
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  products: Product[] = new Array()
  id: string
  private pathToAssets: string = '../../assets/'
  private productsSubscribe: Subscription

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private productdbService: ProductDBService,
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id']
      // this.products = productService.search(this.id)
    })
  }

  ngOnInit() {
    this.productdbService.getAllProducts()
    this.productsSubscribe = this.productdbService
      .getProductUpdatedListener()
      .subscribe((productData: { products: Product[] }) => {
        // let tempProducts = productData.products
        let splits = this.id.split('+')
        for (var i = 0; i < productData.products.length; i++) {
          for (var j = 0; j < splits.length; j++) {
            if (
              productData.products[i].name
                .toLowerCase()
                .includes(splits[j].toLowerCase()) ||
              productData.products[i].category
                .toLowerCase()
                .includes(splits[j].toLowerCase())
            ) {
              this.products.push(productData.products[i])
              // break out of loop as soon as we get the first match
              break
            }
          }
        }
      })
  }

  ngOnDestroy() {
    this.productsSubscribe.unsubscribe()
  }
}
