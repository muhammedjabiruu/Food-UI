import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {//(3rd Execute)
  //class -collection of properties and functions
  //properties/variables

aim="Your Perfect Banking Partner"

account = "Enter your account here"
phone=''
pswd=''


// loginform
loginForm =  this.fb.group({//group
  phone:['',[Validators.required,Validators.pattern('[0-9]*')]],//array
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})


  //functions/methods -user defined functions  //(4th Execute)
  //dependancy injection
  constructor(private fb:FormBuilder, private ds:DataService, private router:Router) {//(1st Execute)
    //It automatically invoks when the object is created 
    //object initialization
   }

 


  ngOnInit(): void {//(2nd Execute)
    //Its a life cycle hooks of angular
    //when the component is created at same time it will initialize or authorize 
  }

  login(){
   
    var phone=this.loginForm.value.phone
    var pswd=this.loginForm.value.pswd
    // var userDetailes=this.ds.userDetailes

    if(this.loginForm.valid){
    this.ds.login(phone,pswd)//function call - program control goes to the function and execute the function
      .subscribe((result:any)=>{
        localStorage.setItem('currentUser', JSON.stringify(result.currentUser))
        localStorage.setItem('currentphone', JSON.stringify(result.currentphone))
        localStorage.setItem('token', JSON.stringify(result.token))
        alert(result.message);
        this.router.navigateByUrl('home')

      },
      result=>{
        alert(result.error.message)

      }
      )
    
  

}
}
}




















