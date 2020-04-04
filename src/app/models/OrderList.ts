import { IOrder } from './Order';

export interface IOrderList {
    id?: number;
    description?: string;
    date?: string;
    orders?: IOrder[];
}
