import {Link} from "react-router-dom";

export default function Navigation() {

    return(
        <>
            <div>
            <Link to={"/"}>HomePage</Link>
            <Link to={"/api/todo"}>ToDos</Link>
            <Link to={"/api/todo/open"}>OpenToDos</Link>
            <Link to={"/api/todo/doing"}>DoingToDos</Link>
            <Link to={"/api/todo/done"}>DoneToDos</Link>
            </div>
        </>
    )
}