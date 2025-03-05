import React from "react";
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai";

function Todo({ todo, getId, url }) {
    const navigate = useNavigate();

    const handleClick = () => {
        const id = getId(todo); // Получаем ID здесь
        navigate("/Test", {
            state: { id: id, url: url, todo: todo } // Передаем ID и URL через state
        });
    };

    let formattedTime = '';

    if (todo && todo.timeCreated) {
        try {
            const date = new Date(todo.timeCreated);
            formattedTime = format(date, 'PPpp', { locale: ru });
        } catch (error) {
            console.error("Ошибка при форматировании даты:", error);
            formattedTime = 'Неверная дата';
        }
    } else {
        formattedTime = 'Нет данных';
    }

    return (
        <div className={"todo-block"} onClick={handleClick}>
            <Link
                to={{
                    pathname: "/Test",
                    state: { id: getId(todo), url: url, todo: todo } // Передаем данные через state
                }}
            >
                <AiFillCloseCircle className=""/>
                <h3 className={"todoText"}>{todo.taskName}</h3>
                <p className={"description"}>{todo.taskText}</p>
                <p className={"status"}>{formattedTime}</p>
            </Link>
        </div>
    );
}

export default Todo;