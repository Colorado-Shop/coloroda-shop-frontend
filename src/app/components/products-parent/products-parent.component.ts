import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-parent',
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.css']
})
export class ProductsParentComponent implements OnInit {

  maxProducts: number = 12;
  numberPages: number = 1;
  currentPage: number = 1;
  
  constructor(private router: Router, private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let page: number = params["page"];
      this.currentPage = page;
      let allProducts = this.productService.findAll();
      this.numberPages = Math.ceil(allProducts.length / this.maxProducts)
      if (this.currentPage < 1 || this.currentPage > this.numberPages) {
        this.router.navigate(["/"]);
      }
      else {
        this.router.navigate(["./child/" + page], { relativeTo: this.route, skipLocationChange: true });
      }
    })
  }
}
