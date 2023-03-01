import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ApiService, private cart:DataService) { }

  cartcount:number = 0;

  ngOnInit(): void {
    this.cart.cartlist.subscribe(
      (data:any) => {
        this.cartcount = data.length
        console.log(this.cartcount);
        
      }
    )

  }

  search(event:any){
    let searchKey = event.target.value
    this.api.searchKey.next(searchKey)
    console.log(searchKey);
    

  }

}
