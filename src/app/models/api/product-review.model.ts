import { Deserializable } from "../deserializable";

export class ProductReview implements Deserializable {

    productId: string;
    date: string;
    name: string;
    email: string;
    country: string;
    stars: number;
    content: string;
    status: string;
    id?: string;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}