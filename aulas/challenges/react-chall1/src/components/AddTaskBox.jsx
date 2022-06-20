import React, { useState } from 'react';
import TaskCard from './TaskCard'

const AddTaskBox = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('');
    const [taskType, setTaskType] = useState('');

    const [taskList, setTaskList] = useState([{ taskName: '', taskDeadline: '', taskType: '', }]);
    // const [valueIsCaptured, setValueIsCaptured] = useState(false);

    const CapturingValue = (e) => {
        e.preventDefault();

        const auxTaskForm = taskList;
        auxTaskForm.push({ taskName, taskDeadline, taskType });
        setTaskList(auxTaskForm);

        setTaskName("");
        setTaskDeadline("");
        setTaskType("");
    };

    function editTask(index) {
        setTaskName(taskList[index].taskName);
        setTaskDeadline(taskList[index].taskDeadline);
        setTaskType(taskList[index].taskType);

        removeTask(index);
    }

    function removeTask(index) {
        let removedTask = taskList.filter((task, i) => {
            return i !== index;
        })
        setTaskList(removedTask);
    }

    return (
        <div className='addTaskBox'>
            <div className='belowHeader'>
                <h1 className='submitATask'>Cadastrar uma Tarefa</h1>
                <div className='hOneLine'></div>
            </div>

            <form onSubmit={CapturingValue} id="formAddTaskBox">
                <div className='taskInputs'>
                    <div>
                        <p className='taskDescriptionTitleFirst'>Sua Tarefa</p>
                        <input className="taskDescriptionInput" type='text' onChange={(e) => setTaskName(e.target.value)} value={taskName}></input>
                    </div>
                    <div>
                        <p className='taskDescriptionTitleSecond'>Prazo</p>
                        <input className="taskDescriptionInput" type='date' onChange={(e) => setTaskDeadline(e.target.value)} value={taskDeadline}></input>
                    </div>
                    <div>
                        <p className='taskDescriptionTitleThird'>Selecione o Status</p>
                        <select name="tasktypes" className='selectingTask' onChange={(e) => setTaskType(e.target.value)} value={taskType} form="formAddTaskBox">
                            <option value='null'>Tipo</option>
                            <option value="toDo">A Fazer</option>
                            <option value="beingDone">Fazendo</option>
                            <option value="done" >Feito</option>
                        </select>
                    </div>
                </div>
                <input className='printTaskButton' type="submit" value="Inserir Tarefa" />
            </form>

            
            <div className='taskCard'>
            <div className='belowInputs'>
                <h1 className='submitATask'>Quadro de tarefas</h1>
                <div className='hTwoLine'></div>
            </div>
                <div className='allTaskCards'>
                    <div>
                        <h1 className='starting'>A Fazer</h1>
                        <div className="toDo">
                            {taskList.map((auxTaskForm, index) => { 
                                if (auxTaskForm.taskType === "toDo") 
                                    return <TaskCard 
                                                taskName={auxTaskForm.taskName}    
                                                taskDeadline={auxTaskForm.taskDeadline} 
                                                index={index} 
                                                editTask={editTask} 
                                                removeTask={removeTask} 
                                                key={index} /> 
                                })}
                        </div>
                    </div>

                    <div>
                        <h1 className='finishing'>Fazendo</h1>
                        <div className="beingDone">
                            {taskList.map((auxTaskForm, index) => { 
                                 if (auxTaskForm.taskType === "beingDone") 
                                     return <TaskCard 
                                                taskName={auxTaskForm.taskName} 
                                                taskDeadline={auxTaskForm.taskDeadline} 
                                                index={index} 
                                                editTask={editTask} 
                                                removeTask={removeTask} 
                                                key={index} /> 
                            })}
                        </div>
                    </div>

                    <div>
                        <h1 className='finished'>Finalizado</h1>
                        <div className="done">
                            {taskList.map((auxTaskForm, index) => { 
                                if (auxTaskForm.taskType === "done")
                                 return <TaskCard 
                                                 taskName={auxTaskForm.taskName} 
                                                 taskDeadline={auxTaskForm.taskDeadline} 
                                                 index={index} editTask={editTask} 
                                                 removeTask={removeTask} 
                                                 key={index} /> })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AddTaskBox;