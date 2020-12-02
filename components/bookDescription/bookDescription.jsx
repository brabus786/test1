import React from 'react'
import styles from './bookDescription.module.scss';

const BookDescription = ({id,name,author,description,price,editBook,deleteBook}) => {
    return (
        <div className={styles.bookDescription}>
            <div className={styles.bookDescription__buttons}>
                <span onClick={() => editBook(id)} className={styles.bookDescription__edit}>редактировать</span>
                <span onClick={() => deleteBook(id)} className={styles.bookDescription__delete}>удалить</span>
            </div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{author}</p>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default BookDescription;