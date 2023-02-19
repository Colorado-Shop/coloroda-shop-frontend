import { Component, OnInit, AfterViewInit } from '@angular/core'
import {
  Router,
  NavigationStart,
  NavigationEnd,
  RouterEvent,
  ActivatedRoute,
} from '@angular/router'
import { filter, map, mergeMap } from 'rxjs/operators'
import { Title } from '@angular/platform-browser'
import { ScriptService } from './services/script.service'
import { ProductDBService } from './services/product.db.service'
import { PRODUCTS } from './models/product'
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  total = 0
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private script: ScriptService,
    private titleService: Title,
    private productDbService: ProductDBService,
  ) {}

  ngAfterViewInit(): void {
    this.script
      .load('main', 'owl')
      .then((data) => {
        console.log('script loaded ', data)
      })
      .catch((error) => console.log(error))
  }

  ngOnInit() {
    // PRODUCTS.forEach((product) => {
    //   this.productDbService.AddAProduct(
    //     product.name,
    //     product.category,
    //     product.photo,
    //     product.prices,
    //     product.description1,
    //     product.description2,
    //   )
    // })

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild
          }

          return route
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data),
      )
      .subscribe((event) => {
        this.titleService.setTitle(event['title'])
      })
  }
}
