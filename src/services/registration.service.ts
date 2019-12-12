import{HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';

import { Registration } from 'src/models/registration.model';

@Injectable()
export class RegistrationService{
    reg:any;
    result:string;
    constructor(private myHttp:HttpClient){
        this.reg=[];
        
    }
 //  addUser(register:Registration){

//      this.result="already existing";
//      this.myHttp.post("https://localhost:44367/api/Register",register)
       
//     .subscribe(res=>{
//         console.log(res);
//     })

//  }

 
 addUser(reg:Registration):Boolean{

    this.result="already existing";
    this.myHttp.post("https://localhost:44381/api/Registration",reg).subscribe(res=>{
       console.log(res);
   })
   return true;

}

}