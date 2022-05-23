import { useState } from 'react';
import PrintedTasks from './PrintedTasks'

let valueIsCaptured = false
let arr = [];

function AddTaskBox(props) {

    const [taskName, setTaskName] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('');
    const [taskType, setTaskType] = useState('');
    

    function CapturingValue() {
        valueIsCaptured = true
        console.log(taskName, taskDeadline, taskType)
        console.log(valueIsCaptured)
        arr.push(taskName, taskDeadline, taskType);
        setTaskName('')
    };

    return (
        <div className='addTaskBox'>
            <div>
                <h2>Task Name:</h2>
                <input className="taskDescriptionInput" type='text' onChange={e => setTaskName(e.target.value)}></input>
            </div>
            <div>
                <h2>Deadline:</h2>
                <input className="taskDescriptionInput" type='date' onChange={e => setTaskDeadline(e.target.valueAsDate)}></input>
            </div>
            <div>
                <h2>Task Status</h2>
                <form>
                    <select name="tasktypes" className='selectingTask' onChange={e => setTaskType(e.target.value)}>
                        <option value='null'>None</option>
                        <option value="todo">To Do</option>
                        <option value="beigndone">Beign Done</option>
                        <option value="don" >Done</option>
                    </select>
                </form>
            </div>
            <button className='printTaskBtn' onClick={CapturingValue}>PRINT TASK</button>
             {valueIsCaptured ? <PrintedTasks /> : null}    
        </div>
    );
};


export {AddTaskBox, arr};