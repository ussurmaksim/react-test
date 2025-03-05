import React from "react";
import axios from "axios";
import {ToastContainer, toast, Slide} from 'react-toastify';


class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskName: "",
            taskText: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async () => {
        // Проверяем, что название задачи и текст задачи не пустые
        if (!this.state.taskName || !this.state.taskText) {
            alert("Пожалуйста, заполните все поля!");
            return;
        }

        const todoAdd = {
            taskName: this.state.taskName,
            taskText: this.state.taskText,
        };
        const baseUrl = this.props.url;

        try {
            // Отправляем POST-запрос на ваш API
            const response = await axios.post(baseUrl + "/tasks", todoAdd); // Замените '/api/todos' на ваш URL API

            // Обрабатываем успешный ответ
            console.log("Задача успешно добавлена:", response.data);

            // Вызываем функцию addTodo из props для обновления списка задач в родительском компоненте
            this.props.addNewTask(response.data); // Передаём данные, возвращенные сервером (включая ID, если есть)



            // Очищаем форму
            this.setState({ taskName: "", taskText: "" });
            this.myForm.reset(); // Очищаем форму
            toast.success("Task updated successfully!");
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.error);
                // Сервер вернул ошибку с кодом (например, 400 Bad Request)
                const errorMessage = error.response.data.error + " " + error.response.data.status || "Error updating task";
                toast.error(errorMessage); // Уведомление об ошибке
            } else {
                // Ошибка на стороне клиента или сети
                toast.error("Network error or client-side issue");
            }
        }
    };

    render() {
        return (
            <div className="AddTodo">
                <form

                    ref={(el) => (this.myForm = el)}
                    onSubmit={(e) => {
                        e.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы
                        this.handleSubmit();

                    }}
                >
                    <div className="formTasks">
                        <input
                            className="inputTask"
                            type="text"
                            placeholder="Название задачи"
                            value={this.state.taskName} // Используем controlled components
                            onChange={(e) => this.setState({ taskName: e.target.value })}
                            // required // Добавляем обязательность заполнения поля
                        />
                        <textarea
                            className="TextareaTask"
                            placeholder="Описание задачи"
                            value={this.state.taskText} // Используем controlled components
                            onChange={(e) => this.setState({ taskText: e.target.value })}
                            // required // Добавляем обязательность заполнения поля
                        />
                    </div>
                    <div className="submitBtn__wrapper">
                        <button type="submit">Добавить</button>
                    </div>

                </form>
                <ToastContainer
                    position="top-left"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={false}
                    theme="dark"
                    transition={Slide}
                />
            </div>
        );
    }
}

export default AddTodo;