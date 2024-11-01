import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/taskSlice";

const EditTask = ({ task }) => {
  const [isEdit, setIsEditting] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, title, description, status }));
    setIsEditting(false);
  };
  return (
    <div>
      {isEdit ? (
        <div className="absolute z-10 p-4 bg-white border rounded-md shadow-lg">
          <h2 className="mb-3 text-xl font-semibold text-indigo-500">
            Edit Task
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
          <div className="flex justify-between">
            <button
              type="submit"
              className="px-2 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              onClick={handleEdit}>
              Save
            </button>
            <button
              type="submit"
              className="px-2 py-2 text-white bg-gray-300 rounded-md hover:bg-gray-400 "
              onClick={() => setIsEditting(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          className="px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={() => setIsEditting(true)}>
          Edit
        </button>
      )}
    </div>
  );
};

export default EditTask;
