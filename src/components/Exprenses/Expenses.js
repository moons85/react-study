import React,{useState} from "react";

import Expensitem from "./Expensitem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'

function Expenses(props){
    const [filterYear, setFilterYear] = useState('2023');

    function filterChangeHandler(selectedYear){
        setFilterYear(selectedYear)
    }

    return(
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            <Expensitem title = {props.items[0].title} amount = {props.items[0].amount}  date = {props.items[0].date}/>
            <Expensitem title = {props.items[1].title} amount = {props.items[1].amount}  date = {props.items[1].date}/>
            <Expensitem title = {props.items[2].title} amount = {props.items[2].amount}  date = {props.items[2].date}/>
            <Expensitem title = {props.items[3].title} amount = {props.items[3].amount}  date = {props.items[3].date}/>
        </Card>
        </div>
    );
}

export default Expenses;