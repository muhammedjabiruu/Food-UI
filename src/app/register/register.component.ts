import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
phone='';
pswd='';
uname='';  

constructor(private fb:FormBuilder, private ds:DataService, private router:Router) { }

  //registeration model
registerForm =  this.fb.group({//group
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  phone:['',[Validators.required,Validators.pattern('[0-9]*')]],//array
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})


//control pass to ts to html file


  ngOnInit(): void {
  }

  registration(){
    console.log(this.registerForm);
    
    // alert('clicked')
    // console.log(this.registerForm.get('uname')?.errors);
    
    var uname = this.registerForm.value.uname;//username that user gives
    var phone = this.registerForm.value.phone;
    var pswd = this.registerForm.value.pswd;

    if(this.registerForm.valid){
      // console.log(this.registerForm.get('uname')?.errors);
      this.ds.registration(phone,uname,pswd)
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('')
      },
      result=>{
        alert(result.error.message)
      })      

    
}
}
}


