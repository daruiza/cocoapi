import { IOrder } from './Order';

export interface IOrderList {
    id?: number;
    description?: string;
    date?: string;
    status_id?: number;
    orders?: IOrder[];
}
