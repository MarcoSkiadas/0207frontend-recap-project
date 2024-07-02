import {ToDo} from "../App.tsx";
import ToDoCard from "../Components/ToDoCard.tsx";

type ToDosprops = {
    toDo:ToDo[]
}

export default function ToDos(props:Readonly<ToDosprops>) {

const toDos = props.toDo.map((todo)=> <ToDoCard key={todo.id} todo={todo}/>);
    return(

        <>
            {toDos}
        </>
    )
}