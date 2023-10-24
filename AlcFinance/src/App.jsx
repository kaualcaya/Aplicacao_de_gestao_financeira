import './App.css'
import Balance from './components/Balance';
import Header from './components/header';
import IncomeExpenses from './components/IncomeExpenses';
import Transactionlist from './components/Transactionlist';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/Globalstate';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transactionlist />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
export default App
