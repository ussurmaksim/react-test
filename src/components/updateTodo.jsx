import React from "react";

class UpdateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: "",
            taskText: ""
        };
    }

    componentDidMount() {
        // Устанавливаем начальное состояние с значениями из props
        this.setState({
            taskName: this.props.task.taskName,
            taskText: this.props.task.taskText
        });
    }

    render() {
        return (
            <form
                ref={(el) => (this.myForm = el)}
                onSubmit={(e) => {
                    e.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы
                    this.props.editTask({
                        taskName: this.state.taskName,
                        taskText: this.state.taskText
                    });
                    this.setState({
                        taskName: "",
                        taskText: ""
                    })
                    // this.myForm.reset(); // Очищаем форму
                }}
                className="update-task-form"
            >
                <input
                    value={this.state.taskName}
                    className="inputTask"
                    type="text"
                    onChange={(e) => this.setState({ taskName: e.target.value })}
                />
                <textarea
                    value={this.state.taskText}
                    className="TextareaTask"
                    onChange={(e) => this.setState({ taskText: e.target.value })}
                />
                <div className="submitBtn__wrapper">
                    <button type="submit">Обновить</button>
                </div>
            </form>
        );
    }
}

export default UpdateTodo;