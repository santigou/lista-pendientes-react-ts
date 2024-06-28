type Tarea = {
    tarea: string,
    borrarTarea: () => void
}

export const Tarea = ({tarea, borrarTarea}: Tarea) => {
    return(
        <div className="task">
            <span className="taskTitle">{tarea}</span>
            <button onClick={borrarTarea}>Borrar Tarea</button>
        </div>
    )
}