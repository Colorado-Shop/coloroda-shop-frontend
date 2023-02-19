import { Deserializable } from "./deserializable";

export class Price implements Deserializable {
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
    unit: string;
    amount: number;
}

declare interface UnitVal {
    name: string;
}

export const UNITS: UnitVal[] = [
    {name: "Half Ounce"},
    {name: "Ounce"},
    {name: "Quarter Pound"},
    {name: "Half Pound"},
    {name: "Pound"}
]

export enum Unit {
    one = 'Half Ounce',
    two = 'Ounce',
    three = 'Quarter Pound',
    four = 'Half Pound',
    five = 'Pound',
}

export enum Unit {
    cartridgeHalf = 'Half Gram Cartridges',
    cartridgeFull = 'Full Gram Cartridges',
    cartridgeHalfFive = '5 Half Gram Cartridges',
    cartridgeFullFive = '5 Full Gram Cartridges',
    cartridgeHalfTen = '10 Half Gram Cartridges',
    cartridgeFullTen = '10 Full Gram Cartridges',
    roll = 'Pre Rolls',
    rollFive = '5 Pre Rolls',
    rollTen = '10 Pre Rolls',
    halfOunce = 'Half Ounce',
    ounce = 'Ounce',
    quarterPound = 'Quarter Pound',
    halfPound = 'Half Pound',
    pound = 'Pound',
    pen = 'Pen(s)',
}