import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  filterDone,
  deleteTask,
  doneTask,
  filterUndone,
} from "../../JS/Actions/Actions";
import "../ListTask/ListTask.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Edit from "../EditTask/Edit";

const ListTask = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.TodoReducer.Task);
  return (
    <div>
      <div className="btncheck">
        <Button variant="success" onClick={() => dispatch(filterDone(todo))}>
          Done tasks ✓
        </Button>
        <Button variant="danger" onClick={() => dispatch(filterUndone(todo))}>
          Undone tasks ✗
        </Button>
      </div>
      <div>
        <ul>
          {todo.map((el) => (
            <div key={el.id}>
              <ListGroup horizontal key={el.id} className="task">
                <Edit el={el} />
                <ListGroup.Item
                  className="tasktext"
                  style={el.isDone ? { textDecoration: "line-through" } : null}
                >
                  {el.task}
                </ListGroup.Item>
                <div>
                  {" "}
                  <DeleteOutlineIcon
                    className="delete"
                    fontSize="large"
                    onClick={() => dispatch(deleteTask(el.id))}
                  >
                    Delete
                  </DeleteOutlineIcon>
                </div>
                <div>
                  <Button
                    className="btndone"
                    variant="secondary"
                    onClick={() => dispatch(doneTask(el.id))}
                  >
                    {el.isDone ? "It has been Done" : "Not Done yet"}
                  </Button>
                </div>
              </ListGroup>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListTask;
