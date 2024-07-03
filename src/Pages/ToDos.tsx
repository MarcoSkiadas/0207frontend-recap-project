import {ToDo} from "../App.tsx";
import ToDoCard from "../Components/ToDoCard.tsx";

type ToDosprops = {
    toDo:ToDo[]
    prev:(id:string,description:string,status:string)=> void
    next:(id:string,description:string,status:string)=> void
}

export default function ToDos(props:Readonly<ToDosprops>) {

const toDos = props.toDo.map((todo)=> <ToDoCard key={todo.id} todo={todo} next={props.next} prev={props.prev}/>);
    return(

        <>
            {toDos}
        </>
    )
}