import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { ProductDBService } from 'src/app/services/product.db.service'
import { Product } from '../../models/product'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.css'],
})
export class ProductParentComponent implements OnInit {
  product: Product = new Product()
  private productSubscribe: Subscription

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private productDbService: ProductDBService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id: string = params['id']
      this.productDbService.getAProduct(id)
      this.productSubscribe = this.productDbService
        .getAProductUpdateListener()
        .subscribe((productData) => {
          this.product = {
            id: productData.product.id,
            name: productData.product.name,
            category: productData.product.category,
            photo: productData.product.photo,
            prices: productData.product.prices,
            description1: productData.product.description1,
            description2: productData.product.description2,
          } as Product
        })
      // this.product = this.productService.find(id)
      if (!this.product) {
        this.router.navigate(['/'])
      } else {
        this.router.navigate(['./child/' + id], {
          relativeTo: this.route,
          skipLocationChange: true,
        })
      }
    })
  }

  ngOnDestroy() {
    this.productSubscribe.unsubscribe()
  }
}
