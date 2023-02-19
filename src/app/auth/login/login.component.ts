import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  isLoading = false;
  button = "Login";
  hide = true;
  private authStatusSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
      // this.isLoading = false;
      this.spinner.hide();
    });
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // this.isLoading = true;
    this.spinner.show();
    this.authService.login(form.value.email, form.value.password);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

  // loader() {
  //   this.isLoading ? this.spinner.show() : this.spinner.hide()
  // }
}
