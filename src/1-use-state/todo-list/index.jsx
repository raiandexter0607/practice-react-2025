import { useState} from 'react';

const TodoList = () => {
    const [ task, setTask ] =  useState("");
    const [ list, setList] = useState([]);
    const [ editingIndex, setEditingIndex] = useState("");
    const [ editValues, setEditValues] = useState("");

    const handleInputChange = (e) => {
        setTask(e.target.value)
    }

    const handleEditChange = (e, index) => {
        setEditValues({ ...editValues, [index]: e.target.value});
    }

    const addTask = () => {
        if(!task) return;
        setList([...list, task])
        setTask("")
        setEditingIndex("")
    }

    const handleDelete = (index) => {
        setList(list.filter((_,i) => ( i !== index)))
    }


    const handleUpdate = (index) => {
        if(editingIndex === index){
            setList(list.map((item, i) => i === index ? item = editValues[index] : item))
            setEditingIndex("")
            setTask("")
        }else{
            setEditingIndex(index)
            setEditValues({ ...editValues, [index]: list[index]})
        }
    }

    return(
        <>
        <section>
            <input type="text" value={task} onChange={handleInputChange}/>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{ editingIndex === index ? <input type="text" value={editValues[index] || ""} onChange={(e) => handleEditChange(e, index)}/> : item } 
                        <button onClick={() => {handleDelete(index)}}>Delete Task</button>
                        <button onClick={() => {handleUpdate(index)}}>{ editingIndex === index ? "Save" : "Edit"}</button>
                        </li>))}
            </ul>
        </section>
        </>
    )
};

export default TodoList;