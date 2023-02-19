import { Deserializable } from "../deserializable";

export class Pagination implements Deserializable {
    currentPage: number
    totalPages: number
    pageCount: number //Maximum number of items in page

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}