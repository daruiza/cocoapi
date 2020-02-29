
export interface ITable {
    id?: number;
    description?: string;
    icon?: string;
    label?: any;
    name?: string;
    order?: string;
    active?: number;
    store_id?: number;
}

export class Table implements ITable {
    id: number;
    description: string;
    icon: string;
    label: any;
    name: string;
    order: string;
    active: number;
    store_id: number;
}
