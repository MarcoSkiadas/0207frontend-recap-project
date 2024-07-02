import {ToDo} from "../App.tsx";

type ToDoCardProps = {
    todo: ToDo ;
}

export default function ToDoCard(props: Readonly<ToDoCardProps>) {
    return (
        <div>
            <div>
                <h3>{props.todo.description}</h3>
                <p>Id: {props.todo.id}</p>
                <p>Status: {props.todo.status}</p>
            </div>
        </div>
    );
}