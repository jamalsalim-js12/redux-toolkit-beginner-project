import { useDispatch } from "react-redux";
import { filterTask } from "../features/taskSlice";

const FilterTasks = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selectedStatus = event.target.value;
    dispatch(filterTask(selectedStatus)); // Dispatch the selected status
  };

  return (
    <div className="flex justify-end">
      <select
        className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
        onChange={handleChange}>
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default FilterTasks;
