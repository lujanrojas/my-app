import React, {Component} from 'react';
import Task from './Task';


export default class Tasks extends Component{
    render(){
        return this.props.tasks.map(task => <Task 
            key={task.id}
            task={task} 
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}/>);
    }
}
