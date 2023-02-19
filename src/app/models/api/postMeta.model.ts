import { Seo } from "./seo.model";
import { Deserializable } from "../deserializable";

export class PostMeta implements Deserializable {

    created: string;
    published: string;
    lastModified: string;
    featuredImage: string;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}