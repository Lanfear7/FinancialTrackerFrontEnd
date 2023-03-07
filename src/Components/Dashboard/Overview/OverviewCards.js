import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { currentUserData } from '../../../Redux/Slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function OverviewCards() {

    const [monthlyIncome, setMonthlyIncome] = useState(0);
    const [monthlyIncomeToggle, setMonthlyIncomeToggle] = useState(false)
    const [addNewExpense, setAddNewExpense] = useState(false)
    const [expenseName, setExpenseName] = useState()
    const [expenseCost, setExpenseCost] = useState()
  

    const [monthlySavings, setMonthlySavings] = useState(0.00);

  
    const {JWT} = useSelector((state) => state.User)
    const {user} = useSelector((state) =>state.User)

    const dispatch = useDispatch()


    const config = {
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JWT}`, 
      }
    };
    useEffect(()=>{
      axios.get(`https://localhost:44320/api/Dashboard/CurrentUser/${user.id}`,
      config
      ).then((res)=>{
        if(res.data['$values']){
          const user = res.data['$values']
          dispatch(currentUserData(user[0]))
          return
        }
        console.log('something went wrong no data')
      }).catch((error)=>{
        console.log(error)
      })
    },[monthlyIncomeToggle])


  return (
    <div className='h-full flex flex-wrap justify-evenly items-center w-full sm:w-[500px] md:w-full xl:w-3/4 basis-full mt-5 xl:ml-5'>
        <div className='text-FTwhite border-2 border-FTgreen bg-FTgray rounded-lg h-[150px] p-2 shadow-lg w-[300px] flex flex-wrap items-center my-2'>
          <h1 className='basis-full text-2xl'>Monthly Savings</h1>
          <h1 className='pl-5 text-2xl'>${monthlySavings.toFixed(2)}</h1>
          </div>
          <div className='text-FTwhite border-2 border-FTgreen bg-FTgray rounded-lg h-[150px] p-2 shadow-lg w-[300px] flex flex-wrap items-center my-2'>
            <h1 className='basis-full text-2xl'>Monthly Income</h1>
            {
              user.monthlyIncome ?
                <div className='flex justify-start w-full flex-wrap'>
                  {
                    monthlyIncomeToggle ? 
                    <>
                      <input type='text' className='bg-FTgray border-b border-FTgreen' placeholder='Enter Monthly Income' onChange={(e)=> setMonthlyIncome(e.target.value)}></input>
                      <div className='flex justify-between mt-2 ml-2 w-[140px] '>
                        <button className='bg-FTgreen text-FTblack px-3 rounded-md' onClick={()=> UpdateIncome()}>Enter</button>
                        <button className='bg-FTgreen text-FTblack px-3 rounded-md' onClick={()=> setMonthlyIncomeToggle(false)}>Cancel</button>
                      </div>
                    </>
                    :
                    <>
                      <h1 className='text-2xl pl-5 mr-5'>${user.monthlyIncome}</h1>
                      <button className='bg-FTgreen text-FTblack px-3 rounded-md' onClick={()=>setMonthlyIncomeToggle(true)}>Edit</button>
                    </>
                    
                  }
                  
                </div>
              :
                <div className='flex justify-evenly w-full'>
                  <input type='text' className='bg-FTgray border-b border-FTgreen' placeholder='Enter Monthly Income' onChange={(e)=> setMonthlyIncome(e.target.value)}></input>
                  <button className='bg-FTgreen text-FTblack px-3 rounded-md' onClick={()=> UpdateIncome()}>Enter</button>
                </div>
            }
          </div>
          <div className='text-FTwhite border-2 border-FTgreen bg-FTgray rounded-lg h-[160px] p-2 shadow-lg w-[300px] flex flex-wrap items-center my-2'>
            <h1 className='basis-full text-2xl'>Expense</h1>
            <div className='flex flex-wrap justify-evenly w-full'>
              <input id='expenseName' type='text' className='bg-FTgray border-b border-FTgreen basis-[80%] mt-2' placeholder='Expense Name' onChange={(e)=>setExpenseName(e.target.value)} value={expenseName}></input>
              <input id='expenseCost' type='text' className='bg-FTgray border-b border-FTgreen basis-[80%] mt-2' placeholder='Expense Cost'  onChange={(e)=>setExpenseCost(e.target.value)} value={expenseCost}></input>
              <button className='bg-FTgreen text-FTblack px-3 rounded-md basis-[25%] mt-3' onClick={()=>addExpense()}>Enter</button>
            </div>
          </div>
        </div>
  )

  function UpdateIncome()
  {
    const bodyParameters = {
       Income: monthlyIncome
    };
    axios.post(`https://localhost:44320/api/Dashboard/CurrentUser/UpdateIncome/${user.id}`,
    bodyParameters,
    config
    )
    .then(function (response) {
      console.log(response);
      setMonthlyIncomeToggle(false)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function addExpense(){
    let currentDate = new Date();
    let sqlFormattedDate = currentDate.getFullYear()  + '-'
     + ('0' + (currentDate.getMonth()+1)).slice(-2) + '-'
     + ('0' + currentDate.getDate()).slice(-2) + 'T00:00:00';
    console.log(sqlFormattedDate, expenseCost, expenseName)

    const bodyParameters = {
      "ExpenseName" : expenseName,
      "Value" : expenseCost,
      "DateTime" : sqlFormattedDate,
      "UserId" : user.id
    }
    axios.post('https://localhost:44320/api/Dashboard/CurrentUser/Expenses/Add',
    bodyParameters,
    config)
    .then((res)=>{
      console.log(res)
      if(res.status == 200){
        setExpenseName('')
        setExpenseCost('')
      }
    })
    .catch((error) =>{
      console.log(error)
    })
  }

}

export default OverviewCards