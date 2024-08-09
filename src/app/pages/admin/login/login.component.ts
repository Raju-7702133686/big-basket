import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{8,30})')])
  })

  isSubmitted= false;
  constructor(private loginService: LoginService, private router: Router){}

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted=  true;
    this.loginService.dologin(this.loginForm.value).subscribe(
      (response) =>{
        this.router.navigateByUrl('/products');
        localStorage.setItem('token', response.token);
      },
      (error:any)=>{
        alert("login failed");
      }
    )
  }

}
