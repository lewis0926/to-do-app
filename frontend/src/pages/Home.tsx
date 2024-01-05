import { deleteTodo, getTodos } from "../network/todoCrud";
import { Todo } from "../models/Todo";
import { useEffect, useState } from "react";


const Home = () => {
  const [todoList, setTodoList] = useState<null | Todo[]>(null);

  useEffect(() => {
    getTodos().then((data) => {
      setTodoList(data);
    });
  }, []);

  const handleDeleteTask = (id: string) => {
    deleteTodo(id).then(() => {
      window.location.reload();
    });
  };

  const redirectCreatePage = () => {
    window.location.href = '/create';
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="px-4 sm:px-0 sm:flex justify-between items-center">
        <h1 className="text-3xl font-bold leading-7 text-gray-900 text-center my-8 sm:flex-1">To Do List</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded" onClick={() => redirectCreatePage()}>New To Do</button>
      </div>

      <div className="mt-6 border-t border-gray-100">
        {todoList && todoList.length > 0 && todoList.map((task, id) => (
          <dl className="divide-y divide-gray-100" key={id}>
            <div className="px-4 py-6 sm:flex sm:justify-between sm:items-center" key={task._id}>
              <div className="sm:flex-1 sm:mr-4">
                <dt className="text-lg font-medium leading-6 text-gray-900">{task.title}</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700">{task.details}</dd>
              </div>
              <button className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded" onClick={() => handleDeleteTask(task._id)}>
                Delete
              </button>
            </div>
          </dl>
        ))}
      </div>
    </div>
  );
};
export default Home;
