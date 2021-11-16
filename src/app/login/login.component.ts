import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string='';
  password:string='';
  loginForm:FormGroup=new FormGroup({});

  constructor() { }
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      userName:new FormControl(),
      password:new FormControl()
    })
  }

  loginFun(){
   
      if(this.loginForm.get("userName")?.value=="admin" && this.loginForm.get("password")?.value=="admin"){
        

      }

  }

}
