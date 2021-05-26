export interface ExpenseProviderProps {
    children : JSX.Element
  }
export interface Transaction {
    id: number,  
    description: string,
    amount: number,
}

  export interface State {
    transaction: Transaction[]
  }
  export interface ExpenseContextType {
    state : State,
    handleAddTransaction : (data: Transaction) => void ,
    handleDeleteTransaction : (id : number) => void,
    getIncome: () => number,
    getExpense: () => number,   
  }

  export enum ActionKind {
    ADD_TRANSACTION = "ADD_TRANSACTION",
    DELETE_TRANSACTION = "DELETE_TRANSACTION"
  }
  
  export type Action = {
    type: ActionKind.ADD_TRANSACTION,
    payload: Transaction
  } | {
    type: ActionKind.DELETE_TRANSACTION,
    payload: number
  }

  export interface FormValues {
    description: string,
    amount: number
  }