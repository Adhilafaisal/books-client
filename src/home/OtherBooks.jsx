import React,{useState,useEffect} from 'react'
import BookCards from '../components/BookCards'

const OtherBooks = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
     fetch("http://localhost:3002/all-books").then(res=>res.json()).then(data =>setBooks(data.slice(5,13)))
    },[])
  return (
    <div>
        <BookCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks