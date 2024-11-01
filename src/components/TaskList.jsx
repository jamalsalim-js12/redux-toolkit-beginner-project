import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, fetchTodo } from "../features/taskSlice";
import EditTask from "./EditTask";
import FilterTasks from "./FilterTasks";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);
  const dispatch = useDispatch();
  const statusFilter = useSelector((state) => state.tasks.status); // Get the current status filter

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const filteredTasks =
    statusFilter === "All"
      ? tasks
      : tasks.filter((task) => task.status === statusFilter);
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  if (loading) {
    return <p>Tasks loading ...</p>;
  }
  if (error) {
    return <p>There is an error {error}</p>;
  }

  return (
    <div>
      <FilterTasks tasks={tasks} />

      <div>
        <h2>Tasks</h2>
        <ul className="space-y-4">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-4 rounded-md shadow-sm bg-gray-50">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {task.title}
                </h3>
                {task.description && (
                  <p className="text-gray-600">{task.description}</p>
                )}
                <p className="mt-1 text-sm font-semibold">
                  Status:{" "}
                  <span className="italic underline"> {task.status}</span>
                </p>
              </div>
              <div className="flex space-x-2 ">
                <EditTask task={task} />
                <button
                  className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(task.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
