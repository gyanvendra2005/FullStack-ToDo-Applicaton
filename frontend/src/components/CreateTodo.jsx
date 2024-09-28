import { useState } from "react"

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description,setDescription] =useState("")

    const add = () => {
        // e.preventDefault()
        fetch("http://localhost:3000/todo",{
            method:"POST",
            body: JSON.stringify({
                title:title,
                description:description,
                // completed:false,
            }),
            headers: {
                "content-type":"application/json"
            }
        })
        .then(async (res)=>{
            const json = await res.json()
            alert("todo added") 
        })
        
    }
    return <div>
        <input type="text" placeholder="Add todo" value={title} onChange={(e) =>{setTitle(e.target.value)}}></input> <br />

        <input type="text" placeholder="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}></input><br />
        <button onClick={add}>Add todo</button>
    </div>
}
// export CreateTodo;