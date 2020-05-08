export interface ITable<T> {
    displayedColumns?: string[];
    ELEMENT_DATA?: T[];
    flagSearch?: boolean;
    search?: string;
    searchPlaceholder?: string;
    // columNameList?: string[];
    // columNameSortList?: string[];
    // rowNameList?: Array<keyof T>;
    // buttonList?: any[];
    // filter?: any;
    // metadata?: any;
    // rowStyle?: [];
}