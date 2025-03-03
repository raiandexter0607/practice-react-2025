import { useState} from 'react';

const TodoList = () => {
    const [ task, setTask ] =  useState("");
    const [ list, setList] = useState([]);

    const handleInputChange = (e) => {
        setTask(e.target.value)
    }

    const addTask = () => {
        if(!task) return;
        setList([...list, task])
        setTask("")
    }

    const deleteTask = (index) => {
        setList(list.filter((_,i) => ( i !== index)))
    }

    return(
        <>
        <section>
            <input type="text" value={task} onChange={handleInputChange}/>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item} <button onClick={() => {deleteTask(index)}}>Delete Task</button></li>))}
            </ul>
        </section>
        </>
    )
};

export default TodoList;