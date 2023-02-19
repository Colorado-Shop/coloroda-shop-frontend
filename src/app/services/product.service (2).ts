// import { Injectable } from "@angular/core";

// import { environment } from "../../../environments/environment";

// import { BehaviorSubject, ReplaySubject, Observable } from "rxjs";

// import { User } from "../../models/user.model";

// import { distinctUntilChanged, map } from "rxjs/operators";

// import { HttpClient, HttpHeaders } from "@angular/common/http";

// import { Product } from "../../models/product.model";

// import { ProductReview } from "../../models/product-review.model";

// @Injectable()
// export class APIProductService {
//     private rootUrl = environment.API_URL;

//     getheadersNoAuth() {
//         let headerDict = {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Credentials': 'true',
//             'Access-Token': '',
//             'No-Auth': 'True',
//             'observe': 'response'
//         };
//         return headerDict;
//     }

//     getheadersWithAuth() {
//         let headerDict = {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Credentials': 'true',
//             'observe': 'response'
//         };
//         return headerDict;
//     }

//     private currentUserSubject = new BehaviorSubject<User>({} as User);
//     public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

//     private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
//     public isAuthenticated = this.isAuthenticatedSubject.asObservable();

//     constructor(private http: HttpClient) { }

//     //Product section

//     getProducts(): Observable<Product[]> {
//         let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
//         return this.http.get(this.rootUrl + '/products', reqHeaders).pipe(map((data: any) => {
//             let products: Product[] = new Array();
//             data.map(value => products.push(new Product().deserialize(value)))
//             return products
//         }))
//     }

//     getProduct(id: string): Observable<Product> {
//         let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
//         return this.http.get(this.rootUrl + '/product' + id, reqHeaders).pipe(map((data: any) => {
//             let product: Product
//             product = new Product().deserialize(data)
//             return product
//         }))
//     }

//     saveProduct(product: Product) {
//         let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
//         let body = JSON.stringify(product)
//         return this.http.post(this.rootUrl + '/product', body, reqHeaders)
//     }

//     updateProduct(product: Product) {
//         let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
//         let body = JSON.stringify(product)
//         return this.http.post(this.rootUrl + '/product/' + product.slug, body, reqHeaders)
//     }

//     deleteProduct(productId: string) {
//         let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
//         return this.http.delete(this.rootUrl + '/product/' + productId, reqHeaders)
//     }

//     // Product Reviews Section

//     getPublishedProductReviews(productId: string): Observable<ProductReview[]> {
//         let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
//         return this.http.get(this.rootUrl + '/product/' + productId + '/reviews/published', reqHeaders).pipe(map((data: any) => {
//             let reviews: ProductReview[] = new Array();
//             data.map(value => reviews.push(new ProductReview().deserialize(value)))
//             return reviews
//         }))
//     }

//     getDraftProductReviews(productId: string): Observable<ProductReview[]> {
//         let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
//         return this.http.get(this.rootUrl + '/product/' + productId + '/reviews/draft', reqHeaders).pipe(map((data: any) => {
//             let reviews: ProductReview[] = new Array();
//             data.map(value => reviews.push(new ProductReview().deserialize(value)))
//             return reviews
//         }))
//     }

//     saveReview(review: ProductReview, productId: string) {
//         let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
//         let body = JSON.stringify(review)
//         return this.http.post(this.rootUrl + '/product/' + productId + '/review', body, reqHeaders)
//     }

//     updateReview(id: string, review: ProductReview) {
//         let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
//         let body = JSON.stringify(review)
//         return this.http.post(this.rootUrl + '/product/review/' + id, body, reqHeaders)
//     }

//     deleteReview(id: string) {
//         let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
//         return this.http.delete(this.rootUrl + '/product/review/' + id, reqHeaders)
//     }

//     getReview(id: string): Observable<ProductReview> {
//         let reqHeaders = { headers: new HttpHeaders(this.getheadersWithAuth()) }
//         return this.http.get(this.rootUrl + '/product/review/' + id, reqHeaders).pipe(map((data: any) => {
//             let review: ProductReview
//             review  = new ProductReview().deserialize(data)
//             return review
//         }))
//     }
// }
