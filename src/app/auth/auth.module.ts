import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularMaterialModule } from "../angular-material.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({

  declarations: [
    LoginComponent,
    SignupComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    AuthRoutingModule,
    NgxSpinnerModule
  ]
})

export class AuthModule {}
