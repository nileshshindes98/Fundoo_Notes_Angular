import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../../service/userService/user-service.service';




function passwordMatchValidator(control: FormGroup) {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordMismatch: true });
  } else {
    confirmPassword!.setErrors(null);
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  checkbox = false;
  imageSrc: string = '../../../assets/signUP.png';

  signupForm!: FormGroup; //  ! why

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {} //private http: HttpClient, private router: Router

  ngOnInit() {
    this.signupForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        service: 'advance'
      },
      { validator: passwordMatchValidator }
    );
  }
  onSubmit() {
    let payload = {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      confirmPassword : this.signupForm.value.confirmPassword,
      service: this.signupForm.get('service').value,
    };
    this.userService.signupService(payload).subscribe((response: any) => {
      console.log('response', response);
    });

    if (this.signupForm.valid) {
      const formData = this.signupForm.value;

      console.log(formData);
    } else {
      return;
      // this._snackBar.open('Failed to Create account')

      // return ; //use snack bar here
    }
  }
}

//ngoninit or ngOnchanges compare as a useEffect with empty prameter
