export interface AppState {
  employees: listState
}

export interface listState {
  list: (string | number | any)[]
}
