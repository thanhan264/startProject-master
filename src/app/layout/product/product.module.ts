import { ProductRoutingModule } from './product-routing.module';
import { ListProductComponent } from './list-product/list-product.component';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetailProductComponent} from './detail-product/detail-product.component';
import { ProductService } from './product.service';
import {RouterModule} from '@angular/router';
import { TabsModule, BsDatepickerModule, TimepickerModule} from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TabsModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        ProductRoutingModule,
        RouterModule,
        ModalModule,
    ],
    declarations: [
        ListProductComponent,
        DetailProductComponent
        ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        ProductService,
        BsModalService
    ],
    exports: [],
})
export class ProductModule {

}
