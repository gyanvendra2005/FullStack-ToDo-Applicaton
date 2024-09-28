import { useState } from "react"

export function Todos({todos}){
    const [completed, setCompleted] = useState(false)
    const checkcompleted = () =>{
        fetch("http://localhost:3000/completed",{
            method:"PUT",
            body: JSON.stringify({
                // title:title,
                // description:description,
                // id
                completed:!completed,
            }),
            headers: {
                "content-type":"application/json"
            }
        })
        .then(async(res)=>{
            const json = await res.json()
            setCompleted(completed)
            alert("marked as done")
        })
    }
  return <div>
    {todos.map((todo) => {
       return   <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={checkcompleted}>{todo.completed==true ?"completed":"mark as completed"}</button>
            </div>
    })}
  </div>
}