import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { useSelector } from 'react-redux'

function DashboardTracker() {

    const [createTracker, setCreateTracker] = useState(false)
    const [queryTrackerTrigger, setQueryTrackerTrigger] = useState(false)
    const [userTrackers, setUserTrackers] = useState([])


    const {user} = useSelector((state)=> state.User)
    const {JWT} = useSelector((state)=>state.User)

    const configuration = {
        headers: { Authorization: `Bearer ${JWT}` }
    }

    useEffect(()=>{
        if(user.id){
            axios.get(`https://localhost:44320/api/Dashboard/CurrentUser/Trackers/${user.id}`,
            configuration
            ).then((res) => {
                if(res.status == 200){
                    const userTrackersTransactions = res.data['$values']
                    let trackerTransactionsArray = []
                    userTrackersTransactions.forEach(tracker => {
                        if(tracker.tracker.name){
                            trackerTransactionsArray.push(tracker)
                        }
                    });
                    setUserTrackers(trackerTransactionsArray)
                    
                }
            }).catch((error) => {
                console.log(error)
                if(error.response.data){
                    console.log(error.response.data)
                    setUserTrackers([])
                }
            })
        }
    },[user,queryTrackerTrigger])

    function addTransaction(e,Id){
        const amount = e.target.previousSibling.value
        if(isNaN(amount)){
            return false
        }

        let MyDate = new Date();

        let MyDateString = MyDate.getFullYear()  + '-'
             + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'
             + ('0' + MyDate.getDate()).slice(-2) + 'T00:00:00';

        console.log(MyDateString)
        let DTO = {
            "TrackerId" : Id,
            "Amount" : amount,
            "DateTime" : MyDateString
        }

        
        axios.post('https://localhost:44320/api/Dashboard/CurrentUser/Transactions/Add',
        DTO,
        configuration
        ).then(res=>{
            if(res.status == 200){
                setQueryTrackerTrigger(!queryTrackerTrigger)
            }
        }).catch(error=>{
            console.log(error)
        })

    }

  return (
    <div className='pb-5'>
        <h1 className='text-4xl text-FTwhite pl-2 lg:pl-16 mt-6'>Trackers</h1>
        <div className='text-FTwhite m-5 lg:pl-24'>
            <button onClick={(e)=>{e.preventDefault(); setCreateTracker(true)}} className='text-xl bg-FTgreen text-FTblack px-3 py-2 rounded-md w-[200px] hover:text-FTwhite hover:cursor-pointer shadow-xl'>Create New Tracker</button>
        </div>
        <div className='w-full h-full md:px-24 mt-10 flex flex-wrap justify-evenly'>
            {
                userTrackers.length > 0 ?
                    userTrackers.map((tracker, i) => {
                        let total = 0
                        let error = false
                        console.log(tracker)
                        if(tracker.tracker){
                            return(
                                <div className='w-[300px] bg-FTgray rounded-lg p-2 h-[400px] m-5'>
                                    <div className='relative h-0 w-0'>
                                        <figure className='absolute h-8 w-8 left-[250px] m-0' onClick={()=>DeleteTracker(tracker.tracker.id)}>
                                            <GrClose className='w-full h-full bg-FTgreen hover:bg-[#41a886] hover:cursor-pointer rounded-md relative p-1'/>
                                        </figure>
                                    </div>
                                    <h1 className='text-FTwhite text-2xl table-auto text-center py-3 pt-8 border-b border-FTgreen'>{tracker.tracker.name}</h1>
                                    <div className='h-[200px] overflow-y-scroll'>
                                        <table className='w-full table-auto text-FTwhite my-4 '>
                                            <thead>
                                                <tr>
                                                    <td className='pl-3 border-b border-FTblack text-lg'>Date</td>
                                                    <td className='pl-3 border-b border-FTblack text-lg'>Cost</td> 
                                                </tr>
                                            </thead>
                                            <tbody className=' overflow-y-scroll'>
                                                {
                                                    tracker.tracker.transactions?
                                                    tracker.tracker.transactions.$values.map((transaction, i)=>{
                                                        total = total + transaction.amount
                                                        return(
                                                            <tr className='hover:bg-FTgreen hover:text-FTblack'>
                                                                <td className='pl-3 h-5 text-lg'>{transaction.dateTime.slice(0, -12)}</td>
                                                                <td className='pl-3 h-5 text-lg'>${transaction.amount}</td>
                                                            </tr>
                                                        )
                                                    })
                                                    :
                                                    <></>
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <h1 className='text-FTwhite text-xl mb-3'>Total - ${total.toFixed(2)}</h1>
                                    </div>
                                    <div className='w-full h-[75px] flex flex-wrap justify-around items-center py-3 border-t border-FTgreen'>
                                        <input type='text' placeholder='Cost' className='h-7'></input>
                                        <button className='bg-FTgreen text-FTblack px-3 rounded-md basis-[25%] hover:text-FTwhite' onClick={(e)=>{addTransaction(e,tracker.tracker.id)}}>Enter</button>
                                    </div>
                                </div>
                            )
                        }
                        return <></>
                    })
                :
                <div>
                    <h1 className='text-FTwhite text-xl'>Create A New Tracker</h1>
                </div>
            }
        </div>

        {   
            createTracker &&
            <NewTrackerModel />
        }
        
    </div>
  )

  function NewTrackerModel(){

    const [trackerName, setTrackerName] = useState('')
    const [trackerTransactions, setTrackerTransactions] = useState([])
    const [trackerTransactionCost, setTrackerTransactionCost] = useState()
    const [error, setError] = useState('')
    const [titleError, setTitleError] = useState('')

    function addTrackerItem(){
        let currentDate = new Date().toJSON().slice(0, 10);
        if (Number(trackerTransactionCost)){
            setError() 
            let currentTransactionCost = parseFloat(trackerTransactionCost).toFixed(2)
            let setTrackerTransactionItem = {
                'Amount': currentTransactionCost,
                'DateTime': currentDate
            }
            setTrackerTransactions([...trackerTransactions, setTrackerTransactionItem])
            return
        }
        setError('Please enter a number')
    }

    function createTracker(){
        if(trackerName == ''){
           setTitleError('Please enter a tracker name') 
           return
        }
        //send data
        const trackerObj = {
            "Name": trackerName,
            "Transactions": trackerTransactions
        }

        let config = {
            headers: { Authorization: `Bearer ${JWT}` }
        }

        axios.post(`https://localhost:44320/api/Dashboard/CurrentUser/Trackers/Add/${user.id}`,trackerObj,config)
            .then((response)=>{
                if(response.status == 200){
                    setQueryTrackerTrigger(!queryTrackerTrigger)
                }
            })
            .catch((error)=>{
                console.log(error)
            })

        
    }

    return (
            <div className='fixed top-0 w-full h-screen bg-FTgrayFade flex justify-center items-center'>
                <div className='w-screen sm:w-[500px] bg-FTwhite text-FTwhite border border-FTwhite z-10 h-screen sm:max-h-[625px] rounded-lg'>
                    <div className='w-full flex justify-end relative right-5 top-5 basis-full h-16'>
                        <figure onClick={()=>setCreateTracker(false)} className='m-0 w-8 h-8 hover:cursor-pointer'>
                            <GrClose className='w-full h-full bg-FTgreen rounded-md relative p-1'/>
                        </figure>
                    </div>
                    <div className='mx-auto w-[300px] sm:w-[400px] px-5 rounded-md h-400px border bg-FTgray border-FTwhite pb-10 mt-10 sm:mt-0'>
                        <h1 className=' mb-5 text-center text-xl mt-24 md:mt-16'>New Tracker</h1>
                        {
                            titleError &&
                            <h1 className='text-red-600'>{titleError}</h1>
                        }
                        <input type='text' className='border-b border-FTgreen bg-FTwhite focus:border-FTgreen text-FTblack' placeholder='Tracker Name' onChange={(e)=>setTrackerName(e.target.value)}></input>
                        <div className='h-[200px] overflow-y-scroll my-5 bg-FTwhite text-FTgray'>
                            {
                                trackerTransactions.length > 0 ?
                                    <ul>
                                        {
                                            trackerTransactions.map(item =>{
                                                return(
                                                    <div className='flex justify-evenly py-2 hover:bg-FTgreen hover:text-FTwhite even:bg-FTgray even:text-FTwhite'>
                                                        <h1>{item.DateTime}</h1>
                                                        <h1>{item.Amount}</h1>
                                                    </div>
                                                )
                                            })
                                        }
                                    </ul>
                                :
                                    <div className='w-full h-full flex justify-center items-center'>
                                        <h1>No Transactions Yet...</h1>
                                    </div>
                            }
                        </div>
                        <form className='w-full flex justify-between'>
                            <input type='text' placeholder='Transaction Cost' className='border-b border-FTgreen bg-FTwhite ml-2 text-FTblack' onChange={(e)=>setTrackerTransactionCost(e.target.value)} value={trackerTransactionCost}></input>
                            <button className='bg-FTgreen rounded-md px-5 hover:text-FTwhite' onClick={(e)=>{e.preventDefault();addTrackerItem();setTrackerTransactionCost('')}}>Add</button>
                        </form>
                        {
                            error &&
                            <h1 className='text-red-600'>{error}</h1>
                        }
                        <button className='bg-FTgreen rounded-md mt-5 px-5 hover:text-FTwhite' onClick={(e)=>{e.preventDefault();createTracker();}}>Create Tracker</button>
                        
                    </div>
                </div>
            </div> 
    )
  }

  function DeleteTracker(Id){
    console.log('pop to confirm deletion', Id)
    const configuration = {
        headers: { Authorization: `Bearer ${JWT}` }
    }
    axios.delete(`https://localhost:44320/api/Dashboard/CurrentUser/Trackers/Delete/${Id}`,
    configuration)
    .then(res=>{
        console.log(res)
        setQueryTrackerTrigger(!queryTrackerTrigger)
        if(res.status == 200){
            console.log('remove', Id)
            
        }
    }).catch(error =>{
        console.log(error)
    })
  }

}

export default DashboardTracker