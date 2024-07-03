import {ToDo} from "../App.tsx";
import ToDoCard from "../Components/ToDoCard.tsx";

type OpenToDosprops = {
    toDo:ToDo[]
    prev:(id:string,description:string,status:string)=> void
    next:(id:string,description:string,status:string)=> void
    deleteToDo:(id:string)=> void
}

export default function OpenToDoPage(props:Readonly<OpenToDosprops>) {

    const filteredToDos = props.toDo
        .filter((toDo) => toDo.status.toLowerCase().includes("open"));

    const toDos = filteredToDos.map((todo)=> <ToDoCard key={todo.id} todo={todo} next={props.next} prev={props.prev} deleteToDo={props.deleteToDo}/>);
    return (
        <>
            {toDos}
        </>
    )
}