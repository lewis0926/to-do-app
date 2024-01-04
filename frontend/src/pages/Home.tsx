import { deleteTodo } from "../network/todoCrud";
import useFetch from "../network/useFetch";
import { Todo } from "../models/Todo";


const Home = () => {
  // const {todoList, isPending, error} = getAllTodos();
  const {data: todoList, isPending, error} = useFetch("") as
    {data: Todo[], isPending: boolean, error: any};
  const handleDeleteTask = (id: string) => {
    deleteTodo(id).then(() => {
      window.location.reload();
    });
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="px-4 sm:px-0">
        <h1 className="text-3xl font-bold leading-7 text-gray-900 text-center my-8">To Do List</h1>
      </div>
      {isPending && <div>Loading...</div>}

      {!isPending && error && <div>{error.message}</div>}

      <div className="mt-6 border-t border-gray-100">
        {!isPending && todoList.length > 0 && todoList.map((task, id) => (
          <dl className="divide-y divide-gray-100" key={id}>
            <div className="px-4 py-6 sm:flex sm:items-start sm:justify-between" key={task._id}>
              <div className="sm:flex-1 sm:mr-4">
                <dt className="text-lg font-medium leading-6 text-gray-900">{task.title}</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700">{task.details}</dd>
              </div>
              <button className="mt-4 sm:mt-0 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded" onClick={() => handleDeleteTask(task._id)}>
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
