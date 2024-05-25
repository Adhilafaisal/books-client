import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6"


const BookCards = ({headline,books}) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  }
  return (
    <div className='my-16 px-4 lg:px-24 '>
        <h2 className='text-5xl text-center font-bold text=black my-5'>{headline}</h2>

        {/* cards */}
        <div className='mt-12 '>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        
       {
        books.map(book =><SwiperSlide className='my-14' key={book._id}>
            <Link to={`/book/${book._id}`}>
                <div className='relative '>
                    <img src={book.imageURL} alt="" className='hover:scale-105 transition duration-200 md:h-72' />
                    <div className={`absolute top-3 right-3 ${isHeartFilled ? 'bg-red-500' : 'bg-blue-700'}`} onClick={handleHeartClick}>
                    <FaHeart className='w-4 h-4 text-white'/>
                    </div>
                </div>
                <div>
                   <div>
                   <h3 className='font-bold'>{book.bookTitle}</h3>
                    <p className='text-base'>{book.authorName}</p>
                   </div>
                   <div className='flex flex-row px-3 items-center justify-between'>
                    <p className='font-semibold'><span className='text-sm text-red-500'>$</span>{book.price}</p>
                    <button className='btn bg-blue-700 px-3 text-white rounded'>Add to Cart</button>
                   </div>
                </div>
            </Link>
        </SwiperSlide>)
       }
      </Swiper>
        </div>
    </div>
  )
}

export default BookCards