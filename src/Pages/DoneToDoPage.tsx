import {ToDo} from "../App.tsx";
import ToDoCard from "../Components/ToDoCard.tsx";

type DoneToDosprops = {
    toDo:ToDo[]
    prev:(id:string,description:string,status:string)=> void
    next:(id:string,description:string,status:string)=> void
}

export default function DoneToDoPage(props:Readonly<DoneToDosprops>) {


    const filteredToDos = props.toDo
        .filter((toDo) => toDo.status.toLowerCase().includes("done"));

    const toDos = filteredToDos.map((todo)=> <ToDoCard key={todo.id} todo={todo} next={props.next} prev={props.prev}/>);
    return (
        <>
            {toDos}
        </>
    )
}