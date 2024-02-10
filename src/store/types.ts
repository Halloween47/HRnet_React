export interface AppState {
    // employees: string[];
    employees: listState;
}

export interface listState {
    list: (string | number | any)[]
}