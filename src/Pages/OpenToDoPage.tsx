import {ToDo} from "../App.tsx";
import ToDoCard from "../Components/ToDoCard.tsx";

type OpenToDosprops = {
    toDo:ToDo[]
}

export default function OpenToDoPage(props:Readonly<OpenToDosprops>) {

    const filteredToDos = props.toDo
        .filter((toDo) => toDo.status.toLowerCase().includes("open"));

    const toDos = filteredToDos.map((todo)=> <ToDoCard key={todo.id} todo={todo}/>);
    return (
        <>
            {toDos}
        </>
    )
}