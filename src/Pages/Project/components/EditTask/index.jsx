import React, { useCallback, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { formValuesAddTask } from "../../data/mockData";
import FormComponent from "../EditTask/Form";


const EditTask = ({
    onHide,
    onSubmit,
    task
}) => {
    const [editableTask, setEditableTask] = useState(task);
    // const handleChange = useCallback((e) => {
    //     const { value, name } = e.target;
    //     setFormData((prevData => {
    //         const copyData = { ...prevData };
    //         copyData[name] = {
    //             ...copyData[name],
    //             touched: true,
    //             value
    //         };
    //         return copyData;
    //     }));

    // }, []);
    return (
        <>
            <Modal
                size="lg"
                show={true}
                onHide={onHide}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Edit Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FormComponent
                        editableTask={editableTask}
                    // handleChange={handleChange}
                    />

                </Modal.Body>
                <Modal.Footer>

                    <Button
                        variant="primary"
                        type="submit"
                    // onClick={() => onSubmit(formData)}
                    >
                        Add Task
                    </Button>
                    <Button
                        onClick={onHide}
                        variant="secondary"
                    >
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );

}

export default EditTask;