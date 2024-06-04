import React from 'react'
import { useLoaderData} from 'react-router-dom'

const SingleBook = () => {
    const {_id,bookTitle,imageURL,authorName,category,bookDescription,bookPDFURL,price}=useLoaderData()
  return (
    // <div className='mt-28 px-4 lg:px-24'>
    //     <img src={imageURL} alt="" className='h-96'/>
    //   <h2>{bookTitle}</h2>
    // </div>
    <div className='grid grid-cols-2 gap-8 mt-28 px-4 lg:px-24'>
        <div className='col-span-1 px-4'>
           <img src={imageURL} alt="" className='h-96'/>
            <h2>{bookTitle}</h2>
        </div>
        <div className='col-span-1'>
            <h3 className='font-bold'>Book Details</h3>
            <ul className='mt-4 space-y-6'>
                <li><strong>Book ID :</strong> {_id}</li>
               <li><strong>Book Title :</strong> {bookTitle}</li>
                <li><strong>Author Name :</strong>{authorName} 
               {/* get the author name from the database */}
              </li>
                <li><strong>Category:</strong>{category}
                {/* get the category from the database */}
                </li>
                <li><strong>Book Description:</strong>{bookDescription} 
                {/* get the book description from the database */}
               </li>
               <li><strong>Book PDF URL:</strong>{bookPDFURL} 
                {/* get the book pdf url from the database */}
                </li>
               <li><strong>Price:</strong><span>$</span>{price} 
                {/* get the price from the database */}
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SingleBook