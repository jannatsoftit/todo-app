import React from "react";

import style from "./todo.module.css"

const Todo = (props) => {

    const {title, desc} = props.todo;
    const {id} = props;

    const handleClick = (id) => {
        props.onRemoveItem(id);
    };

    return(
        <article className={style.todo}>
            <div>
                <h3>{title}</h3>
                <p className={style.p}>{desc}</p>
            </div>
            <div>
                <button className={style.btn} onClick={() => {handleClick(id)}}>
                    <i className="fa fa-trash fa-1x"></i>
                </button>
            </div>
        </article>
    )
}

export default Todo;