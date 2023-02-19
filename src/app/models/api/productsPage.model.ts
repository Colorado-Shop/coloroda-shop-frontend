import { Deserializable } from "../deserializable";
import { Product } from "./product.model";
import { Pagination } from "./pagination.model";

export class ProductsPage implements Deserializable {

    products: Product[] = new Array()
    pagination: Pagination

    deserialize(input: any): this {
        Object.assign(this, input);
        this.products = input.products.map(product => new Product().deserialize(product))
        return this;
    }
}