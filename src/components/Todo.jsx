import React from "react";

class Todo extends React.Component {
    render() {

        return (
            <div className={"todo-block"}>
                <h3 className={"todoText"}>{this.props.todo.taskName}</h3>
                <p className={"description"}>{this.props.todo.taskText}</p>
                <p className={"status"}>{this.props.todo.data}</p>
            </div>
        )
    }
}

export default Todo