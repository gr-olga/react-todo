import React from "react";
import './App.css';
import {TodoItem} from "./TodoItem";
import todosData from "./todosData";


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            return {
                ...prevState,
                todos: prevState.todos.map(item => item.id === id ? {...item, completed: !item.completed} : item)
            }
        })
    }


    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
                                                                 handleChange={this.handleChange}/>)


        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )

    }
}

export default App;
