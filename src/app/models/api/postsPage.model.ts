import { Deserializable } from "../deserializable";
import { Post } from "./post.model";
import { Pagination } from "./pagination.model";

export class PostsPage implements Deserializable {

    posts: Post[] = new Array()
    pagination: Pagination

    deserialize(input: any): this {
        Object.assign(this, input);
        this.posts = input.posts.map(post => new Post().deserialize(post))
        return this;
    }
}