import React from "react";
import Todoes from "./components/todoes";
import './css/main.css'
import axios from 'axios'


let url = "https://3410082cf1bf62fda8c1d33ce2ff5bf6.serveo.net"
const baseUrl = `${url}/tasks`;

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
                <Todoes todos={this.state.todos} addNewTask={this.addNewTask}
                        url={url}
                />
            </div>
        )
    }

    addNewTask = (task) => {
        this.setState({todos: [...this.state.todos,  task]});
    }

    deleteTask = (id) => {
        axios.delete(`${baseUrl}/${id}`).then(response => {
            console.log(response);
        })
    }

}

export default App;