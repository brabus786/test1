import React from 'react';
import styles from './book.module.scss';

const Book = ({id,name,author,price,onclick}) => {
    return (
        <div onClick={() => onclick(id)} className={styles.Book}>
            <p className={styles.Book__name}>{name}</p>
            <p className={styles.Book__author}>{author}</p>
            <p className={styles.Book__price}>{price}</p>
        </div>
    );
};

export default Book;