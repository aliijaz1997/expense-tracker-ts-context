import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import {ExpenseProviderProps, Transaction, ExpenseContextType, ActionKind, State} from "../types/interface"


export const ExpenseContext  : React.Context<ExpenseContextType> = createContext(null);

function ExpenseProvider({ children } : ExpenseProviderProps)  {
  const initialState : State = {
    transaction: [
      {
        id: Math.random() * 10,
        description: "Salaray Transfered",
        amount: 200,
      },
      {
        id: Math.random() * 10 ,
        description: "Salaray Transfered",
        amount: -300,
      },
    ],
  };
  const getIncome = () : number => {
    let income : number = 0;
    for (var i = 0; i < state.transaction.length; i++) {
      if (state.transaction[i].amount > 0) {
        income += state.transaction[i].amount;
        console.log(typeof income);
    }
  }
    
    return income;
  };

  const getExpense = () : number=> {
    let expense : number = 0;
    for (var i = 0; i < state.transaction.length; i++) {
      if (state.transaction[i].amount < 0)
        expense += state.transaction[i].amount;
    }
    return expense;
  };
  function handleAddTransaction(data : Transaction) {
    const newTransaction : Transaction = {      
      description: data.description,
      amount: data.amount,
      id: Math.random() * 10}
      
    dispatch({type: ActionKind.ADD_TRANSACTION, payload: newTransaction})
      
  }
  function handleDeleteTransaction(id: number) {
    console.log(id);
    dispatch({
      type: ActionKind.DELETE_TRANSACTION,
      payload: id,
    });
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ExpenseContext.Provider
      value={{
        state,
        handleAddTransaction,
        handleDeleteTransaction,
        getIncome,
        getExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseProvider;
