import { Component } from '@angular/core';
// import {FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, FormControl, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { UserService } from '../../service/userService/user-service.service';
// import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public userService: UserService) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
      service: "advance",
    });
  }

  onSubmit() {

    let payLoad = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      service: this.loginForm.value.service
    }

    this.userService.loginService(payLoad).subscribe((response: any) => {
      localStorage.setItem('token', response.id)
    })

    if (this.loginForm) {
      const formData = this.loginForm.value;
      console.log(formData);
    } else {
     
    }

  }
}
