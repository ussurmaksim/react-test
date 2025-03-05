import React from 'react';
import { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';
import { useFormatDate } from './components/formatDateContext';
import { AiFillEdit } from "react-icons/ai";
import UpdateTodo from "./components/updateTodo";


function TaskPage() {
    const location = useLocation();
    const { id, url  } = location.state || {}; // Получаем formatDate

    const [task, setTask] = useState({});
    const { formatDate } = useFormatDate();
    const [editTask, setEditTask] = useState(false);

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

    function edit(updatedTask) {
        console.log("Sending task:", updatedTask);
        axios.patch(`${url}/tasks/${id}`, {
            taskName: updatedTask.taskName,
            taskText: updatedTask.taskText
        })
            .then((response) => {
                // Обновляем состояние task после успешного обновления
                setTask(response.data);
            })
            .catch((error) => {
                console.error("Ошибка при выполнении запроса:", error);
            });
    }

    return (
        <div className="task-page">

            <Link to={"/ "} className="button-back">
                <button>
                    На главную
                </button>
            </Link>

            <div className="task">
                <AiFillEdit className="editTaskBtn" onClick={() => setEditTask(!editTask)} />

                <h1 className="task-name">{ task.taskName }</h1>
                <p className="task-description">{ task.taskText }</p>
                <p className="task-time">{ formatDate(task.timeCreated) }</p>
            </div>

            <div>
                {editTask && <UpdateTodo editTask = {edit} task={task} />}
            </div>

        </div>
    );



}

export default TaskPage;