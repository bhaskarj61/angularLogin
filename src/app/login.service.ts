import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data;
  constructor() { }
  myData(data:string){ 
    this.data=data;
    console.log(data);
     }
    setData(){
      return this.data;
    }

}
