import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {moment} from 'ngx-bootstrap/chronos/test/chain';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {TabsetComponent} from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
    rForm: FormGroup;
    post: any;
    titleAlert:string = 'Không được để trống';
    product: Product = new Product();

  constructor( 
    private pro: FormBuilder ) {    

      this.rForm = pro.group({
        'uuid' : [null, Validators.required],
        'name' :  [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100)])],
        'price' : [null, Validators.required],
        'quanty' : [null, Validators.required],
      }

      );
  }
  addPost(post) {
    this.product.uuid = post.product.uuid;
    this.product.name = post.product.name;
    this.product.status = post.product.status;
    this.product.price = post.product.price;
    this.product.description = post.product.description;
    this.product.quanty = post.product.quanty;
    this.product.program_promotion = post.product.program_promotion;
  }

  ngOnInit() {
  }


}
