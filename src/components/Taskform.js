import React, { Component } from 'react';

export default class Taskform extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            title: ' '
        };
    }

    onSubmit = event => {
        this.props.addTask(this.state.title)
        this.setState({title:' '})
        event.target.value=" "
        event.preventDefault();
    }

    onChange = event => {
        this.setState({
            title: event.target.value})
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
            <input 
                type="text" 
                name="title"
                placeholder="Ingresa una tarea" 
                onChange={this.onChange} 
                key={this.state.id}
                required>
            </input>
            <br/>
            <input 
            type="submit"
            value="Agregar tarea">
            </input>
            </form>
        )
    }
}