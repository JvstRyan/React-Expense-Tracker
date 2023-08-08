
import './ExpenseDate.css'
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();


    return(
        <section className='expense-date'>
            <article className='expense-date__month'>{month}</article>
            <article className='expense-date__year'>{year}</article>
            <article className="expense-date__day">{day}</article>
        </section>
    );
}

export default ExpenseDate;