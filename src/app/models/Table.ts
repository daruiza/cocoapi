
export interface ITable {
    id?: number;
    description?: string;
    icon?: string;
    label?: string;
    name?: string;
    order?: string;
    active?: number;
    store_id?: number;
}

export class Table implements ITable {
}
