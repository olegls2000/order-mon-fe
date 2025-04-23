import { Currency } from "./currency.type";

export type Order = {
    id: number;
    orderNumber: string;
    countryCode: string;
    streeetAddress: string;
    town: string;
    paymentDescription: string;
    paymentDueDate: Date; 
    amount: number;
    currency: Currency;
}