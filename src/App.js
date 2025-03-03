import React from "react";
import Todoes from "./components/todoes";
import './css/main.css'
import axios from 'axios'

const baseUrl = "https://3ab1d506db455dc20bcccd9cb3fa8bc7.serveo.net/tasks"

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
                <Todoes todos={this.state.todos} addTodo={this.addTodo} />
            </div>
        )
    }

    addTodo(todo) {
        console.log(todo);
    }
}

export default App;