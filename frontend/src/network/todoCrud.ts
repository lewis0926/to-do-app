import { Todo, TodoInterface } from "../models/Todo";
import axios from "axios";
// import useFetch from "./useFetch";

const baseUrl = (import.meta.env.REACT_APP_BASE_URL || 'http://localhost:8000') + '/todo';
// const baseUrl = 'http://localhost:8000/todo';

// const getAllTodos = () => {
//   const {data: todoList, isPending, error} = useFetch(baseUrl) as {
//     data: Todo[],
//     isPending: boolean,
//     error: any};
//   return {todoList, isPending, error};
// }

const createTodo = async (body: TodoInterface) => {
  return await axios.post(baseUrl, body);
}

const updateTodo = async (id: string, body: Todo) => {
  return await axios.put(`${baseUrl}/${id}`, body);
}

const deleteTodo = async (id: string) => {
  return await axios.delete(`${baseUrl}/${id}`);
}

export {
  // getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};