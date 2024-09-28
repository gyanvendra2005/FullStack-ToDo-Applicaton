import { useState } from "react"

export function CreateTodo(){
    const [todo, setTodo] = useState("")
    return <div>
        <input type="text" placeholder="Add todo" value={todo} onChange={(todo) =>{setTodo(todo)}}></input> <br />
        <input type="text" placeholder="description"></input><br />
        <button >Add todo</button>
    </div>
}
// export CreateTodo;