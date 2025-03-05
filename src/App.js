import React from "react";
import Todoes from "./components/todoes";
import './css/main.css'
import axios from 'axios'

let url = "https://a1911398124e13b970cae3d7b868144b.serveo.net"
const baseUrl = `${url}/tasks`;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [

            ]
        }
    }

    componentDidMount() {
        axios.get(baseUrl, {
            headers: {
                "Content-Type": "application/json",
                "bypass-ngrok-warning": "any-value", // Добавьте этот заголовок, если нужно обойти страницу ngrok
                "Authorization": "Bearer any-token"
            },
        })
            .then(response => {
                this.setState({todos: response.data}); // API returns the array directly
            })
            .catch(error => {
                console.error("Ошибка при получении данных:", error);
            });
    }

    render() {
        return (
            <div className="App">
                <Todoes
                    todos={this.state.todos}
                    url={url}
                    addNewTask={this.addNewTask}
                    deleteTask={this.deleteTask}
                    formatDate={this.formatDate}
                />
            </div>
        )
    }

    addNewTask = (task) => {
        this.setState({todos: [task, ...this.state.todos]});
    }

    deleteTask = (id) => {
        this.setState({
            todos: this.state.todos.filter((el) => el.id !== id)
        })
        axios.delete(`${baseUrl}/${id}`)
    }

}

export default App;