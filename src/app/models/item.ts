import { Product } from "./product";
import { Quantity } from "./quantity";
import { Deserializable } from "./deserializable";

export class Item implements Deserializable{
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
    product: Product;
    quantity: Quantity;
}

