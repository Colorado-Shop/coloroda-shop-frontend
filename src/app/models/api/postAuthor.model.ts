import { Deserializable } from "../deserializable";

export class PostAuthor implements Deserializable {

    name: string;
    email: string;
    bio: string;
    facebookUrl: string;
    instagramUrl: string;
    twitterUrl: string;
    avatar: string;
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

}