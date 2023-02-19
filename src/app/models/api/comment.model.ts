import { Deserializable } from "../deserializable";

export class Comment implements Deserializable {

    postId: string;
    date: string;
    authorName: string;
    authorEmail: string;
    content: string;
    status: string;
    id?: string;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

} 