import React, { useState,useEffect } from "react";
import BannerCard from "../home/BannerCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// const Banner = () => {
  
//   //to a search a book by its name
//   const [search, setSearch] = useState("");
  
//   const handleSearch = (e) => {
//     setSearch(e.target.value);

//     console.log(search);
//   }

 

//   return (
//     <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
//       <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
//         {/* left side */}
//         <div className="md:w-1/2 space-y-8 h-full">
//           <h2 className="text-5xl font-bold leading-snug text-black">
//             Buy and Sell Your Books
//           </h2>
//           <p className="md:w-4/5">
//             Find and read more books you'll love.Be part of Goodbooks,the
//             world's largest community for readers like you.
//           </p>
//           <div>
//             <input
//               type="search"
//               name=""
//               id=""
//               placeholder="Search a book"
//               className="py-2 px-2 rounded-s-sm outline-none"
              
//             />
//             <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200" onClick={handleSearch} >
            
//               Search
//             </button>
//           </div>
//         </div>

//         {/* right side */}
//         <div>
//           <BannerCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;



// const Banner = () => {
//     const [search, setSearch] = useState("");
//     const [results, setResults] = useState([]);

//     const handleSearchChange = (e) => {
//         setSearch(e.target.value);
//     };

//     const handleSearch = async () => {
//         if (!search.trim()) {
//             Swal.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: "Please enter a search term",
//             });
//             return;
//         }

//         try {
//             const response = await fetch(`http://localhost:3002/search?q=${search}`);
//             if (!response.ok) {
//                 throw new Error(`Request failed: ${response.status} ${response.statusText}`);
//             }
//             const data = await response.json();
//             setResults(data);
//             if (data.length === 0) {
//                 Swal.fire({
//                     icon: "info",
//                     title: "No results",
//                     text: "No books found matching your search term",
//                 });
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             Swal.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: "Something went wrong with the search",
//             });
//         }
//     };

//     return (
//         <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
//             <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
//                 {/* left side */}
//                 <div className="md:w-1/2 space-y-8 h-full">
//                     <h2 className="text-5xl font-bold leading-snug text-black">
//                         Buy and Sell Your Books
//                     </h2>
//                     <p className="md:w-4/5">
//                         Find and read more books you'll love. Be part of Goodbooks, the
//                         world's largest community for readers like you.
//                     </p>
//                     <div>
//                         <input
//                             type="search"
//                             placeholder="Search a book"
//                             className="py-2 px-2 rounded-s-sm outline-none"
//                             value={search}
//                             onChange={handleSearchChange}
//                         />
//                         <button
//                             className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200"
//                             onClick={handleSearch}
//                         >
//                             Search
//                         </button>
//                     </div>
//                 </div>

//                 {/* right side */}
//                 <div>
//                     <BannerCard />
//                 </div>
//             </div>

//             {/* Display search results */}
//             <div className="search-results">
//                 {results.length > 0 && (
//                     <div>
//                         <h3 className="text-2xl font-bold">Search Results</h3>
//                         <ul>
//                             {results.map(book => (
//                                 <li key={book._id}>
//                                     <h4 className="text-xl font-semibold">{book.bookTitle}</h4>
//                                     <p>{book.authorName}</p>
//                                     <img src={book.imageURL} alt={book.bookTitle} width="100" />
//                                     <p>{book.price}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Banner;


const Banner = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
      setSearch(e.target.value);
  };

  const handleSearch = () => {
      if (!search.trim()) {
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Please enter a search term",
          });
          return;
      }

      navigate(`/search/${search}`);
  };

  return (
      <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
          <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
              {/* left side */}
              <div className="md:w-1/2 space-y-8 h-full">
                  <h2 className="text-5xl font-bold leading-snug text-black">
                      Buy and Sell Your Books
                  </h2>
                  <p className="md:w-4/5">
                      Find and read more books you'll love. Be part of Goodbooks, the
                      world's largest community for readers like you.
                  </p>
                  <div>
                      <input
                          type="search"
                          placeholder="Search a book"
                          className="py-2 px-2 rounded-s-sm outline-none"
                          value={search}
                          onChange={handleSearchChange}
                      />
                      <button
                          className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200"
                          onClick={handleSearch}
                      >
                          Search
                      </button>
                  </div>
              </div>

              {/* right side */}
              <div>
                  <BannerCard />
              </div>
          </div>
      </div>
  );
};

export default Banner;
