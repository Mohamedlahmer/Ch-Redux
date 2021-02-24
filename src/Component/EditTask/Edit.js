import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../../JS/Actions/Actions";
import EditIcon from "@material-ui/icons/Edit";
import "../EditTask/Edit.css";

const Edit = ({ el }) => {
  const [changeModal, setchangeModal] = useState(el.task);

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <EditIcon className="edit" variant="primary" onClick={handleShow}>
        Edit task
      </EditIcon>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder="Enter your modification"
            onChange={(e) => setchangeModal(e.target.value)}
            value={changeModal}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              {
                if (changeModal) {
                  dispatch(editTask({ id: el.id, task: changeModal }));
                  setchangeModal("");
                }
              }
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Edit;
