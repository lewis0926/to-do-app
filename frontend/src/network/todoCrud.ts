import { Todo, TodoInterface } from "../models/Todo";
import axios from "axios";

const baseUrl = (import.meta.env.VITE_BACKEND_BASE_URL || 'http://localhost:8000') + '/todo';

const getTodos = async ():Promise<Todo[]>  => {
  return await axios.get(baseUrl)
      .then(res => res.data);
}

const getTodoById = async (id: string):Promise<TodoInterface> => {
  return await axios.get(`${baseUrl}/${id}`)
      .then(res => res.data);
}

const createTodo = async (body: TodoInterface) => {
  return await axios.post(baseUrl, body);
}

const updateTodo = async (id: string, body: TodoInterface) => {
  return await axios.put(`${baseUrl}/${id}`, body);
}

const deleteTodo = async (id: string) => {
  return await axios.delete(`${baseUrl}/${id}`);
}

export {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};