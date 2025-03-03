import React from "react"

class AddTodo extends React.Component {
    todoAdd = {};

    state = {
        todo:[
            {
                text: "",
                description: "",
            }
        ]
    }
    render() {
        return (
            <div className="AddTodo">
                <input type="text" placeholder={"Название задачи"} onChange={(e) => this.setState({text:e.target.value})}/>
                <input type="text" placeholder={"Описание задачи"} onChange={(e) => this.setState({description: e.target.value})}/>
                <button type={"button"}>Добавить</button>
            </div>
        )
    }
}

export default AddTodo

//
// return (
//     <form ref={(el) => this.myForm = el}>
//         <input type="text" placeholder={"Имя"} onChange={(e) => this.setState({first_name: e.target.value})}/>
//         <input type="text" placeholder={"Фамилия"} onChange={(e) => this.setState({last_name: e.target.value})}/>
//         <textarea placeholder={"Биография"}  onChange={(e) => this.setState({bio: e.target.value})}/>
//         <input type="text" placeholder={"Возраст"}  onChange={(e) => this.setState({age: e.target.value})}/>
//         <label htmlFor="isMan">Вы мужчина?</label>
//         <input type="checkbox" id={"isMan"} onChange={(e) => this.setState({isMan: e.target.checked})}/>
//         <button type={"button"} onClick={() => {
//
//             this.myForm.reset();
//             this.userAdd = {
//                 first_name: this.state.first_name,
//                 last_name: this.state.last_name,
//                 bio: this.state.bio,
//                 age: this.state.age,
//                 isMan: this.state.isMan
//             }
//             if (this.props.user) {
//                 this.userAdd.id = this.props.user.id;
//             }
//             this.props.onAdd(this.userAdd);
//
//         }}>Добавить</button>
//     </form>