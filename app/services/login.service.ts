import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8080"
  generateToken(credentials:any){
    //token generate
    return this.http.post(`${this.url}/authenticate`,credentials);
  }





  //for login user
  loginUser(token: string){
    localStorage.setItem("token",token);
    return true;
  }
  //for checked login the user or not
  isLoggedIn(){
    let token=localStorage.getItem("token")
    if(token==undefined || token===''||token==null){
      return false;
    }else{
      return true;
    }

  }
  //for logout the user
  logout(){
    localStorage.removeItem('token');
    return true;
  }
  //for getting the token
  getToken(){
    return localStorage.getItem("token");
  }
}
