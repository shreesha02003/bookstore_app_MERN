import React from 'react'
import axios from "axios";
import Spinner from "../spinner";
import {Link} from 'react-router-dom';
import {AiOutlineEdit} from "react-icons/ai";
import {BsInfoCircle} from "react-icons/bs";
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
//import "../styles/home.css";

function booksTable({books}) {
  return (
    <table className='w-full border-separated border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Title</th>
          <th className='border border-slate-600 rounded-md:hidden'>Author</th>
          <th className='border border-slate-600 rounded-md:hidden'>Publish Year</th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.title}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.author}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {book.year}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              <div className="flex justify-center gap-x-4">
                <div key={`details-${book._id}`}>
                  <Link to={`books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>
                </div>
                <div key={`edit-${book._id}`}>
                  <Link to={`books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                  </Link>
                </div>
                <div key={`delete-${book._id}`}>
                  <Link to={`books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default booksTable
