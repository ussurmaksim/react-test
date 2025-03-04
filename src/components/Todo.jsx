import React from "react";
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import {Link } from 'react-router';
import Test from "../test-page";


class Todo extends React.Component {
    render() {
        const todo  = this.props.todo;
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
            <div className={"todo-block"} onClick={() => {this.props.getId(todo)}}>
                <div>
                    <h1>
                        <Link to="/Test" element={<Test />}/>
                    </h1>
                </div>

                <h3 className={"todoText"}>{todo.taskName}</h3>
                <p className={"description"}>{todo.taskText}</p>
                <p className={"status"}>{formattedTime}</p>
            </div>
        )


    }
}

export default Todo