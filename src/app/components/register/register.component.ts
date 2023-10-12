import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,Validators,} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });
  }
  onSubmit() {
    if(this.signupForm.valid){
      const formData = this.signupForm.value;
      console.log(formData);
    }else{
      return ; //use snack bar here 
    }
  }
}

//ngoninit or ngOnchanges compare as a useEffect with empty prameter