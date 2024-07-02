import {ToDo} from "../App.tsx";
import ToDoCard from "../Components/ToDoCard.tsx";

type DoneToDosprops = {
    toDo:ToDo[]
}

export default function DoneToDoPage(props:Readonly<DoneToDosprops>) {


    const filteredToDos = props.toDo
        .filter((toDo) => toDo.status.toLowerCase().includes("done"));

    const toDos = filteredToDos.map((todo)=> <ToDoCard key={todo.id} todo={todo}/>);
    return (
        <>
            {toDos}
        </>
    )
}