import logo from './logo.svg';
import './App.css';
import OieChart from './component/OieChart';
import Range from './component/Range'
import { useState } from 'react';
import Year from './component/year';


function App() {
  const [amount,setamount] =useState(3000)
  const [down,setdown] =useState(600)
  const [rate,setrate] =useState(5)
  const [year,setyear] =useState(5)
  const [lone,setlone] =useState(2400)


  const StoreAmount = (arg)=>{
    setamount(arg)
    setlone(arg-down)
  }
 
  const Storelone = (arg)=>{
    setlone(arg)
    setdown(amount-arg)
  }
 
  const Storedown = (arg)=>{

    setdown(arg)
    setlone(amount-arg)
  }
 
  const StoreRate = (arg)=>{
    setrate(arg)
  }
  
  const StoreYear = (arg)=>{
    setyear(arg)
  }

  const totalLoanMonths = year * 12;
  const interestPerMonth = (rate/100)/12;
  const monthlyPayment =
    ((down *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1)).toFixed(2);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - down;
  // console.log(totalInterestGenerated);


  return (
    <>
    <h1 className='text-5xl font-bold bg-cyan-600 p-2 m-0'>Bank of React</h1>
    <div className='flex items-center h-screen'>
      <div className='w-1/2 '>
      {/* <RateRange min = {2} max={18} name={'Rate'} skip={1} Amount = {StoreRate} value={rate}></RateRange> */}
      <Range min = {100} max={10000} name={'Home Value'} skip={100} Amount = {StoreAmount} value ={amount} sym={'$'}></Range>
      <Range min = {0} max={amount} name={'Down Payment'} skip={100} Amount = {Storedown} value ={down} sym={'$'}></Range>
      <Range min ={0} max ={amount} skip = {300} name ={'Lone Amout'} Amount = {Storelone} value={lone} sym={'$'}></Range>
      <Range  min = {2} max={18} name={'Rate'} skip={1} Amount = {StoreRate} value={rate} sym={'%'}></Range>
      {/* <RateRange min = {2} max={18} name={'Rate'} skip={1} Amount = {StoreRate} value={rate}></RateRange> */}
      <Year min= {5} max={25} skip= {5} Amount = {StoreYear}></Year>
      </div>
      <div className='w-1/2'>
      <OieChart intrest= {totalInterestGenerated} amount={amount} month= {monthlyPayment}></OieChart>
      </div>
    </div>
    </>
  );
}

export default App;
