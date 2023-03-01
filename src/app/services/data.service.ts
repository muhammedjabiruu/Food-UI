import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  currentUser = "";
  currentphno = "";
  cartarray:any = [];//array
  cartlist= new BehaviorSubject([]);//list
 

  
  constructor(private http:HttpClient) {
    
   }


//register service
registration(phone:any,username:any,password:any){

  const data={
    phone,
    password,
    username,
  }
  return this.http.post('http://localhost:3000/registration', data)


}


//login service
login(phone:any, pswd:any){
  
  const data={
    phone,
    pswd,
  }
  return this.http.post('http://localhost:3000/login', data)
/////////////////////////////////////////
}


getallproducts(){
return this.http.get('http://localhost:3000/all-products')
//json data
}


addtocart(product:any){
  this.cartarray.push(product)
  this.cartlist.next(this.cartarray)//stream of data
  console.log(this.cartlist);
  // let total = this.gettotal();
  // console.log(total);
  
}



// searchkey=new BehaviorSubject('')

//add to wishlist
  // addtowishlist(product:any){
  //   const body={
  //     id:product.id,
  //     title:product.title,
  //     price:product.price,
  //     image:product.image,
  //     description:product.description
  //   } 
  //   return this.http.post('http://localhost:3000/addtowishlist',body)
  // }





//get wishlist product
//   getwishlist(){
//     return this.http.get('http://localhost:3000/getwishlist')
//     //json data
//   }
}
