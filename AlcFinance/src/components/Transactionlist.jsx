import { useContext } from 'react'
import React from 'react'
import { GlobalContext } from '../context/Globalstate'
import Transaction from './Transaction'

export const Transactionlist = () => {
    const {transactions} = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul id='list' className='list'>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </>
    )
}

export default Transactionlist
