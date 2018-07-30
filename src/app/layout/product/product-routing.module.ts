import { DetailProductComponent } from './detail-product/detail-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent} from './list-product/list-product.component';

const routes: Routes = [
    {path: '', redirectTo: 'product', pathMatch: 'full' },
    {path: '', component: ListProductComponent},
    {path: 'product/detail/:id', component: DetailProductComponent},
    {path: 'product/add', component: DetailProductComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}
