import { Component, OnInit,  Injectable, Inject } from '@angular/core';
import { NgForm, FormGroup, Validators, FormControl, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form!: FormGroup;

  //submit flag
  isSubmit = false;

  //email model
  email: any;
  password: any;
  constructor(
    private  router:Router
  ){}


  ngOnInit(): void {
    this.initForm();
  }

  //get control form
  get formData(){
    return this.form.controls;
  }

  //init form data
  private initForm (){
    this.form = new FormGroup({
        email: new FormControl(this.email,[Validators.required,Validators.email]),
        password: new FormControl(this.password,[Validators.required,Validators.minLength(6),Validators.maxLength(40)])
    })
  }


  onSubmitCommand = () =>{
    const response = {
      email: this.email,
      isLogin: true,
      isRole: 'admin',
      fullName: 'Thu Ha'
    }
    this.fillData();

    if(this.email === 'abc@gmail.com' && this.password === '123456789'){
      localStorage.setItem('userInfo',JSON.stringify(response));
      this.router.navigate(['/users']);
    }else{
      return alert('Login failed!');
    }
  }


  private fillData = () =>{
    this.email = this.formData.email.value;
    this.password = this.formData.password.value;
  }


  disableButton = ()=>{
    return Boolean(this.formData.email.errors || this.formData.password.errors)
  }

}
