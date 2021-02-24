import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "../AddTask/AddTask.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/Actions/Actions";

const AddTask = () => {
  const [Data, setData] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleAdd = () => {
    if (Data.length > 0) {
      dispatch(addTask({ id: Math.random(), task: Data, isDone: false }));
      setData("");
    }
  };

  const dispatch = useDispatch();

  return (
    <div className="add">
      <InputGroup className="mb-3">
        <FormControl
          onChange={handleChange}
          value={Data}
          placeholder="Add task"
          aria-label="Add task"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button
            className="btnadd"
            onClick={handleAdd}
            variant="outline-secondary"
          >
            Add Task
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default AddTask;
