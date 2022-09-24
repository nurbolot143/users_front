import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BookCart } from "../../components";
import { fetchBooks } from "../../redux/slices/books";
import { fetchAddUserBook } from "../../redux/slices/users";

import style from './addUserBook.module.scss'

export const AddUserBook = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const books = useSelector(store => store.books);

  const isBooksLoading = books.status === 'loading'
  const isBooksError = books.status === 'error'

  const handleClick = (bookId) => {
    dispatch(fetchAddUserBook({ id, bookId }))
    navigate(`/users/${id}`)
  }

  console.log(books);

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  const bookList = isBooksLoading ? null : isBooksError ? null :
    books.items.map(item => <BookCart key={item.id} handleClick={handleClick} data={item} />)

  return <section className={style.addBook}>
    <div className="container">
      <div className={style.wrapper}>
        {bookList}
      </div>
    </div>
  </section>
};
