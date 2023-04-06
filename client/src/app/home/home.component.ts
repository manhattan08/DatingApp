import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  users:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }
  registerToggle(){
    this.registerMode = !this.registerMode;
  }
  getUser(){
    this.http.get("http://localhost:5000/api/users").subscribe({
      next:(res)=> this.users = res,
      error: (err) => console.log(err),
      complete: () => console.log("request has completed")
    })
  }

  cancelRegisterMode(event:boolean){
    this.registerMode = event;
  }

}
