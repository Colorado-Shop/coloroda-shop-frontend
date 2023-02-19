export class ShippingDetails {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    contactOption: string = "Phone";
    paymentOption: string = "Bitcoin";
    country: string;
    state: string;
    city: string;
    zip: string;
    address1: string;
    address2: string = "";
    notes: String = "";
}