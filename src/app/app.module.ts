import { NgtUniversalModule } from '@ng-toolkit/universal'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { NotFoundComponent } from './not-found/not-found.component'
import { AboutComponent } from './components/about/about.component'
import { BlogPostComponent } from './components/blog-post/blog-post.component'
import { BlogComponent } from './components/blog/blog.component'
import { CartComponent } from './components/cart/cart.component'
import { CategoryParentComponent } from './components/category-parent/category-parent.component'
import { CategoryComponent } from './components/category/category.component'
import { CheckOutComponent } from './components/check-out/check-out.component'
import { ContactComponent } from './components/contact/contact.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ErrorComponent } from './components/errors/error/error.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { HomeComponent } from './components/home/home.component'
import { ProductCreateComponent } from './components/product-create/product-create.component'
import { ProductParentComponent } from './components/product-parent/product-parent.component'
import { ProductComponent } from './components/product/product.component'
import { ProductsParentComponent } from './components/products-parent/products-parent.component'
import { ProductsComponent } from './components/products/products.component'
import { ReviewsComponent } from './components/reviews/reviews.component'
import { SearchParentComponent } from './components/search-parent/search-parent.component'
import { SearchComponent } from './components/search/search.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthInterceptor } from './auth/auth-interceptor'
import { ErrorInterceptor } from './components/errors/error-interceptor'
import { ApiService } from './services/api.service'
import { CartService } from './services/cart.service'
import { APIPostService } from './services/post.service'
import { ProductService } from './services/product.service'
import { ScriptService } from './services/script.service'
import { SEOService } from './services/seo.service'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatDialogModule } from '@angular/material'
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner'
import { TransferHttpModule, TransferHttpService } from '@gorniv/ngx-universal'
import { TransferHttpCacheModule } from '@nguniversal/common'
import { PetsModule } from './components/dashboard/pets.module'

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    CartComponent,
    CategoryComponent,
    CategoryParentComponent,
    CheckOutComponent,
    ContactComponent,
    AboutComponent,
    ReviewsComponent,
    SearchComponent,
    ProductParentComponent,
    SearchParentComponent,
    ProductsParentComponent,
    BlogComponent,
    BlogPostComponent,
    ErrorComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    NgtUniversalModule,
    AppRoutingModule,

    BrowserModule.withServerTransition({ appId: 'app-root' }),
    CommonModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    TransferHttpModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    MatDialogModule,
    MatDialogModule,
    FlexLayoutModule,
    NgxSpinnerModule,

    HttpClientModule,
    PetsModule,
  ],
  providers: [
    ProductService,
    CartService,
    ApiService,
    ScriptService,
    SEOService,
    APIPostService,
    TransferHttpService,
    NgxSpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class AppModule {}
