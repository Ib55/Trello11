import { useReducer, createContext } from "react";
import TaskReducer from "../reducer/TaskReducer";

export const TaskContext = createContext();

const TaskProvider = (props) => {
  const [tasks, dispatchTaskAction] = useReducer(TaskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatchTaskAction }}>
      {props.children}
    </TaskContext.Provider>
  );
};
export default TaskProvider;
