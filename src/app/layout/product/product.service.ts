import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Product } from './product';
@Injectable()
export class ProductService {
dataPromtion: Array<Product> =  [
    {uuid: '1', name: 'This is product 1 ', status: true,
    price: '200000d', description: 'abc', quanty: 1, program_promotion: [ 'a', 'b', 'c', 'd']},
    {uuid: '2', name: 'This is product 2', status: false,
    price: '200000d', description: 'abc', quanty: 2, program_promotion: [ 'a', 'b', 'c', 'd']},
    {uuid: '3', name: 'This is product 3 ', status: false,
    price: '200000d', description: 'abc', quanty: 3, program_promotion: [ 'a', 'b', 'c', 'd']},
    {uuid: '4', name: 'This is product 4 ', status: false,
    price: '200000d', description: 'abc', quanty: 3, program_promotion: [ 'a', 'b', 'c', 'd']},
    {uuid: '5', name: 'This is product 5 ', status: true,
    price: '200000d', description: 'abc', quanty: 1, program_promotion: [ 'a', 'b', 'c', 'd']},
    {uuid: '6', name: 'This is product 6', status: false,
    price: '200000d', description: 'abc', quanty: 2, program_promotion: [ 'a', 'b', 'c', 'd']},
    {uuid: '7', name: 'This is product 7 ', status: false,
    price: '200000d', description: 'abc', quanty: 3, program_promotion: [ 'a', 'b', 'c', 'd']},
    {uuid: '8', name: 'This is product 8 ', status: false,
    price: '200000d', description: 'abc', quanty: 3, program_promotion: [ 'a', 'b', 'c', 'd']},
    {uuid: '9', name: 'This is product 9 ', status: true,
    price: '200000d', description: 'abc', quanty: 1, program_promotion: [ 'a', 'b', 'c', 'd']},
    {uuid: '10', name: 'This is product 10', status: false,
    price: '200000d', description: 'abc', quanty: 2, program_promotion: [ 'a', 'b', 'c', 'd']},
    {uuid: '11', name: 'This is product 11 ', status: false,
    price: '200000d', description: 'abc', quanty: 3, program_promotion: [ 'a', 'b', 'c', 'd']},
    {uuid: '12', name: 'This is product 12 ', status: false,
    price: '200000d', description: 'abc', quanty: 3, program_promotion: [ 'a', 'b', 'c', 'd']},
];
  show: any;
constructor() {
    const data = JSON.parse(localStorage.getItem('father'));
    if(data){
        return;
    }
    localStorage.setItem('father', JSON.stringify(this.dataPromtion));
}
 getLists() {
    console.log(JSON.parse(localStorage.getItem('father')));
     return  JSON.parse(localStorage.getItem('father'));
 }
 save(product: Product): boolean {
    const arrays = this.getLocal();
     const objectOld = arrays.find( p => p.uuid === product.uuid);
     
     if ( objectOld ) {
         const position = arrays.indexOf(objectOld);
         arrays[position] = product;
         console.log(arrays);
         localStorage.setItem('father', JSON.stringify(arrays));
         return true;
     } else {
        this.dataPromtion.push(product);
        localStorage.setItem('father', JSON.stringify(this.dataPromtion));
        return false;
     }
 }
 remove(uuid: string): Array<Product> {
    const arrays =  this.getLocal();
    arrays.splice(arrays.indexOf(arrays.find(p => p.uuid === uuid)), 1);
    localStorage.setItem('father', JSON.stringify(arrays));
    return this.getLocal();
 }
 getById(uuid: string): Product{
     return this.getLocal().find( p => p.uuid === uuid);
 }
 getLocal(): Array<Product> {
     return JSON.parse(localStorage.getItem('father'));
 }
}
