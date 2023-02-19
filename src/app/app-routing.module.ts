import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { NotFoundComponent } from './not-found/not-found.component'
import { AuthGuard } from './auth/auth.guard'
import { AboutComponent } from './components/about/about.component'
import { BlogPostComponent } from './components/blog-post/blog-post.component'
import { BlogComponent } from './components/blog/blog.component'
import { CartComponent } from './components/cart/cart.component'
import { CategoryParentComponent } from './components/category-parent/category-parent.component'
import { CategoryComponent } from './components/category/category.component'
import { CheckOutComponent } from './components/check-out/check-out.component'
import { ContactComponent } from './components/contact/contact.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HomeComponent } from './components/home/home.component'
import { ProductCreateComponent } from './components/product-create/product-create.component'
import { ProductParentComponent } from './components/product-parent/product-parent.component'
import { ProductComponent } from './components/product/product.component'
import { ProductsParentComponent } from './components/products-parent/products-parent.component'
import { ProductsComponent } from './components/products/products.component'
import { ReviewsComponent } from './components/reviews/reviews.component'
import { SearchParentComponent } from './components/search-parent/search-parent.component'
import { SearchComponent } from './components/search/search.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Welcome to Colorado Exotics Shop' },
  },
  {
    path: 'products/page/:page',
    component: ProductsComponent,
    data: { title: 'Products' },
  },
  // {
  //   path: 'products/page/:page',
  //   component: ProductsParentComponent,
  //   data: { title: 'Products' },
  //   children: [{ path: 'child/:page', component: ProductsComponent }],
  // },
  { path: 'products', redirectTo: 'products/page/1' },
  { path: 'cart', component: CartComponent, data: { title: 'Cart' } },
  {
    path: 'checkout',
    component: CheckOutComponent,
    data: { title: 'Checkout' },
  },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
  {
    path: 'blog/articles/page/:page',
    component: BlogComponent,
    data: { title: 'Blog' },
  },
  { path: 'blog', redirectTo: 'blog/articles/page/1' },
  { path: 'blog/articles/:id', component: BlogPostComponent },
  {
    path: 'testimonials',
    component: ReviewsComponent,
    data: { title: 'Testimonials' },
  },
  {
    path: 'product/:id',
    component: ProductParentComponent,
    children: [{ path: 'child/:id', component: ProductComponent }],
  },
  {
    path: 'category/:id',
    component: CategoryParentComponent,
    data: { title: 'Category' },
    children: [{ path: 'child/:id', component: CategoryComponent }],
  },
  {
    path: 'search/:id',
    component: SearchParentComponent,
    data: { title: 'Search' },
    children: [{ path: 'child/:id', component: SearchComponent }],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/new-product',
    component: ProductCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/edit-product/:productId',
    component: ProductCreateComponent,
    canActivate: [AuthGuard],
  },
  // You might want to include "module": "es2020", in your "tsconfig.json" file to allow dynamic import in the path below
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
