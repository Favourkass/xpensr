import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './topfold.css'
import { useDispatch } from 'react-redux'
import { searchExpense } from '../../redux/actions/expenses'

function TopFold() {
    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    const handleQuery =(e) => {
        setQuery(e.target.value)
        dispatch(searchExpense(e.target.value)) 
    }
    return (
        <div className='topfold'>
            {window.location.pathname === '/' ? (
                <div className='home-topfold'>
                    <div className='searchbar'>
                        <i class="fi fi-rr-search"></i>
                        <input value ={query} placeholder="Search for Expenses" onChange={(e)=>handleQuery(e)} />
                    </div>
                    <Link to = '/add-expense'>
                        <div className='add-button'>
                            <i class="fi fi-rr-add"></i>
                            <label> 
                                Add</label>
                        </div>
                    </Link>
                </div>
            ) : (
            <div className='add-topfold'>
                <Link to = '/'>
                    <div className='add-topfold-button'> 
                        <i class="fi fi-rr-angle-left"></i>
                        <label> 
                            Back</label>
                    </div>
                </Link>
                <Link to = '/'>
                    <div className='add-topfold-button'> 
                        <i class="fi fi-rr-cross-circle"></i>
                        <label> 
                            CANCEL
                        </label>
                    </div>
                </Link>
                
                
            </div>)}
            
        </div>
    )
}

export default TopFold
