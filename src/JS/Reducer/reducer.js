import { Add_Task } from "../ActionTypes/ActionTypes";
import { Del_Task } from "../ActionTypes/ActionTypes";
import { Done_Task } from "../ActionTypes/ActionTypes";
import { Edit_Task } from "../ActionTypes/ActionTypes";
import { Filter_Done } from "../ActionTypes/ActionTypes";
import { Filter_Undone } from "../ActionTypes/ActionTypes";
import { Task } from "../../Constants/Task";

const initialState = { Task };

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Task:
      return { ...state, Task: state.Task.concat(action.payload) };

    case Del_Task:
      return {
        ...state,
        Task: state.Task.filter((el) => el.id !== action.payload),
      };

    case Done_Task:
      return {
        ...state,
        Task: state.Task.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };

    case Edit_Task:
      return {
        ...state,
        Task: state.Task.map((el) =>
          el.id === action.payload.id
            ? { ...el, task: action.payload.task }
            : el
        ),
      };

    default:
      return state;
  }
};

export default TodoReducer;
