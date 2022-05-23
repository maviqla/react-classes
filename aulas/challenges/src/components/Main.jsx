
import TaskBox from './TaskBox'

function Main(){
    return(
        <main>
            <h1>Quadro de tarefas</h1>
            <div className='allTaskCards'>
                <TaskBox taskType='toDo' title='To Do'/>
                <TaskBox taskType='beignDone' title='Being Done'/>
                <TaskBox taskType='Done' title='Done'/>
            </div>
        </main>
    );
}

export default Main;