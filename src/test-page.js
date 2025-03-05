import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import axios from 'axios';
import {ru} from "date-fns/locale";

function Test() {
    const location = useLocation();
    const { id, url } = location.state || {};

    const [task, setTask] = useState({});


    React.useEffect(() => {
        if (id && url) {
            axios.get(`${url}/tasks/${id}`)
                .then((response) => {
                    setTask(response.data);
                })
                .catch((error) => {
                    console.error("Ошибка при выполнении запроса:", error);
                });
        }
    }, [id, url]);

    let formattedTime = '';

    if (task && task.timeCreated) {
        try {
            const date = new Date(task.timeCreated);
            formattedTime = format(date, 'PPpp', { locale: ru });
        } catch (error) {
            console.error("Ошибка при форматировании даты:", error);
            formattedTime = 'Неверная дата';
        }
    } else {
        formattedTime = 'Нет данных';
    }

    return (
        <div onClick={() => {
            console.log(url);
        }}>
            <h1>{task.taskName}</h1>
            <p>{task.taskText}</p>
            <p>{formattedTime}</p>
        </div>
    );
}

export default Test;