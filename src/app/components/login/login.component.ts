import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../../service/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  loginForm: FormGroup = this.getLoginForm();

  constructor(
    private formBuilder: FormBuilder,
    public userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  getLoginForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      service: 'advance',
    });
  }

  onSubmit() {
    this.userService.loginService(this.loginForm.value).subscribe((response: any) => {
      if (response?.id) {
        localStorage.setItem('token', response.id);
        this.router.navigate(['/dashboard']);
      } else {
        this._snackBar.open('Failed to login. Please try again.', 'close', {duration: 1500});
      }
    }, (error: any) => {
      this._snackBar.open('Failed to login. Please try again.', 'close', {duration: 1500});
    });
  }

}
