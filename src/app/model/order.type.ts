export type Order = {
    id: number;
    orderNumber: string;
    country: string;
    streeetAddress: string;
    town: string;
    paymentDescription: string;
    paymentDueDate: Date;
    amount: number;
    currency: string;
}