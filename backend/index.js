const express = require('express');
const {createTodo ,editTodo} = require('./zod')
const {todo} = require('./db')
const cors = require('cors')
const app = express()
app.use(express.json());
app.use(cors());

// body {
      // tile: string,
      // description: string,
      // completed: boolean,
// }

app.post ('/todo', async (req, res) => {
         const createPayLoad = req.body;
         const parsePayLoad = createTodo.safeParse(createPayLoad);
        //  validationCheck
         if(!parsePayLoad.success){
            res.status(404).json("Wrong input");
            return;
         }
         // connect of mongoDb
        //  const {title, describtion} = req.body
        //  const user = new user({
        //     title,
        //     describtion: describtion,
        //     completed: false,
        //  })
        await todo.create({
            title: createPayLoad.title,
            description: createPayLoad.description,
            completed: false,
        })
        // .then(
        //     res.status(202).json("Todo Created succesfully")
        // )
        // .catch(
        //     res.status(404).json("Something went wrong")
        // )
        res.json("todo created")
})

app.get("/todos", async (req,res)=>{
       const todos = await todo.find()
       res.status(202).json({
        todos
       })
})

app.put("/completed", async (req,res) => {
         const updatePayLoad = req.body;
         const parsePayLoad = editTodo.safeParse(updatePayLoad);
         //  validationCheck
         if(!parsePayLoad.success){
            res.status(404).json("Invalid User");
            return;
         }
        //  connect of mongoDb
         const updateTodo = await todo.update({
            _id: updatePayLoad.id
         },{
            completed:true
         }
        )
        res.json("todo is completed");

})

app.listen(3000, ()=>{
    console.log("runnig at port 3000");
    
})
// app.listen(3000);