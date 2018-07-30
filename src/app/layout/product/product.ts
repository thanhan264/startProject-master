export class Product {
    uuid: string;
    name: string;
    status:  boolean;
    price: string;
    description:  string;
    quanty: number;
    program_promotion: Array<string>;

    constructor() {
       this.uuid = '';
       this.name = '';
       this.status = true||false;
       this.price = '';
       this.description = '';
       this.quanty = 0;
       this.program_promotion = [];
    }
}
