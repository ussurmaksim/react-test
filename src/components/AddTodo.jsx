import React from "react";
import axios from "axios";

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
            const response = await axios.post(baseUrl, todoAdd); // Замените '/api/todos' на ваш URL API

            // Обрабатываем успешный ответ
            console.log("Задача успешно добавлена:", response.data);

            // Вызываем функцию addTodo из props для обновления списка задач в родительском компоненте
            this.props.addTodo(response.data); // Передаём данные, возвращенные сервером (включая ID, если есть)

            // Очищаем форму
            this.setState({ taskName: "", taskText: "" });
            this.myForm.reset(); // Очищаем форму
        } catch (error) {
            // Обрабатываем ошибки
            console.error("Ошибка при добавлении задачи:", error);
            alert("Произошла ошибка при добавлении задачи. Пожалуйста, попробуйте позже.");
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
                        this.props.getTasks();
                    }}
                >
                    <input
                        type="text"
                        placeholder="Название задачи"
                        value={this.state.taskName} // Используем controlled components
                        onChange={(e) => this.setState({ taskName: e.target.value })}
                        required // Добавляем обязательность заполнения поля
                    />
                    <input
                        type="text"
                        placeholder="Описание задачи"
                        value={this.state.taskText} // Используем controlled components
                        onChange={(e) => this.setState({ taskText: e.target.value })}
                        required // Добавляем обязательность заполнения поля
                    />
                    <button type="submit">Добавить</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;