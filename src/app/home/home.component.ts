import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  allproducts:any=[];//array of data //product
 constructor(private ds:DataService, private api:ApiService) { }



 searchTerm:string='';


 ngOnInit(): void {
   this.api.getAllProducts().subscribe(

    (data:any)=>{
      this.allproducts = data.products;
      for(let i of this.allproducts){

        console.log(i);
      };
      
    
      
    }
    )

   this.api.searchKey.subscribe(
    (data:any)=>{
      this.searchTerm = data
 

    } 
   )
 
 }

 addtowishlist(product:any){
  console.log(product, "ggg     ");
  
  this.api.addtowishlist(product).subscribe(
    (result:any)=>{
      alert(result.message)
    },
    (result:any)=>{(
      alert(result.error.message)
      )
    }
  )
 }

addtocart(product:any){
  this.ds.addtocart(product)

}

}
