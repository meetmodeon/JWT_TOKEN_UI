import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from '../../services/user.service';
import { error } from 'console';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
   
  }
  constructor(private userService:UserService){}
  user:any
  getUser(){

    this.userService.getUser().subscribe({
      next: (user: any) => {
        console.log(user);
        this.user=user;
        
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
