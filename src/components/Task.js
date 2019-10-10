import React, { Component } from 'react';

export default class Task extends Component{

    StyleCompleted(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none',
            textAlign: 'center',
            background: 'yellow',
        }
    }

    BtnDelete(){ 
        return{
            fontSize: '18px',
            background: '#22FF33',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            marginLeft: '10px',
            borderRadius: '3px',
            cursor: 'pointer',     
        }
    }

    render(){
        const{task} = this.props;
        return <div style={this.StyleCompleted()} key={task.id}>
            {task.title}
            <input type="checkbox"
                 onChange = {this.props.checkDone.bind(this, task.id)}/>
            <button style={this.BtnDelete()} 
                onClick={this.props.deleteTask.bind(this, task.id)}>Eliminar tarea</button>
        </div>
    }
}