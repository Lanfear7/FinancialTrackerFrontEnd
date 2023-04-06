import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { addUserTracker, triggerTrackerPopUp, queryTrackers } from '../../../Redux/Slices/trackerSlice'
import TrackerPopup from '../Trackers/NewTrackerPopUp'

function DashboardTracker() {

    //Redux
    const {user} = useSelector((state)=> state.User)
    const {JWT} = useSelector((state)=>state.User)
    const {trackers} = useSelector((state) => state.Tracker)
    const {trackerPopUp, trackerQuery} = useSelector((state) => state.Tracker)
    const dispatch = useDispatch()

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
                    dispatch(addUserTracker(trackerTransactionsArray))                    
                }
            }).catch((error) => {
                console.log(error)
                if(error.response.data){
                    console.log(error.response.data)
                    dispatch(addUserTracker([])) 
                }
            })
        }
    },[user,trackerQuery])

  return (
    <div className='pb-5'>
        <h1 className='text-4xl text-FTwhite pl-2 lg:pl-16 mt-6'>Trackers</h1>
        <div className='text-FTwhite m-5 lg:pl-24'>
            <button onClick={(e)=>{e.preventDefault(); dispatch(triggerTrackerPopUp(!trackerPopUp))}} className='text-xl bg-FTgreen text-FTblack px-3 py-2 rounded-md w-[200px] hover:text-FTwhite hover:cursor-pointer shadow-xl'>Create New Tracker</button>
        </div>
        <div className='w-full h-full md:px-24 mt-10 flex flex-wrap justify-evenly'>
            {
                trackers.length > 0 ?
                    trackers.map((tracker, i) => {
                        let total = 0
                        let error = false
                        if(tracker.tracker){
                            return(
                                <div className='w-[300px] bg-FTgray rounded-lg p-2 h-[400px] m-3 shadow-lg'>
                                    <div className='relative h-0 w-0'>
                                        <figure className='absolute h-8 w-8 left-[250px] m-0' onClick={()=>DeleteTracker(tracker.tracker.id)}>
                                            <GrClose className='w-full h-full bg-FTgreen hover:bg-[#41a886] hover:cursor-pointer rounded-md relative p-1'/>
                                        </figure>
                                    </div>
                                    <h1 className='text-FTwhite text-2xl table-auto text-center py-3 pt-8 border-b border-FTgreen'>{tracker.tracker.name.charAt(0).toUpperCase()+ tracker.tracker.name.slice(1)}</h1>
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
                                                            <tr className='hover:bg-FTgreen hover:text-FTblack hover:cursor-pointer'>
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
            trackerPopUp &&
            <TrackerPopup />
        }
        
    </div>
  )

  function addTransaction(e,Id){
        const amount = e.target.previousSibling.value
        if(isNaN(amount)){
            return false
        }
        let MyDate = new Date();
        let MyDateString = MyDate.getFullYear()  + '-'
         + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'
         + ('0' + MyDate.getDate()).slice(-2) + 'T00:00:00';

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
                dispatch(queryTrackers(!trackerQuery))
            }
        }).catch(error=>{
            console.log(error)
        })

    }

  function DeleteTracker(Id){
        console.log('pop to confirm deletion', Id)
        const configuration = {
            headers: { Authorization: `Bearer ${JWT}` }
        }
        axios.delete(`https://localhost:44320/api/Dashboard/CurrentUser/Trackers/Delete/${Id}`,
        configuration)
        .then(res=>{
            dispatch(queryTrackers(!trackerQuery))
            if(res.status == 200){
                console.log('remove', Id)
            }
        }).catch(error =>{
            console.log(error)
        })
    }

}

export default DashboardTracker