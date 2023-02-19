import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AngularMaterialModule } from '../../angular-material.module'
import { ProductCreateComponent } from '../product-create/product-create.component'
import { DashboardComponent } from './dashboard.component'
import { NgxSpinnerModule } from 'ngx-spinner'
import { LayoutModule } from '@progress/kendo-angular-layout'
import { InputsModule } from '@progress/kendo-angular-inputs'

@NgModule({
  declarations: [ProductCreateComponent, DashboardComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
    NgxSpinnerModule,
    LayoutModule,
    InputsModule,
  ],
})
export class PetsModule {}
