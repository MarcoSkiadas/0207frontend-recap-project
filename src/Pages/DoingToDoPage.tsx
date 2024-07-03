import {ToDo} from "../App.tsx";
import ToDoCard from "../Components/ToDoCard.tsx";

type DoingToDosprops = {
    toDo:ToDo[]
    prev:(id:string,description:string,status:string)=> void
    next:(id:string,description:string,status:string)=> void
    deleteToDo:(id:string)=> void
}

export default function DoingToDoPage(props:Readonly<DoingToDosprops>) {

    const filteredToDos = props.toDo
        .filter((toDo) => toDo.status.toLowerCase().includes("in_progress"));

    const toDos = filteredToDos.map((todo)=> <ToDoCard key={todo.id} todo={todo} next={props.next} prev={props.prev} deleteToDo={props.deleteToDo}/>);
    return (
        <>
            {toDos}
        </>
    )
}