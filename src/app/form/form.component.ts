import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  data;
  myPassword = "password";
  confirmPassword = "password";

  constructor(private formBuilder: FormBuilder, private route: Router,private dataService: LoginService) { }
  showPassword() {
    if (this.myPassword == "text") {
    this.myPassword = "password";
    }
    else {
      this.myPassword = "text";
    }
  }
  showConfirmPassword() {
    if (this.confirmPassword == "text") {
    this.confirmPassword = "password";
    }
    else {
      this.confirmPassword = "text";
    }
  }


  ngOnInit() {
   // this.data = JSON.parse(localStorage.getItem("data"));
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      retypePassword: ['', [Validators.required, Validators.minLength(6)]],
      contact: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.data=JSON.parse(this.dataService.setData());
    if (this.data) {
      this.registerForm.patchValue({
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        email: this.data.email,
        contact: this.data.contact,
        password: this.data.password,
        retypePassword: this.data.retypePassword

      });
    }

  }


  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // localStorage.setItem("data", JSON.stringify(this.registerForm.value));
    this.dataService.myData(JSON.stringify(this.registerForm.value))

    this.route.navigate(["/show-details"])
  }

}







