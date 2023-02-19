import { Deserializable } from "../deserializable";

export class Tag implements Deserializable {
    slug: string;
    name: string;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}