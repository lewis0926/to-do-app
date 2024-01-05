import express from 'express';
import ToDoListController from "../controllers/todo.controller";

const initializeToDoRouters = (): express.Router => {
  const toDoRouters = express.Router();

  const toDoListController = new ToDoListController();
  toDoRouters.get('/', toDoListController.getAllTodoTasks);
  toDoRouters.get('/:id', toDoListController.getTodoTaskById);
  toDoRouters.post('/', toDoListController.addTodoTask);
  toDoRouters.delete('/:id', toDoListController.deleteTodoTask);
  toDoRouters.put('/:id', toDoListController.updateTodoTask);
  return toDoRouters;
}

export default initializeToDoRouters;
