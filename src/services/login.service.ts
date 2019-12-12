import{HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';

import { Login } from 'src/models/login.model';


@Injectable()
export class LoginService{


    login:any;
    constructor(private myHttp:HttpClient){
        this.login=[];

    }
    verifyEmail(value)
    {
      return this.myHttp.get("https://localhost:44381/api/Login/"+"?"+"umail="+value);
    }

    getUserDataFromAPI(login:Login){
        return this.myHttp.get("https://localhost:44381//api/Login?email="+login.Email+"&upass="+login.Password);
    }
    // getUserData(login):Login[]{
    //     this.getUserDataFromAPI(login).subscribe((data)=>
    //     {
    //         console.log(data);
    //     this.login=data;
    // });
    // console.log(this.login)
    // return this.login;
    // }
}