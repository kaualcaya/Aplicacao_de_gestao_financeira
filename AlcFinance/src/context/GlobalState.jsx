import React, {Children, createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import Transaction from '../components/Transaction';

const initialState = {
    transactions: [
        {id: 1, text: 'Phone', amount: -10 },
        {id: 2, text: 'Salary', amount: 420 },
        {id: 3, text: 'Gym', amount: -130 },
        {id: 4, text: 'Shoes', amount: 220 },
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        }); 
        
    }

    function addTransaction(transaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        }); 
    }
    
    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}> 

        {children}
    </GlobalContext.Provider>)
}


