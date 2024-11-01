import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { addTask } from "../features/taskSlice";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid4(),
      title,
      description,
      status,
    };
    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setStatus("To Do");
  };
  return (
    <form className="mb-6" onSubmit={handleSubmit}>
      <h2 className="mb-3 text-xl font-semibold text-indigo-500">
        Add New Task
      </h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Title"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Task Description"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
        />
      </div>
      <div className="mb-4">
        <select
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 ">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
