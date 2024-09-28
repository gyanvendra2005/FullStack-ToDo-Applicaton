// import mongoose,{Schema,Types} from "mongoose";
const  {mongoose,Schema,Types} = require('mongoose')
// connect to mongoDB
mongoose.connect("mongodb+srv://todo1234:todo1234@cluster0.1hn9q.mongodb.net") 
const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,  
        },
        description: { 
            type:String,
            required: true,        
        },
        completed: {
            type:Boolean,
        }
    })
    const todo = mongoose.model("todo",todoSchema);
module.exports = { todo }
