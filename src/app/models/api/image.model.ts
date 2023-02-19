import { Deserializable } from "../deserializable";

export class Image implements Deserializable {

    url: string;
    alt: string;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}

export interface ImageInterface {
    url: string;
    alt: string;
}