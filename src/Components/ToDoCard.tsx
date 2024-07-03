import {ToDo} from "../App.tsx";

type ToDoCardProps = {
    todo: ToDo ;
    next:(id:string,description:string,status:string)=> void
    prev:(id:string,description:string,status:string)=> void
    deleteToDo:(id:string)=> void
}

export default function ToDoCard(props: Readonly<ToDoCardProps>) {

    return (
        <div>
            <div>
                <h3>{props.todo.description}</h3>
                <p>Id: {props.todo.id}</p>
                <p>Status: {props.todo.status}</p>
            </div>
            <button onClick={() => props.prev(props.todo.id,props.todo.description,props.todo.status)}>Prev</button>
            {props.todo.status !== "DONE" ?
            <button onClick={() => props.next(props.todo.id,props.todo.description,props.todo.status) }>Next</button>
            :
                <button onClick={() => props.deleteToDo(props.todo.id)} >Delete</button>
            }
        </div>
    );
}