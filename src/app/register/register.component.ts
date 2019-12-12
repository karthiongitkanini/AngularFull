
import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/models/registration.model';
import { RegistrationService } from 'src/services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  reg:Registration;
  result:string;
  // summa:string;

  minDate = new Date(1960,0,1);
  maxDate = new Date(2003, 11, 31);
  
  Gender: any = ['Male','Female','Other'];
  
  constructor( private registrationservice:RegistrationService,private router:Router)
   {
    this.reg=new Registration();
    }


 
    createUser(){
      // this.registerservice.addUser(this.register);
      // this.result="added";
     console.log(this.reg);
      if(this.registrationservice.addUser(this.reg)) 
          this.result="added";
          console.log(this.result);
  
    }
    // fun(event:any)
    // {
    //   debugger
    //     this.summa=event.target.value;
    //     console.log(this.summa);
    // }
    goToLogin(){
      this.router.navigateByUrl("/login");
    }
    goToRegister(){
      this.router.navigateByUrl("/register");
    }
    
  ngOnInit() {
  }

}

