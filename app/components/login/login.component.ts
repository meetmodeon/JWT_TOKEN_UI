import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { LoginService } from '../../services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, MatInputModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    username: '',
    password: ''
  };

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log("Form is submitted");
    if ((this.credentials.username !== '' && this.credentials.password !== '') &&
        (this.credentials.username !== null && this.credentials.password !== null)) {
      // Token generate
      this.loginService.generateToken(this.credentials).subscribe({
        next: (response: any) => {
          console.log(response.token);
          this.loginService.loginUser(response.token);
          window.location.href="/dashboad";
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } else {
      console.log("Fields are empty!");
    }
  }
}
