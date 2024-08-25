import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbarModule,RouterModule,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{

  public loggedIn=false;

  constructor(private loginService:LoginService){}

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn();

  
  }
  logoutUser(){
   this.loginService.logout();
  }
 


}
