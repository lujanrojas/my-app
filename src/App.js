import React from 'react';
import './App.css';
import arraytask from './sample/tasks.json';

//components
import Tasks from './components/Tasks.js';
import Taskform from './components/Taskform.js';

export default class App extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      tasks: arraytask
    };
  } 

  addTask = title => {
    const newTask = {
      title: title,
      id: this.state.tasks.lenght
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = id => {
    const newTask = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks: newTask})
  }

  checkDone = id => {
    const newTask = this.state.tasks.map(task => {
      if (task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTask})
  }

  render(){
    return <div>
          <h1>Organizador 2019</h1>
          <p>Ingresa una Tarea</p>
          <Taskform addTask={this.addTask}/>
            <Tasks tasks={this.state.tasks} 
                   key={this.state.tasks.lenght}
                   deleteTask={this.deleteTask}
                   checkDone={this.checkDone} 
            />
    </div>
  }
}

