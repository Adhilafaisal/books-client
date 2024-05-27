import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import {} from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthProvider";

const Cart = () => {
  const [cart, refetch] = useCart();
 
 //calculate price
  const calculatePrice = (book) => {
    return book.price * book.quantity;
  }

  //handleDecrease

  const handleDecrease = (book) => {
    if(book.quantity > 1){
      const newQuantity = book.quantity - 1;
    if (newQuantity < 1) {
      return;
    }
    fetch(`http://localhost:3002/cart/${book._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  }else{
    alert("Item cannot be 0")
  }
}

    

  //handleIncrease

  const handleIncrease = (book) => {
    const newQuantity = book.quantity + 1;
    fetch(`http://localhost:3002/cart/${book._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  }
 

  //handle delete

  const handleDelete = (book) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3002/cart/${book._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="section-container ">
      {/* banner */}
      <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-teal-100 via-40% via-white to-100% to-teal-100">
        <div className="py-36 flex flex-col items-center justify-center gap-5">
          <div className="px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Items in your cart
            </h2>
          </div>
        </div>
      </div>

      {/* table for the cart */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-blue-600 text-white rounded">
              <tr>
                <th>No</th>
                <th>Book</th>
                <th>Title</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((book, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={book.imageURL} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-medium">{book.bookTitle}</td>
                  <td>
                    <button
                      className="btn btn-xs  hover:bg-blue-100"
                      onClick={() => handleDecrease(book)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={book.quantity}
                      onChange={(e) => e.target.value}
                      className="w-10 mx-2 text-center overflow-hidden appearance-none"
                    />
                    <button className="btn btn-xs  hover:bg-blue-100" onClick={() => handleIncrease(book)}>+</button>
                  </td>
                  <td>
                    <span>$</span>
                    {calculatePrice(book)}
                  </td>
                  <th>
                    <button
                      className="btn btn-ghost text-red-500 btn-xs"
                      onClick={() => handleDelete(book)}
                    >
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Shopping details */}
      <div className="my-12 mx-auto flex items-center justify-center">
        <div className=" space-y-3 ">
          <h3 className="font-medium">Shopping Details</h3>
          <p>Total Items:{cart.length}</p>
          <p>
            Total Price:$
            {cart.reduce((sum, book) => sum + book.price * book.quantity, 0).toFixed(2)}
          </p>
          <Link to="/checkout" className="btn bg-blue-600 ">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
