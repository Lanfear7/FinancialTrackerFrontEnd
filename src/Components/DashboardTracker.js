import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr'

function DashboardTracker() {

    const [createTracker, setCreateTracker] = useState(false)

    const [trackerItems, setTrackerItems] = useState ([])

  return (
    <div className='pb-5'>
        <h1 className='text-4xl text-FTwhite lg:pl-16 mt-6'>Trackers</h1>
        <div className='text-FTwhite m-5 lg:pl-24'>
            <button onClick={(e)=>{e.preventDefault(); setCreateTracker(true)}} className='text-xl bg-FTgreen text-FTblack px-3 py-2 rounded-md w-[200px] hover:text-FTwhite hover:cursor-pointer shadow-xl'>Create New Tracker</button>
        </div>
        <div className='w-full h-full md:px-24 mt-10 flex flex-wrap justify-center'>
            {
                <div className='w-[300px] bg-FTgray rounded-lg p-2 max-h-96'>
                    <h1 className='text-FTwhite text-2xl table-auto text-center py-3 border-b border-FTgreen'>Food Tracker</h1>
                    <table className='w-full table-auto text-FTwhite my-4'>
                        <thead>
                            <tr>
                                <td className='pl-3 border-b border-FTblack text-lg'>Date</td>
                                <td className='pl-3 border-b border-FTblack text-lg'>Cost</td> 
                            </tr>
                        </thead>
                        <tbody>
                        {
                            <tr>
                                <td className='pl-3'>2022-05-12</td>
                                <td className='pl-3'>$23.42</td>
                            </tr>
                        }
                        </tbody>
                    </table>
                    <div className='w-full h-[75px] flex flex-wrap justify-around items-center py-3 border-t border-FTgreen'>
                        <input type='text' placeholder='Cost' className='h-7'></input>
                        <button className='bg-FTgreen text-FTblack px-3 rounded-md basis-[25%]'>Enter</button>
                        <h1 className='text-red-600 text-xl'>error</h1>
                    </div>
                </div>
            }
        </div>

        {   
            createTracker &&
                <div className='fixed top-0 w-full h-screen bg-FTgrayFade flex justify-center items-center'>
                    <div className='w-screen bg-FTwhite h-screen md:h-2/3 md:w-1/2 z-10'>
                        <div className='w-full flex justify-end relative right-5 top-5'>
                            <figure onClick={()=>setCreateTracker(false)} className='m-0 w-8 h-8 hover:cursor-pointer'>
                                <GrClose className='w-full h-full bg-FTgreen rounded-md relative'/>
                            </figure>
                        </div>
                        <h1 className=' mb-5 text-center text-xl mt-14'>New Tracker</h1>
                        <div className='mx-auto w-3/4 h-400px'>
                            <label>Tracker Name</label>
                            <input type='text'></input>
                            <div className='h-[200px] overflow-y-scroll'>
                                {
                                    trackerItems.length > 0 ?
                                        <ul>
                                            <li></li>
                                        </ul>
                                    :
                                        <div className='w-full h-full flex justify-center items-center'>
                                            <h1>No items in tracker yet...</h1>
                                        </div>

                                }
                            </div>
                            <form className='w-full flex justify-between'>
                                <input type='text' placeholder='Add Item'></input>
                                <button className='bg-FTgreen rounded-md px-2'>Add</button>
                            </form>
                            <button className='bg-FTgreen rounded-md mt-5 px-5'>Create Tracker</button>
                        </div>
                    </div>
                    
                </div> 
        }
        
    </div>
  )
}

export default DashboardTracker