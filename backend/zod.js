// import zod from 'zod';
const zod = require('zod')

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
    // com
})
const editTodo = zod.object({
    id: zod.string(),
})


module.exports = {
    createTodo: createTodo, 
    editTodo: editTodo
}

