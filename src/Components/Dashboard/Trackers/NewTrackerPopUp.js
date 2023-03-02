
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import {triggerTrackerPopUp, queryTrackers} from '../../../Redux/Slices/trackerSlice'


function NewTrackerModel(){

    //New Tracker Values
    const [trackerName, setTrackerName] = useState('')
    const [trackerTransactions, setTrackerTransactions] = useState([])
    const [trackerTransactionCost, setTrackerTransactionCost] = useState()
    const [error, setError] = useState('')
    const [titleError, setTitleError] = useState('')

    //Redux
    const {user} = useSelector((state) => state.User)
    const {JWT} = useSelector((state) => state.User)
    const {trackerPopUp} = useSelector((state) => state.Tracker)
    const {trackerQuery} = useSelector((state) => state.Tracker)
    const dispatch = useDispatch()

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

    function createNewTracker(){
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
                    dispatch(queryTrackers(!trackerQuery))
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
                        <figure onClick={()=>dispatch(triggerTrackerPopUp(!trackerPopUp))} className='m-0 w-8 h-8 hover:cursor-pointer'>
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
                        <button className='bg-FTgreen rounded-md mt-5 px-5 hover:text-FTwhite' onClick={(e)=>{e.preventDefault();createNewTracker();}}>Create Tracker</button>
                        
                    </div>
                </div>
            </div> 
    )
  }

export default NewTrackerModel