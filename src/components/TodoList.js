import React, {Component} from 'react';
import '../css/App.css';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }
    
    onChange(event) {
        this.setState({
            userInput: event.target.value
        })
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            items: [...this.state.items, this.state.userInput],
            userInput: ''
        });
    }

    deleteTodo(item) {
        let array = this.state.items;
        let index = array.indexOf(item);
        
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    renderTodos() {
        return this.state.items.map((item) => {
            return ( 
                <div className="list-group-item" key={item}>
                    <div>
                        {item} 
                    </div>
                    <button className="delete-button" onClick={this.deleteTodo.bind(this, item)}> X </button>
                </div>   
            );
        });
    }

    render() {
        return ( 
            <div>
                <h1> Todo List </h1> 
                <div> 
                    {this.renderTodos()} 
                </div>
                <form className="todo-form">
                    <input value = {this.state.userInput} type = "text" placeholder = "Ajouter une nouvelle tâche..." onChange = {this.onChange.bind(this)} /> 
                    <button className="add-button" onClick = {this.addTodo.bind(this)}> Ajouter </button> 
                </form> 
            </div>
        );
    }
}

export default TodoList;
