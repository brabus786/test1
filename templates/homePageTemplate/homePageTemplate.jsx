import React from 'react';
import styles from './homePageTemplate.module.scss';
import AddBooks from '../../components/addBooks/addBooks';
import Book from '../../components/book/book';
import BookDescription from '../../components/bookDescription/bookDescription';


const homePageTemplate = ({addBookButton, onclick, register, books, handelSelect, book, editBook, deleteBook }) => {


    let bookComponent = null;
    if(book){
        bookComponent = (
            <BookDescription 
                id={book._id}
                name={book.name}
                author={book.author}
                description={book.description}
                price={book.price}
                deleteBook={deleteBook}
                editBook={editBook}
            />
        )
    }
    

    return (
        <div className={styles.books}>
            <AddBooks
                onclick={onclick}
                register={register}
                addBookButton={addBookButton}
            />
            { bookComponent }
            <div className={styles.books__wrap}>
                {
                    books?.map((data,) => {
                        return (
                            <Book
                                key={data._id}
                                id={data._id}
                                name={data.name}
                                author={data.author}
                                price={data.price}
                                onclick={handelSelect}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default homePageTemplate;