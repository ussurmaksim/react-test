import React from "react";
import Todo from "./Todo"
import AddTodo from "./AddTodo";


class Todoes extends React.Component {

    render() {
           return (
               <div className={"todos"}>
                   <div className={"todo-header"}>
                       <AddTodo
                           addTodo = {this.props.addTodo}
                           url={this.props.url}
                           addNewTask={this.props.addNewTask}
                       />
                   </div>

                   <div className="task-list-wrapper">
                       {
                           (Array.isArray(this.props.todos) && this.props.todos.length > 0) ? (
                               this.props.todos.map((todo) => (
                                   <Todo
                                       todo={todo} key={todo.id}
                                       getId ={this.getId}
                                       url={this.props.url}
                                       deleteTask={this.props.deleteTask}
                                       formatDate = {this.props.formatDate}
                                   />
                               ))
                           ) : (
                               <div className={"todo-block"}>
                                   <h3>{this.props.todos.length > 0 ? "Произошла ошибка" : "Задач нет"}</h3>
                               </div>
                           )
                       }
                   </div>
               </div>
           )


       }
    getId (task) {
        return task.id;
    }
}



export default Todoes;