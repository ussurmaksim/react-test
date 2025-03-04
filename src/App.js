import React from "react";
import Todoes from "./components/todoes";
import './css/main.css'
import axios from 'axios'


let url = "/tasks/100"
const baseUrl = `https://127a781744a11b9ab952a8be35cc9c9e.serveo.net${url}`;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                // {
                //     id: 1,
                //     taskName: "Test",
                //     taskText: "Test description",
                // }
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
                <Todoes todos={this.state.todos} addNewTask={this.addNewTask}
                        url={baseUrl}
                />
            </div>
        )
    }

    addNewTask = (task) => {
        this.setState({todos: [...this.state.todos,  task]});
    }

}

export default App;