export interface ITable<T> {
    displayedColumns?: string[];
    ELEMENT_DATA?: T[];
    flagSearch?: boolean;
    search?: string;
    searchPlaceholder?: string;
    // Filtros
    object?: any; // para consultas especiales, object para POST
    key?: string; // criterio de busqueda
    limit?: number;
    page?: number;
    total?: number;
    sort?: string;
    active?: number;
}
