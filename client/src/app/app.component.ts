import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void{
    this.http.get("http://localhost:5001/users").subscribe({
      next:(res)=> this.users = res,
      error: (err) => console.log(err),
      complete: () => console.log("request has completed")
    })
  }
}
