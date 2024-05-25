import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import {} from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  // useEffect(() => {
  //   fetch("http://localhost:3002/all-books")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data));
  // }, []);

  //loading data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/all-books");
        const data = await response.json();
        // console.log(data)
        setBooks(data);
        setFilteredItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //filtering data based on category
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? books
        : books.filter((book) => book.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  //show all data
  const showAllItems = () => {
    setFilteredItems(books);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  //sorting data
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.bookTitle.localeCompare(a.bookTitle));
        break;
      // case "low-to-high":
      //   sortedItems.sort((a, b) => a.price - b.price);
      //   break;
      // case "high-to-low":
      //   sortedItems.sort((a, b) => b.price - a.price);
      //   break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  //pagination logic

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-28 px-4 lg:px24">
      <h2 className="text-5xl font-bold text-center mb-12">
        All Books are here
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
        {/* all category btns */}
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
          <button
            onClick={showAllItems}
            className={
              selectedCategory === "all"
                ? "bg-blue-700 px-4 py-2 rounded text-white font-medium"
                : "bg-blue-300 px-4 py-2 rounded text-white font-medium hover:bg-blue-400 transition duration-300"
            }
          >
            All
          </button>
          <button
            onClick={() => filterItems("Fiction")}
            className={
              selectedCategory === "Fiction"
                ? "bg-blue-700 px-4 py-2 rounded text-white font-medium"
                : "bg-blue-300 px-4 py-2 rounded text-white font-medium hover:bg-blue-400 transition duration-300"
            }
          >
            Fiction
          </button>
          <button
            onClick={() => filterItems("Fantasy")}
            className={
              selectedCategory === "Fantasy"
                ? "bg-blue-700 px-4 py-2 rounded text-white font-medium"
                : "bg-blue-300 px-4 py-2 rounded text-white font-medium hover:bg-blue-400 transition duration-300"
            }
          >
            Fantasy
          </button>
          <button
            onClick={() => filterItems("Thriller")}
            className={
              selectedCategory === "Thriller"
                ? "bg-blue-700 px-4 py-2 rounded text-white font-medium"
                : "bg-blue-300 px-4 py-2 rounded text-white font-medium hover:bg-blue-400 transition duration-300"
            }
          >
            Thriller
          </button>
          <button
            onClick={() => filterItems("Horror")}
            className={
              selectedCategory === "Horror"
                ? "bg-blue-700 px-4 py-2 rounded text-white font-medium"
                : "bg-blue-300 px-4 py-2 rounded text-white font-medium hover:bg-blue-400 transition duration-300"
            }
          >
            Horror
          </button>
          <button
            onClick={() => filterItems("Romantic")}
            className={
              selectedCategory === "Romantic"
                ? "bg-blue-700 px-4 py-2 rounded text-white font-medium"
                : "bg-blue-300 px-4 py-2 rounded text-white font-medium hover:bg-blue-400 transition duration-300"
            }
          >
            Romantic
          </button>
          <button
            onClick={() => filterItems("History")}
            className={
              selectedCategory === "History"
                ? "bg-blue-700 px-4 py-2 rounded text-white font-medium"
                : "bg-blue-300 px-4 py-2 rounded text-white font-medium hover:bg-blue-400 transition duration-300"
            }
          >
            History
          </button>
        </div>

        {/* sort btns */}
        <div className="flex justify-end mb-4 rounded-sm">
          <div className="bg-black p-2">
            <FaFilter className="h-4 w-4 text-white" />
          </div>

          {/* sorting options */}

          <select
            name="sort"
            onChange={(e) => handleSortChange(e.target.value)}
            id="sort"
            value={sortOption}
            className="bg-black text-white px-2 py-1 rounded-sm"
          >
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            {/* <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option> */}
          </select>
        </div>
      </div>
      {/* products cards */}
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {currentItems.map((book) => (
          <Card className="max-w-sm " key={book._id} book={book}>
            <img src={book.imageURL} alt="" className="hover:scale-105 transition duration-200 md:h-72 md:w-72 w-full" />

            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.bookTitle}</p>
            </h5>
            <div className="flex flex-row px-3 items-center justify-between">
              <p className="font-semibold">
                <span className="text-sm text-red-500">$</span>
                {book.price}
              </p>
              <button className="btn bg-blue-700 px-3 text-white rounded">
                Add to Cart
              </button>
            </div>
          </Card>
        ))}
      </div>
      {/* pagination */}

      <div className="flex justify-center my-8">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1
                ? "bg-blue-700 text-white"
                : "bg-blue-300 text-white hover:bg-blue-400 transition duration-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Shop;
