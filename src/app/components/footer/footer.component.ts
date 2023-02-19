import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  products: Product[] = new Array();
  constructor(private productService: ProductService) {
    this.products = this.productService.findRandom(2);
   }

  ngOnInit() {
  }

}
