import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../../JS/Actions/Actions";
import "../ListTask/ListTask.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Edit from "../EditTask/Edit";

const ListTask = () => {
  const [status, setStatus] = useState("all");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.TodoReducer.Task);
  return (
    <div>
      <div className="btncheck">
        <Button variant="secondary" onClick={() => setStatus("all")}>
          All tasks{" "}
        </Button>
        <Button variant="success" onClick={() => setStatus("done")}>
          Done tasks ✓
        </Button>
        <Button variant="danger" onClick={() => setStatus("undone")}>
          Undone tasks ✗
        </Button>
      </div>
      <div>
        <ul>
          {status == "done"
            ? todo
                .filter((el) => el.isDone == true)
                .map((el) => (
                  <div key={el.id}>
                    <ListGroup horizontal key={el.id} className="task">
                      <Edit el={el} />
                      <ListGroup.Item
                        className="tasktext"
                        style={
                          el.isDone ? { textDecoration: "line-through" } : null
                        }
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
                ))
            : status == "undone"
            ? todo
                .filter((el) => el.isDone == false)
                .map((el) => (
                  <div key={el.id}>
                    <ListGroup horizontal key={el.id} className="task">
                      <Edit el={el} />
                      <ListGroup.Item
                        className="tasktext"
                        style={
                          el.isDone ? { textDecoration: "line-through" } : null
                        }
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
                ))
            : todo.map((el) => (
                <div key={el.id}>
                  <ListGroup horizontal key={el.id} className="task">
                    <Edit el={el} />
                    <ListGroup.Item
                      className="tasktext"
                      style={
                        el.isDone ? { textDecoration: "line-through" } : null
                      }
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
