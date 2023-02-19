import { PostAuthor } from "./postAuthor.model";
import { PostMeta } from "./postMeta.model";
import { Category } from "./category.model";
import { Tag } from "./tag.model";
import { Seo } from "./seo.model";
import { Deserializable } from "../deserializable";

export class Post implements Deserializable {

    slug: string;
    title: string;
    author: PostAuthor = new PostAuthor();
    meta: PostMeta = new PostMeta();
    body: string;
    category: Category = new Category();
    tag: Tag = new Tag();
    status: string;
    seo: Seo = new Seo();
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}