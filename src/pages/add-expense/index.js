import React from 'react'
import AddForm from '../../components/add-form'
import Footer from '../../components/footer'
import TopFold from '../../components/topfold'
import "./add-expense.css"

function AddExpense() {
    return (
        <div className="add-expense" >
            <TopFold/>
            <AddForm/>
            <Footer/>
        </div>
    )
}

export default AddExpense
