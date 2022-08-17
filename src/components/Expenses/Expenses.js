import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpenseChart";

function Expenses(props) {
    const [yearFilter, setYearFilter] = useState("2020");

    const onFilterYearHandler = (yearFilter) => {
        setYearFilter(yearFilter);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === yearFilter;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilterYear={onFilterYearHandler} value={yearFilter} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
