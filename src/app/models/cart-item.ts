import { Product } from "./product";
import { Quantity } from "./quantity";
import { Deserializable } from "./deserializable";

export class CartItem implements Deserializable{
    product: Product;
    quantities: Quantity[] = new Array()

    deserialize(input: any): this {
        Object.assign(this, input);
        this.quantities = input.quantities.map((quantity: Quantity) => new Quantity().deserialize(quantity));
        return this;
    }
}
