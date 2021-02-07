import React, {useState, useEffect} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {db} from './firebase_config';
import firebase from 'firebase';
import TasksList from '../src/components/tasks/list';


function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    getTasks();
    return ("hola");
  }, []);

  function getTasks() {
    db.collection('tasks').onSnapshot(function (querySnapshot) {
      setTasks(querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          completed: doc.data().completed,      
      })));
    });
  }
  
  const addTask = (e) => {
   
    e.preventDefault();

    db.collection('tasks').add({
      completed: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      title: taskInput,
    });
    setTaskInput("");
    
  }
 
  return (
   <div className="App">
      <div>
      <form>
        <h1>Welcome to my To Do App! ✔ </h1>
        <input type="text" className="input" placeholder="Please, write a new Task!" onChange={(e) =>setTaskInput(e.target.value)} value={taskInput}/>  
        <button type="submit" className="AddButton"  onClick={addTask}><FontAwesomeIcon icon={faPlus}/></button>
      </form>
     </div>
     
     {tasks.map(task => (
       <TasksList title={task.title} completed={task.completed} id={task.id}/>
     ))}
     
   </div>
  );
}

export default App;
