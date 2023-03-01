import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  constructor(private http:HttpClient) { }
  
  searchKey = new BehaviorSubject('');

  getAllProducts () {
    return this.http.get('http://localhost:3000/all-products')
    // json data
  }

  addtowishlist(product:any){ 
    const data = {
      
      title:product.item, 
      price:product.price,
      image:product.image,
      description:product.description      ,
    }

    return this.http.post('http://localhost:3000/addtowishlist', data)

  }

  getwishlist(){
    return this.http.get('http://localhost:3000/getwishlist')

  }

  deletewish(id:any){
    return this.http.delete('http://localhost:3000/deletewish/' +id)
  }


}
