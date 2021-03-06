import React, { useCallback, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { formValuesAddTask } from "../../data/mockData";
import FormComponent from "../AddTask/Form";


const AddTask = ({
    onHide,
    onSubmit
}) => {
    const [formData, setFormData] = useState(formValuesAddTask);
    const handleChange = useCallback((e) => {
        const { value, name } = e.target;
        setFormData((prevData => {
            const copyData = { ...prevData };
            copyData[name] = {
                ...copyData[name],
                touched: true,
                value
            };
            return copyData;
        }));

    }, []);
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
                        Add Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <FormComponent
                        formData={formData}
                        handleChange={handleChange}
                    />

                </Modal.Body>
                <Modal.Footer>

                    <Button
                        variant="primary"
                        type="submit"
                        onClick={() => onSubmit(formData)}
                    >
                        Add
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

export default AddTask;