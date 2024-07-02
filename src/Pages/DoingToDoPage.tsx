import {ToDo} from "../App.tsx";
import ToDoCard from "../Components/ToDoCard.tsx";

type DoingToDosprops = {
    toDo:ToDo[]
}

export default function DoingToDoPage(props:Readonly<DoingToDosprops>) {

    const filteredToDos = props.toDo
        .filter((toDo) => toDo.status.toLowerCase().includes("in_progress"));

    const toDos = filteredToDos.map((todo)=> <ToDoCard key={todo.id} todo={todo}/>);
    return (
        <>
            {toDos}
        </>
    )
}