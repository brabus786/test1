import React from 'react';
import styles from './addBooks.module.scss';

const addBooks = ({onclick,register,addBookButton}) => {
    return (
        <div className={styles.addBooks}>
            <p>добавить книгу</p>
            <input ref={register} type="text" placeholder='name' name='name' />
            <input ref={register} type="text" placeholder='author' name='author' />
            <textarea ref={register} type="text" placeholder='description' name='description' />
            <input ref={register} type="number" placeholder='price' name='price' />

            <button onClick={() => onclick()}>{addBookButton?'добавить':'редактировать'}</button>
        </div>
    );
};

export default addBooks;