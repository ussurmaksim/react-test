import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai";
import { useFormatDate } from './formatDateContext';


function Todo({ todo, getId, url, deleteTask }) { // Принимаем formatDate как пропсу
    const navigate = useNavigate();


    const { formatDate } = useFormatDate();


    const handleClick = () => {
        const id = getId(todo);
        navigate("/Task-page", {
            state: { id: id, url: url} // Передаем formatDate
        });
    };

    return (
        <div className={"todo-block"} >
            <div className="todoButtons">
                <AiFillCloseCircle className="deleteTaskBtn" onClick={() => deleteTask(getId(todo))} />
            </div>
            <div onClick={ handleClick }>
                <Link
                    to={{
                        pathname: "/Task-page",
                        state: { id: getId(todo), url: url}
                    }}
                >
                    <h3 className={"todoText"}>{ todo.taskName }</h3>
                    <p className={"description"}>{ todo.taskText }</p>
                    <p className={"status"}>{formatDate(todo.timeCreated)}</p>
                </Link>
            </div>
        </div>
    );
}

export default Todo;