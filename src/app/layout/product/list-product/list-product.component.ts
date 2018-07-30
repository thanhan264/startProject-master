
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})

export class ListProductComponent  {
  data: Array<Product> = [];
  dialog: boolean;
  modalRef: BsModalRef;
  message: string;

    constructor(private productService: ProductService, private modalService: BsModalService) {
    }

    ngOnInit() {
      this.data = this.productService.getLists();
    }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
}

confirm(uuid: string): void {
    //this.dialog = true;
    // let link = ['product/:uuid/delete'];
    //this.router.navigate(link);  
    this.data = this.productService.remove(uuid);
   //console.log("confirm");
    this.modalRef.hide();
}

decline(): void {
    //this.message = 'Declined!';
    //console.log("declined");
    this.modalRef.hide();
}


//   deleteItem(uuid: string ) {
//     this.data = this.productService.remove(uuid);  
// }

}
