import React from 'react';
import {db} from '../../../firebase_config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './list.css';


const TasksList = ({title, completed, id}) => {

    const handleComplete = () => {
        db.collection("tasks").doc(id).update({
            completed: !completed,
        });
    }

    const handleDelete = () => {
        db.collection("tasks").doc(id).delete();
    }

    return(
        <div className="list">
            <div className="taskInfo">
                <h3>{title}</h3>
                <span>{completed ? "Completed" : "In progress"}</span>
            </div>
            <div className="buttons">
                <button className="button" onClick={handleComplete}>{completed ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faCheck} /> }</button>
                <button className="button" onClick={handleDelete}><FontAwesomeIcon icon={faTrashAlt} /></button>   
            </div>
            
       </div>
    )
}

export default TasksList;