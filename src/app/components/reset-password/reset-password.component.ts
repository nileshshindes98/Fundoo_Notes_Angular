import { Component } from '@angular/core';
import { UserService } from '../../service/userService/user-service.service';
import {AbstractControl, ValidationErrors,FormControl,FormBuilder,FormGroup,Validators,} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public userService: UserService) {} 
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
      service: "advance",
    });
  }

  onSubmit() {

let payLoad ={
  email :this.loginForm.value.email,
  password :this.loginForm.value.password,
  service: this.loginForm.value.service
}

this.userService.loginService(payLoad).subscribe((response :any)=>{
  localStorage.setItem('token',response.id)
})

    if(this.loginForm){
      const formData = this.loginForm.value;
      console.log(formData);
    }


  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
}

}
