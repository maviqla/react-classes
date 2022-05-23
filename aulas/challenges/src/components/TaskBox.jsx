
function taskBox(props){
    return(
        <div className='taskCard'>
            <h1>{props.title}</h1>
            <div className={props.taskType}></div>
            </div>
    );
}

export default taskBox;