import TodoController from '../modules/todo/todoController'

export default (server) => {
    server.post('/todos', TodoController.createTodos);
    server.get('/todos', TodoController.getTodos);
    server.get('/todos/:todo_id', TodoController.getTodoById);
    server.put('/todos/:todo_id', TodoController.updateTodoById);
    server.del('/todos/:todo_id', TodoController.deleteTodoById);
}