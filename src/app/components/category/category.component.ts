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

    enum mapDescription {
      strain = `Each cannabis strain has a different concentration of the cannabinoids tetrahydrocannabinol (THC), cannabidiol (CBD), as well as other compounds. Cultivators and farmers have long been breeding different varieties with certain characteristics to create hybrids and specific strains.`,
      concentrate = `Cannabis concentrate, also called marijuana concentrate, marijuana extract, or cannabis extract, is a tetrahydrocannabinol (THC) and/or cannabidiol (CBD) concentrated mass. Cannabis concentrates contain high THC levels that range from 40% to over 90%,[1][2] stronger in THC content than high-grade marijuana, which normally measures around 20% THC levels.`,
      seed = `Our comprehensive selection of feminized cannabis seeds has been expertly bred to produce only female cannabis plants. Female cannabis plants are guaranteed to provide cannabinoid-rich flowers for growers to harvest.`,
      vape_pen = `
      Vape Pens are extremely popular mainly due to their subtle, slim and discreet design. A perfect stepping stone between disposable vapes and advanced kits, vape pens provide the user with a hassle-free, accessible setup that can utilise a wide range of vape liquids. Powered by a rechargeable built-in battery, vape pens are activated with a press to the fire button which in turn heats the coil element and creates the vapour that is inhaled. 
      `,
      muha_meds = `
      Our extraction team is dedicated to crafting premium THC oil. Made with cannabis derived terpenes to offer a balanced aroma and taste to deliver a consistent experience every time. \n
      Get long-lasting hours while vaping. Our vape pens have rechargeable batteries with great battery life. We also make replacing the batteries easy and you have muhameds batteries for sale at the most affordable prices
      `,
      rove = `
      Rove built the foundation of their company on honesty, simplicity, and transparency. Their mission is to provide customers with great tasting vape cartridges and reliable and dependable vape pens. Rove proudly stands opposed to the trend of exaggerated quality and misinformation within product test results. Rove wants their customers to know they have their best interests in mind with every single step they take. They strive for excellence and are dedicated to improvement.
      Welcome to Rove, where the best is always getting better.
      `
    }
  }

  ngOnInit() {}
}
