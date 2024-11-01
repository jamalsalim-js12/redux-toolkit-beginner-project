import AddTask from "./components/AddTask";
// import FilterTasks from "./components/FilterTasks";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-2xl p-6 mx-auto bg-white rounded-md shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-center text-indigo-600">
          Task Management App
        </h1>
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}
