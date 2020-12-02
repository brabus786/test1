import React,{ useState,useEffect } from 'react';
import Layout from '../components/layout/layout';
import HomePageTemplate from '../templates/homePageTemplate/homePageTemplate';
import { useForm } from "react-hook-form";
import { addBooks,allBooks,oneBook,deleteBook,editBook } from "../UTILS/api";

export default function Home() {

  const [books,setBooks] = useState([]);
  const [book,setBook] = useState(undefined);
  const [addBookButton,setAddBookButton] = useState(true);

  const { register, handleSubmit, watch, errors, setValue } = useForm();
  
  const data = new Date();
  const year = data.getFullYear();
  const month = data.getMonth();
  const dey = data.getDate();
  const dataString = dey + ' ' + month + ' ' + year;

  const clineForm = () => {
    setValue('name','');
    setValue('author','');
    setValue('description','');
    setValue('price','');
  }
  
  const getBooks = async () => {
    const res = await allBooks();
    if(res.data){
      setBooks(res.data);
      setValue('')
    }
  }

  const addBook = async (data) =>{
    const res = await addBooks(data);
    if(res.data === 200){
      getBooks();
      clineForm();
    }
  }

  
  const submitBook = (data) => {
    addBook({...data, ...{date:dataString}});
  }

  const submitEditBook = async(data) => {
   const res = await editBook({formData:{...data, ...{date:dataString}},id:book._id});
   if(res.data.ok === 1){
     getBooks();
     clineForm();
     setAddBookButton(true);
     handelSelect(book._id);
   };
  }

  const handelSelect = async (id) => {
    const res = await oneBook(id);
    setBook(res.data);
  }


  useEffect(() => {
    getBooks();
  },[]);

  const editBookClick = (id) => {
      setValue('name',book.name);
      setValue('author',book.author);
      setValue('description',book.description);
      setValue('price',book.price);
      setAddBookButton(false);
      console.log(book,id)
  }


  const deleteBookClick = async (id) => {
    const res = await deleteBook({id:id});
    if(res.data.ok === 1){
      setBook(undefined);
      getBooks();
    }
  }

  return (
    <div>
      <Layout>
        <HomePageTemplate 
          onclick={handleSubmit(addBookButton?submitBook:submitEditBook)}
          register={register}
          books={books}
          handelSelect={handelSelect}
          book={book}
          deleteBook={deleteBookClick}
          editBook={editBookClick}
          addBookButton={addBookButton}
        />
      </Layout>
    </div>
  )
}
