import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'flowbite-react'
import FavBook from '../home/FavBook'


const Dashboard = () => {

  return (

    <div className="min-h-screen flex flex-col">
     <div className="flex justify-between px-4 py-2 bg-blue-100">
       <h1 className="text-2xl font-bold">Dashboard</h1>
       <div className="flex items-center">
        <Link to="/admin/dashboard/upload" className="mr-4">
           <button
             type="button"
             className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
             Upload Books
          </button>
         </Link>          
         <Link to="/admin/dashboard/manage" className="mr-4">
            <button
              type="button"
             className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Manage Books
            </button>
         </Link>
       </div>
     </div>
     <div  style={{marginTop: "2rem"}} className="flex flex-wrap justify-center gap-4 p-4 ">
       <Card className="w-1/3 p-4 bg-blue-300">
         <h2 className="text-2xl font-bold">New Books</h2>
         <p className="text-lg">
          Here you can upload new books. You can add books from here.
       </p>
       </Card>
        <Card className="w-1/3 p-4 bg-blue-300">
        <h2 className="text-2xl font-bold">New Users</h2>
         <p className="text-lg">
           Here you can add new users.
        </p>
       </Card>
    </div>
    <div className='flex justify-center'>
      <FavBook className="rounded md:w-10/12" />
    </div>
   </div>

   
  )
}

export default Dashboard