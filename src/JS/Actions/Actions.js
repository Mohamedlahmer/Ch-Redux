import { Add_Task } from "../ActionTypes/ActionTypes";
import { Del_Task } from "../ActionTypes/ActionTypes";
import { Done_Task } from "../ActionTypes/ActionTypes";
import { Edit_Task } from "../ActionTypes/ActionTypes";

export function addTask(payload) {
  return { type: Add_Task, payload };
}

export function deleteTask(payload) {
  return { type: Del_Task, payload };
}

export function doneTask(payload) {
  return { type: Done_Task, payload };
}

export function editTask(payload) {
  return { type: Edit_Task, payload };
}
