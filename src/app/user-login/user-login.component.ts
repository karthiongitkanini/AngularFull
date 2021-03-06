import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Login } from 'src/models/login.model';
import{AngularMaterialModule}from '../angular-material.module'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  login:Login;
  result:string;
  res:string;
  constructor(private loginservice :LoginService,private router:Router)//private router: Router
   {
      this.login=new Login();
      this.res="logged";
    }
// email: string;
// username:string;
// password: string;
// if(data.valueOf.toString()=="true".toString()){
//   console.log(data);
//    console.log(this.login.Email);
//    localStorage.setItem('email',this.login.Email);
//      
//  }
//  else{
//   
//  }

getUser(){
  
  this.loginservice.getUserDataFromAPI(this.login).subscribe((data:any)=>{
   this.res=data;
   
   console.log(this.res);
   console.log(data);
   if(data==true)
   {
     this.res="log"
    localStorage.setItem("value",this.res);
    
     console.log(this.res);
    this.router.navigateByUrl("/Home");
   }
   else
   {
    this.res="Notlogin"
    localStorage.setItem("value",this.res);
    this.result="*invalid email or password";
   }
   
  });
}
goToLogin(){
  this.router.navigateByUrl("/login");
}
goToRegister(){
  this.router.navigateByUrl("/register");
}
  ngOnInit() {
  }
}
