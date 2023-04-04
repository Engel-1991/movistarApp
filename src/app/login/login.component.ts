import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  token = "";
  value = 'Borrar';
  showSection = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private router: Router) {}
  
  ngOnInit() {}

  submitToken() {
    localStorage.setItem('token', this.token);
    this.router.navigate(['home']);
  }
}









