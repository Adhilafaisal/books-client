import React,{useState} from 'react'

import { useLoaderData, useParams } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

const EditBooks = () => {
  const {id}=useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL,price}=useLoaderData();
 
  const bookCategories = [
    "Fiction",
    "Fantasy",
    "Thriller",
    "Romantic",
    "Humor",
    "Horror",
    "Children",
    "History",
  ];
  const [selectedBookCategory, setselectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setselectedBookCategory(event.target.value);
  };

  //handle book submission

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    const price = form.price.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
      price,
    };

    // console.log(bookObj);
    //update book
    fetch(`http://localhost:3002/book/${id}`,{
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json()).then(data => {
        // console.log(data);
        alert("Book is updated successfully");
        
      })

  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the Book</h2>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-{1180px} flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book name"
              required
              defaultValue={bookTitle}
            />
          </div>
          {/* authorname */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
              defaultValue={authorName}
            />
          </div>
        </div>
        {/* second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book image URL"
              required
              defaultValue={imageURL}
            />
          </div>
          {/* category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/*bookDescription*/}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write Your book description..."
            className="w-full"
            required
            rows={5}
            defaultValue={bookDescription}
          />
        </div>

        {/* book pdf link */}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            type="text"
            placeholder="book pdf url"
            required
            defaultValue={bookPDFURL}
          />
        </div>

        {/* price */}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Book Price" />
          </div>
          <TextInput
            id="price"
            name="price"
            type="text"
            placeholder="book price"
            required
            defaultValue={price}
          />
        </div>

        {/* <button type="submit" className="text-center bg-blue-700 rounded text-white mt-5">Upload Book</button> */}

        <div className="md:mx-96 mt-5">
          <Button type="submit" className="bg-teal-700">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditBooks