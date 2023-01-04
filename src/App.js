import Expenses from "./components/Exprenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
const expenses = [
  {
    id: 'e1',
    title: 'Eat',
    amount: 12000,
    date: new Date(2020,7,14),
  },
  {
    id: 'e2',
    title: 'buy',
    amount: 20000,
    date: new Date(2022,3,5),
  },
  {
    id: 'e3',
    title: 'phone',
    amount: 101010,
    date: new Date(2022,7,14),
  },
  {
    id: 'e4',
    title: 'Eat',
    amount: 12000,
    date: new Date(2023,7,14),
  },
]
  const addExpenseHandler = expense => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
