import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Subject, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router'
import Swal from 'sweetalert2'

import { environment } from '../../environments/environment'
import { Product } from '../models/product'

const BACKEND_URL = environment.db_api_url + '/products/'

@Injectable({
  providedIn: 'root',
})
export class ProductDBService {
  private products: Product[] = []
  private product: Product = new Product()
  private productsUpdated = new Subject<{ products: Product[] }>()
  private productUpdated = new Subject<{ product: Product }>()
  private productsSubscribe: Subscription

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  getAllProducts() {
    this.http
      .get<{ products: any; count: number }>(BACKEND_URL)
      .pipe(
        map((productData) => {
          return {
            products: productData.products.map((product) => {
              return {
                id: product._id,
                name: product.name,
                category: product.category,
                photo: product.photo,
                prices: product.prices,
                description1: product.description1,
                description2: product.description2,
              }
            }),
          }
        }),
      )
      .subscribe((transformedProduct) => {
        this.products = transformedProduct.products
        this.productsUpdated.next({ products: [...this.products] })
      })
  }

  getProductByCategory(productCategory: string) {
    return this.http.get<{
      products: any
    }>(BACKEND_URL + 'category/' + productCategory.toLowerCase())
  }

  findRandom(maxNo: number) {
    this.getAllProducts()
    this.productsSubscribe = this.getProductUpdatedListener().subscribe(
      (productData: { products: Product[] }) => {
        this.products = productData.products
        console.log(this.products)
      },
    )
    let copied: Map<number, number> = new Map<number, number>()
    let total = this.products.length
    let randomProducts: Product[] = []
    total = maxNo > total ? total : maxNo
    let i = 0
    while (i < total) {
      let index = Math.floor(Math.random() * this.products.length)
      if (!copied.has(index)) {
        randomProducts.push(this.products[index])
        copied.set(index, index)
        i++
      } else {
        //Just for documentation sake not really needed
        continue
      }
    }
    console.log(randomProducts)
    return randomProducts
  }

  findRandomAndExclude(maxNo: number, excludedId: string): Product[] {
    this.getAllProducts()
    this.getProductUpdatedListener().subscribe(
      (productData: { products: Product[] }) => {
        this.products = productData.products
      },
    )
    let total: number
    let copied: Map<number, number> = new Map<number, number>()
    let someProducts = []
    this.products.forEach((p: Product) => {
      someProducts.push(p)
    })
    //Remove product with provided id from products
    for (var j = 0; j < someProducts.length; j++) {
      if (excludedId === someProducts[j].id) {
        someProducts.splice(j, 1)
        break
      }
    }
    total = someProducts.length
    let randomProducts: Product[] = []
    total = maxNo > total ? total : maxNo
    let i = 0
    while (i < total) {
      let index = Math.floor(Math.random() * someProducts.length)
      if (!copied.has(index)) {
        randomProducts.push(someProducts[index])
        copied.set(index, index)
        i++
      } else {
        //Just for documentation sake not really needed
        continue
      }
    }
    return randomProducts
  }

  getProductUpdatedListener() {
    return this.productsUpdated.asObservable()
  }

  getAProductUpdateListener() {
    return this.productUpdated.asObservable()
  }

  getAProduct(productId: string) {
    return this.http.get<{
      product: any
    }>(BACKEND_URL + productId)
  }

  // getAProduct(productId: string) {
  //   return this.http.get<{
  //     _id: string
  //     name: string
  //     category: string
  //     photo: string
  //     prices: { unit: string; amount: number }[]
  //     description1: string
  //     description2: string
  //   }>(BACKEND_URL + productId)
  // }

  AddAProduct(
    name: string,
    category: string,
    photo: File | string,
    prices: { unit: string; amount: number }[],
    description1: string,
    description2: string,
  ) {
    let productData: Product | FormData
    //if image is passed as a file uploaded
    if (typeof photo === 'object') {
      productData = new FormData()
      productData.append('name', name)
      productData.append('category', category)
      productData.append('photo', photo, name)
      productData.append('prices', JSON.stringify(prices))
      productData.append('description1', description1)
      productData.append('description2', description2)

      console.log(productData)
    } else {
      productData = {
        name: name,
        category: category,
        photo: photo,
        prices: prices,
        description1: description1,
        description2: description2,
      } as Product
    }
    this.http
      .post<{ product: Product; message: string }>(BACKEND_URL, productData)
      .subscribe((responseData) => {
        Swal({
          title: 'Great!🤙',
          text: name + ' was added successfully! ' + ' Go to dashboard ?',
          type: 'success',
          confirmButtonColor: '#28a745',
          showCancelButton: true,
          confirmButtonText: 'To Dashboard',
          cancelButtonText: 'Keep Adding',
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['../../dashboard'], {
              relativeTo: this.route,
            })
          } else if (result.dismiss === Swal.DismissReason.cancel) {
          }
        })
        // this.router.navigate(["../"], {relativeTo: this.route});
      })
  }

  updateProductInside(
    id: string,
    name: string,
    category: string,
    photo: File | string,
    prices: { unit: string; amount: number }[],
    description1: string,
    description2: string,
  ) {
    let productData: Product | FormData
    //if image is passed as a file uploaded
    if (typeof photo === 'object') {
      productData = new FormData()
      productData.append('name', name)
      productData.append('category', category)
      productData.append('photo', photo, name)
      productData.append('prices', JSON.stringify(prices))
      productData.append('description1', description1)
      productData.append('description2', description2)

      console.log(productData)
    } else {
      productData = {
        id: id,
        name: name,
        category: category,
        photo: photo,
        prices: prices,
        description1: description1,
        description2: description2,
      } as Product
    }
    // console.log('Product to send: ', productData)
    this.http.patch(BACKEND_URL + id, productData).subscribe((response) => {
      Swal({
        title: 'Pet Updated!🤙',
        text: name + ' was modified successfully! ' + ' Go to dashboard ?',
        type: 'success',
        confirmButtonColor: '#28a745',
        showCancelButton: true,
        confirmButtonText: 'To Dashboard',
        cancelButtonText: 'Keep Modifying',
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['../../dashboard'], {
            relativeTo: this.route,
          })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        }
      })
      // this.router.navigate(["../"], {relativeTo: this.route});
    })
  }

  updateProduct(product) {
    let productData: Product | FormData
    //if image is passed as a file uploaded
    if (typeof product.photo === 'object') {
      productData = new FormData()
      productData.append('name', product.name)
      productData.append('category', product.category)
      productData.append('photo', product.photo, product.name)
      productData.append('prices', product.prices)
      productData.append('description1', product.description1)
      productData.append('description2', product.description2)
    } else {
      productData = {
        id: product.id,
        name: product.name,
        category: product.category,
        photo: product.photo,
        prices: product.prices,
        description1: product.description1,
        description2: product.description2,
      } as Product
    }
    return this.http.patch(BACKEND_URL + product.id, productData)
  }

  deleteProduct(productId: string) {
    return this.http.delete(BACKEND_URL + productId)
  }
}
