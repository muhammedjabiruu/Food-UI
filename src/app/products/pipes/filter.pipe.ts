import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(allProducts:[], searchKey:string, propName:string):any [] {
    if(!allProducts || searchKey == ""|| propName==""){
      return allProducts
    }
    const result:any=[];

    allProducts.forEach((product:any) => {
      if(product[propName].trim().toLowerCase().includes(searchKey.toLowerCase()))
      result.push(product);
    })

    return result;  
  }

}
