import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { AuthService } from '../../auth/auth.service'
import { Product } from '../../models/product'
import { ProductDBService } from '../../services/product.db.service'
import { mimeType } from './mime-type.validator'
import { NgxSpinnerService } from 'ngx-spinner'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit, OnDestroy {
  form: FormGroup
  i = 0
  imagePreview: string
  product: Product
  isLoading = false
  mode = 'create'
  isAuthenticated = false
  private productId: string
  private authStatusSub: Subscription

  constructor(
    public productsdbService: ProductDBService,
    public route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private title: Title,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0)
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((authStatus) => {
        this.spinner.hide()
      })
    this.form = this.fb.group({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      category: new FormControl(null, { validators: [Validators.required] }),
      description1: new FormControl(null, {
        validators: [Validators.required],
      }),
      description2: new FormControl(null, {
        validators: [Validators.required],
      }),
      photo: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
      prices: this.fb.array([]),
    })
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('productId')) {
        this.mode = 'edit'
        this.productId = paramMap.get('productId')
        this.spinner.show()
        this.productsdbService
          .getAProduct(this.productId)
          .subscribe((productData) => {
            console.log(productData)
            this.spinner.hide()

            this.product = {
              id: productData.product._id,
              name: productData.product.name,
              category: productData.product.category,
              photo: productData.product.photo,
              prices: productData.product.prices,
              description1: productData.product.description1,
              description2: productData.product.description2,
            } as Product
            console.log(this.product)

            this.title.setTitle('Update | ' + this.product.name)
            for (let i = 0; i < this.product.prices.length; i++) {
              ;(this.form.get('prices') as FormArray).push(
                this.fb.group({
                  ['unit']: this.product.prices[i].unit,
                  ['amount']: this.product.prices[i].amount,
                }),
              )
            }
            this.imagePreview = this.product.photo
            this.form.setValue({
              name: this.product.name,
              category: this.product.category,
              photo: this.product.photo,
              description1: this.product.description1,
              description2: this.product.description2,
              prices: this.product.prices,
            })
          })
      } else {
        this.mode = 'create'
        this.productId = null
        this.title.setTitle('New | product')
      }
    })
  }

  addPriceBlock() {
    let priceBlock = this.form.get('prices') as FormArray
    priceBlock.push(this.fb.group({ ['unit']: '', ['amount']: '' }))
    this.i++
  }

  deletePriceBlock(i) {
    let priceBlock = this.form.get('prices') as FormArray
    priceBlock.removeAt(i)
  }

  onSaveproduct() {
    if (this.form.invalid) {
      return
    }
    console.log(this.form.value)
    this.spinner.show()
    if (this.mode === 'create') {
      this.productsdbService.AddAProduct(
        this.form.value.name,
        this.form.value.category,
        this.form.value.photo,
        this.form.value.prices,
        this.form.value.description1,
        this.form.value.description2,
      )
      // this.form.reset();
    } else {
      this.productsdbService.updateProductInside(
        this.productId,
        this.form.value.name,
        this.form.value.category,
        this.form.value.photo,
        this.form.value.prices,
        this.form.value.description1,
        this.form.value.description2,
      )
    }
    this.spinner.hide()
  }

  onImagePicked(event: any) {
    const file = (event.target as HTMLInputElement).files[0]
    this.form.patchValue({ photo: file })
    this.form.get('photo').updateValueAndValidity()
    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }
    reader.readAsDataURL(file)
  }

  cancel() {
    this.mode == 'create'
      ? this.router.navigate(['../'], { relativeTo: this.route })
      : this.router.navigate(['../../'], { relativeTo: this.route })
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe()
  }
}
