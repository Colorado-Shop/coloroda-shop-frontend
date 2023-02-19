import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
declare var $: any;

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  products: Product[] = new Array();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.findRandom(6);
  }
}
