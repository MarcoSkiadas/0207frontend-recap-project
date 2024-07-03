
import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage.tsx";
import Navigation from "./Components/Navigation.tsx";
import ToDos from "./Pages/ToDos.tsx";
import {FormEvent, useEffect, useState} from "react";
import axios from "axios";
import OpenToDoPage from "./Pages/OpenToDoPage.tsx";
import DoingToDoPage from "./Pages/DoingToDoPage.tsx";
import DoneToDoPage from "./Pages/DoneToDoPage.tsx";

export type ToDo = {
    id:string,
    description:string,
    status:string
}

function App() {

    const [toDo, setToDo] = useState<ToDo[]>([]);
    const [description, setDescription] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [status, setStatus] = useState<string>("OPEN");


    useEffect(()=> {
        getAllToDos()
    },[])

    function getAllToDos() {
        axios.get("/api/todo")
            .then(response => setToDo(response.data))
            .catch(error => console.log(error))
    }

    function addNewToDo(){
        axios.post("",{id:id,description:description,status:status})
            .then(response => console.log(response.data))
            .then(getAllToDos)
            .catch(error => console.log(error))
    }

    function handleSubmit(e:FormEvent<HTMLFormElement>) {
        e.preventDefault();
        addNewToDo()
        setDescription("");
        setId("");
        setStatus("OPEN");
    }
    function next(id:string,description:string,status:string) {
        let newStatus:string = "OPEN"
        if(status==="OPEN") {
            newStatus="IN_PROGRESS"
        }
        else if(status==="IN_PROGRESS") {
            newStatus="DONE"
        }

        axios.put("/api/todo/" + id + "/update", {id: id, description: description, status: newStatus})
            .then(response => console.log(response.data))
            .then(getAllToDos)
            .catch(error => console.log(error))
    }
    function prev(id:string,description:string,status:string) {
        let newStatus:string = "OPEN"
        if(status==="IN_PROGRESS") {
            newStatus="OPEN"
        }
        else if(status==="DONE") {
            newStatus="IN_PROGRESS"
        }

        axios.put("/api/todo/" + id + "/update", {id: id, description: description, status: newStatus})
            .then(response => console.log(response.data))
            .then(getAllToDos)
            .catch(error => console.log(error))
    }


  return (
    <>
      <header>
        <Navigation/>
      </header>
      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/api/todo"} element={<ToDos toDo={toDo} next={next} prev={prev}/>}/>
        <Route path={"/api/todo/open"} element={<OpenToDoPage toDo={toDo}/>}/>
        <Route path={"/api/todo/doing"} element={<DoingToDoPage toDo={toDo}/>}/>
        <Route path={"/api/todo/done"} element={<DoneToDoPage toDo={toDo}/>}/>
      </Routes>

       <form onSubmit={handleSubmit}>
           <label>
               Add:
               <input type={"text"} placeholder={"Entere a new ToDo"} value={description} onChange={(e)=> setDescription(e.target.value)}/>
               <button>Submit</button>
           </label>
    </form>
        </>
  )
}

export default App