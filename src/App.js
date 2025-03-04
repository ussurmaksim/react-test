import React from "react";
import Todoes from "./components/todoes";
import './css/main.css'
import axios from 'axios'
let url = "/tasks"
const baseUrl = `https://d3077d79868ad10e7f3fab9784688186.serveo.net${url}`;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios.get(baseUrl, {
            headers: {
                'bypass-ngrok-warning': 'any-value', // Добавьте этот заголовок
            },
        })
            .then(response => {
                this.setState({todos: response.data}); // API returns the array directly
            })
            .catch(error => {
                console.error("Ошибка при получении данных:", error);
                // Add error handling here, e.g., setting an error state
            });
    }

    render() {
        return (
            <div className="App">
                <Todoes todos={this.state.todos} addTodo={this.addTodo} url={baseUrl} getTasks = {this.componentDidMount}/>
            </div>
        )
    }

    addTodo(todo) {
        console.log(todo);
    }
}

export default App;