import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  userCredentials:any[];

  constructor(private Route:Router) { }

  ngOnInit(): void {
  }

  directToMain(){
    if(this.username=="a" && this.password=="a"){
    this.Route.navigate(['main']);
    }
    else{
      alert("Invalid Username or Password");
      window.location.reload();
    }
  }

}
