import { BsFillTrashFill } from 'react-icons/bs';
import { BsFillPencilFill } from 'react-icons/bs'

function TaskBox(props) {
    return (
        <div>
            <div className='wholeCard'>
                <div>
                    <h4 className='descTitle'>Descrição:</h4>
                    <p> {props.taskName}</p>
                </div>
                <div>
                    <h4 className='descTitle'>Prazo:</h4>
                    <p>{props.taskDeadline}</p>
                    
                </div>
                <div className='editRemoveBtns'>
                    <BsFillPencilFill onClick={() => props.editTask(props.index)} />
                    <BsFillTrashFill onClick={() => props.removeTask(props.index)} />
                </div>
                
            </div>
        </div>
    );
}

export default TaskBox;