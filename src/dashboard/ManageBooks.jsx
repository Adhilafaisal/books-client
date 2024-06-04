import React, { useState, useEffect } from "react";
import { Table,Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, [allBooks]);

  //delete book
  const handleDelete= (id) => {
    console.log(id);
    fetch(`http://localhost:3002/book/${id}`,{
      method: "DELETE",
    }).then(res=>res.json()).then(data=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Book deleted successfully",
        showConfirmButton: false,
        timer: 1500
      });
      // setAllBooks(data)
    })
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

      {/* table */}

      <Table className="bg-base-700 lg:w-{1180px} border border-1px-solid ">
        <Table.Head>
          <Table.HeadCell className="border-b-2 border-r-2 border-r-slate-600 
          ">No.</Table.HeadCell>
          <Table.HeadCell className="border-b-2 border-r-2 border-r-slate-600">Book name</Table.HeadCell>
          <Table.HeadCell className="border-b-2 border-r-2 border-r-slate-600">Author Name</Table.HeadCell>
          <Table.HeadCell className="border-b-2 border-r-2 border-r-slate-600">Category</Table.HeadCell>
          <Table.HeadCell className="border-b-2 border-r-2 border-r-slate-600">Prices</Table.HeadCell>
          <Table.HeadCell className="border-b-2 border-r-2 border-r-slate-600">
            <span>Update</span>
          </Table.HeadCell>
        </Table.Head>

        {allBooks.map((book,index) => 
          <Table.Body className="divide-y  border-y-4 " key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 ">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-b-2 border-r-2 border-r-slate-600">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white border-b-2 border-r-2 border-r-slate-600">
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell className="border-b-2 border-r-2 border-r-slate-600">{book.authorName}</Table.Cell>
              <Table.Cell className="border-b-2 border-r-2 border-r-slate-600">{book.category}</Table.Cell>
              <Table.Cell className="border-b-2 border-r-2 border-r-slate-600"><span>$</span>{book.price}</Table.Cell>
              <Table.Cell className="border-b-2 border-r-2 border-r-slate-600">
               <Button> <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                >
                  Edit
                </Link></Button>
                <Button
                  onClick={() => handleDelete(book._id)}
                  className="bg-red-600 mt-2 font-semibold text-black rounded-sm hover:bg-sky-600"
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>)
        }
      </Table>
    </div>
  );
};

export default ManageBooks;
