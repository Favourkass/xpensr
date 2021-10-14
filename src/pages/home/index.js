import React from 'react';
import ExpenseList from '../../components/expense-list';
import Footer from '../../components/footer';
import TopFold from '../../components/topfold';
import "./home.css";

const Home = () => {
    
    return (
      <div className="home">
        <TopFold />
        <ExpenseList />
        <Footer/>
      </div>
    );
  };
export default Home
