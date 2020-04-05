export interface IOrder {
    id?: number;
    date?: string;
    description?: string;
    name?: string;
    price?: number;
    product_id?: number;
    status_id?: number;
    status_paid?: number;
    order_product_product_id?: number;
    order_product_id?: number;
}