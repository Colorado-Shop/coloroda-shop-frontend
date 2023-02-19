import { Deserializable } from "./deserializable";


export class Quantity implements Deserializable{
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
    unit: string;
    quantity: number;
}
