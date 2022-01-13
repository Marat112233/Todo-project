import React, { memo } from "react";
import { Button, Card } from "react-bootstrap";
import "./styles.css";

const Task = ({
    title,
    description,
    status,
    id,
    attachedTo,
    handleDeleteTask,
    toggleStatusChange
}) => {
    const statusClassName = status.toLowerCase() === "done" ? "status-done" : "status-active";
    const statusBtn = status.toLowerCase() === "done" ? "Active" : "Done"
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>Must do : {attachedTo}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text className="status-text">
                    Status:
                    <span className={statusClassName}> {status}
                    </span>
                </Card.Text>
                
                
                <Button
                    variant={`${statusBtn === "Active" ? "success" : "primary"} `}
                    onClick={() => toggleStatusChange(id)}
                >
                    {statusBtn}
                </Button>
                <Button variant="warning mr-2 ms-2">Edit</Button>
                <Button variant="danger "
                    onClick={() => handleDeleteTask(id)}
                >
                    Delete
                </Button>
                </Card.Body>
            
        </Card>
    )
}

export default memo(Task);