import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  data;

  constructor(private formBuilder: FormBuilder,private route:Router) { }

  ngOnInit() {
    this.data=JSON.parse(localStorage.getItem("data"));
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          retypePassword: ['', [Validators.required, Validators.minLength(6)]],
          contact: ['', [Validators.required, Validators.minLength(10)]]
      });

     if(this.data){
        this.registerForm.patchValue({
            firstName: this.data.firstName,
             lastName: this.data.lastName,
            email: this.data.email,
            contact:this.data.contact,
            password: this.data.password,
            retypePassword:this.data.retypePassword
            
          });
     }
     
       
     
     

  }


  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      this.route.navigate(["/show-details"])

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

     localStorage.setItem("data" ,JSON.stringify(this.registerForm.value));
  }

}







