import React from "react";
import Todo from "./Todo"
import AddTodo from "./AddTodo";

class Todos extends React.Component {
    render() {

           return (
               <div className={"todos"}>
                   <div className={"todo-header"}>
                       <AddTodo addTodo = {this.props.addTodo} url={this.props.url} getTasks ={this.props.getTasks} />
                   </div>
                   {
                       (Array.isArray(this.props.todos) && this.props.todos.length > 0) ? (
                           this.props.todos.map((todo) => (
                               <Todo todo={todo} key = {todo.id}/>
                           ))
                       ) : (
                           <div className={"todo-block"}>
                               <h3>Произошла ошибка либо задач нема</h3>
                           </div>
                       )
                   }
                   <div>
                       <button type={"button"}></button>
                   </div>
               </div>
           )
       }
}



export default Todos;