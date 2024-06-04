import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const SearchResults = () => {
    const { searchTerm } = useParams();
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch(`http://localhost:3002/search?q=${searchTerm}`);
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Request failed: ${response.status} ${response.statusText} - ${errorText}`);
                }
                const data = await response.json();
                setResults(data);
                if (data.length === 0) {
                    Swal.fire({
                        icon: "info",
                        title: "No results",
                        text: "No books found matching your search term",
                    });
                }
            } catch (error) {
                console.error('Error:', error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong with the search",
                });
            }
        };

        fetchResults();
    }, [searchTerm]);

    return (
        <div className="search-results mt-24 flex justify-center container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="p-4">
                    <h3 className="text-2xl font-bold">Search Results for "{searchTerm}"</h3>
                    {results.length > 0 ? (
                        <ul className="grid grid-cols-1 gap-4">
                            {results.map(book => (
                                <li key={book._id} className="bg-white rounded-lg shadow-md p-4">
                                    <h4 className="text-xl font-semibold">{book.bookTitle}</h4>
                                    <p className="text-gray-600">{book.authorName}</p>
                                    <img src={book.imageURL} alt={book.bookTitle} className="mt-2 h-80 w-45 object-cover" />
                                    <p className='mt-2'>{book.bookDescription}</p>
                                    <p className="text-gray-600 mt-2">Price: ${book.price}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">No books found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;