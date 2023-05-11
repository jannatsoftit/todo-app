import React, { useState } from 'react'

import style from './newtodo.module.css'

 const NewTodo = (prpos) => {

const [todo, setTodo] = useState({title: "", desc: ""})
const {title ,desc} = todo;

const handleInputChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
        return {...oldTodo, [name]: event.target.value};
    });
}

const handleSubmit = (event) => {
    event.preventDefault();
    prpos.onNewTodo(todo);
    setTodo({ title: "", desc: ""})
}

  return (
    
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor='title'>Title: </label>
            <input type='text' id="title" name='title' value={title} onChange={handleInputChange}/>
        </div>

        <div className={style["form-field"]}>
            <label htmlFor='desc'>Description: </label>
            <textarea type="text" name="desc" id="desc" value={desc} onChange={handleInputChange}/>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo;