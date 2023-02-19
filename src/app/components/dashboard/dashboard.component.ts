import { Component, OnInit } from '@angular/core'
import { WindowService } from '@ng-toolkit/universal/ngt-universal/window.service'
// import { PageEvent } from '@angular/material';
import { title } from 'process'
import { Subscription } from 'rxjs'
import Swal from 'sweetalert2'

import { AuthService } from '../../auth/auth.service'
import { Product, PRODUCTS } from '../../models/product'
import { ProductDBService } from '../../services/product.db.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  products: Product[] = []
  private productsSubscribe: Subscription
  private authStatusSubscribe: Subscription
  userId: string
  userIsAuthenticated = false
  isLoading = false
  totalPosts = 0
  postsPerPage = 2
  currentPage = 1
  pageSizeOptions = [1, 2, 5, 10]

  constructor(
    private productdbService: ProductDBService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0)
    // this.petz.forEach((pet) => {
    //   this.productdbService.AddPet(
    //     pet.name,
    //     pet.gender,
    //     pet.age,
    //     pet.WandH,
    //     pet.size,
    //     pet.vaccinated,
    //     pet.breed,
    //     pet.description,
    //     pet.image,
    //     pet.price,
    //     pet.taken as boolean,
    //     pet.reserve_fee,
    //     pet.reserved as boolean,
    //     pet.petCategory,
    //   )
    // })
    this.isLoading = true
    this.productdbService.getAllProducts()
    this.userId = this.authService.getUserId()
    this.productsSubscribe = this.productdbService
      .getProductUpdatedListener()
      .subscribe((productData: { products: Product[] }) => {
        this.isLoading = false
        this.products = productData.products

        // console.log(this.products)
      })
    this.userIsAuthenticated = this.authService.getAuthStatus()
    this.authStatusSubscribe = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated
        this.userId = this.authService.getUserId()
      })
  }

  onDelete(product: Product) {
    Swal({
      title: 'Delete?',
      text: 'Are you sure you want to remove ' + product.name + ' ?',
      animation: false,
      confirmButtonColor: '#8fc424',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.productdbService.deleteProduct(product.id).subscribe(
          () => {
            Swal({
              title: 'Deleted!🤙',
              text: product.name + ' has been removed!',
              type: 'success',
              confirmButtonText: 'Ok',
              confirmButtonColor: '#8fc424',
            })
            this.productdbService.getAllProducts()
          },
          //To handle error in case delete failed loader should stop loading
          () => {
            Swal({
              title: 'Sorry!',
              text: "Somthing went wrong! Your pet can't be removed!",
              type: 'error',
              confirmButtonText: 'Ok',
              confirmButtonColor: '#8fc424',
            })
            // this.isLoading = false;
          },
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
    // this.isLoading = true
  }

  // onChangedPage(page: PageEvent) {
  //   this.currentPage = page.pageIndex + 1;
  //   this.postsPerPage = page.pageSize;
  //   this.productdbService.getPets(this.postsPerPage, 1);
  // }

  ngOnDestroy() {
    this.productsSubscribe.unsubscribe()
    this.authStatusSubscribe.unsubscribe()
  }

  printPrice(price: number) {
    var price_parts = price.toString().split('.')
    price_parts[0] = price_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return price_parts.join('.')
  }
}
