import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <article className="expense-item__description">
        <h2>{props.title}</h2>
        <article className="expense-item__price">${props.amount}</article>
      </article>
      
    </Card>
    </li>
  );
}

export default ExpenseItem;
