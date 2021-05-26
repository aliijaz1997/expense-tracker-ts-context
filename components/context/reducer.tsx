import {State, Action, ActionKind} from '../types/interface'

export const reducer = (state : State, action : Action) : State => {
  switch (action.type) {
    case  ActionKind.ADD_TRANSACTION:
      return {
       transaction: [...state.transaction, action.payload]
      };
    case ActionKind.DELETE_TRANSACTION:
      return {
        ...state.transaction,
        transaction: state.transaction.filter(
          (trans) => trans.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
