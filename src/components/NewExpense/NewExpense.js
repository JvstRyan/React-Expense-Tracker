import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';



const NewExpense = (props) => {
const [isEditing, setIsEditing] = useState(false)
const [cancelForm, setCancelForm] = useState(true)

const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData, 
        id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsEditing(false)
}

const startEditing = () => {
    setIsEditing(true)
}

const stopEditingHandler = () => {
    setIsEditing(false)
}





return (
<div div className='new-expense'>
{!isEditing && <button onClick={startEditing}>Add New Expense</button>}
{ isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}  /> }
</div>
    
)
};

export default NewExpense;