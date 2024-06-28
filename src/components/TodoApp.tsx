import { useEffect, useState } from "react"
import { ListaTareas } from "./ListaTareas"

export const TodoApp = () => {

    const[nuevaTarea, setNuevaTarea] = useState<string>('')
    const[listaTareas, setListaTareas] = useState<string[]>([])

    useEffect(() =>{
        let listaAux:string|null = window.sessionStorage.getItem("listaTareas")
        if(listaAux && listaAux != "[]"){
            setListaTareas(JSON.parse(listaAux))
        }
    }, [])

    const handleAddTask = () =>{
        if(nuevaTarea.trim() === '') return
        let updatedTasks:string[] = [...listaTareas, nuevaTarea]
        setListaTareas(updatedTasks)
        setNuevaTarea('')
        window.sessionStorage.setItem("listaTareas", JSON.stringify(updatedTasks))
    }

    const handleBorrarTarea = (index:number) => {
        setListaTareas(tareas => tareas.filter((_,i) => i !== index))
    }

    return(
        <div>
            <h1>Lista de Tareas</h1>
            <div className="flex">
                <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder="Nueva Tarea"/>
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
        </div>
    )
}