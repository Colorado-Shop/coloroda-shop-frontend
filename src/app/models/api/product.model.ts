import { Image } from "./image.model";
import { Price } from "./price.model";
import { Category } from "./category.model";
import { Seo } from "./seo.model";
import { Deserializable } from "../deserializable";

export class Product implements Deserializable {

    slug: string;
    name: string;
    description1: string;
    description2: string;
    additionalInfo: string;
    stars: number = 0;
    photos: Image[] = new Array();
    prices: Price[] = new Array();
    category: Category = new Category();
    seo: Seo = new Seo();
    deserialize(input: any): this {
        Object.assign(this, input);
        this.photos = input.photos.map(image => new Image().deserialize(image))
        this.prices = input.prices.map(price => new Price().deserialize(price))
        return this;
    }

}