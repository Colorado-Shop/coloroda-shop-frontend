import { Component, OnInit } from '@angular/core'
import { Product } from '../../models/product'
import { ProductService } from '../../services/product.service'
import { ActivatedRoute } from '@angular/router'
import { ProductDBService } from 'src/app/services/product.db.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  products: Product[] = new Array()
  id: string

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private productDbService: ProductDBService,
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id']
      this.productDbService
        .getProductByCategory(this.id)
        .subscribe((productData) => {
          this.products = productData.products
          console.log(this.products)
        })
      // this.products = productService.findByCategory(this.id);
    })
  }

  ngOnInit() {}
}
