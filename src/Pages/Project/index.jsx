import React, { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Todo from "./components/Todo";

const Project = () => {
    
    const [addTaskModalVisible, setAddTaskModalVisible] = useState(false);
    const [mockTasks, setMockTasks] = useState([]);
    const [editableTask, setEditableTask] = useState(null);
    const handleOpenAddTaskModal = () => {
        setAddTaskModalVisible(true);
    }
    const handleCloseAddTaskModal = () => {
        setAddTaskModalVisible(false);
    }
    const handleDeleteTask = useCallback((id) => {
        setMockTasks((prevData) => prevData.filter(item => item.id !== id));
    }, []);
    const toggleStatusChange = useCallback((id) => {
        setMockTasks((prevData) => {
            const copyData = [...prevData];
            const idx = prevData.findIndex(item => item.id === id);
            const status = copyData[idx].status.toLowerCase() === "active" ? "Done" : "Active";
            copyData[idx] = {
                ...copyData[idx],
                status
            }
            setTasksToDB(copyData);
            return copyData;
        });
    }, []);

    const setNewTaskToDB = (task) => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    const setTasksToDB = (tasks) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    const addTask = (formData) => {
        const { title, description, attachedTo } = formData;
        setMockTasks((prevData => {
            const copyData = [...prevData];
            const newTask = {
                id: Math.random(),
                title: title.value,
                description: description.value,
                status: "Active",
                attachedTo: attachedTo.value
            }
            setNewTaskToDB(newTask);
            copyData.push(newTask);
            return copyData;
        }));
        handleCloseAddTaskModal();
        
    }

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");
        if (!tasks)
            localStorage.setItem("tasks", JSON.stringify([]));
        else
            setMockTasks(JSON.parse(tasks));

    }, []);
    return (
        <div className="project-container">
            <Button variant="outline-success"
                onClick={handleOpenAddTaskModal}
            >
                Add Task
            </Button>

            <Todo
                mockTasks={mockTasks}
                handleDeleteTask={handleDeleteTask}
                toggleStatusChange={toggleStatusChange}
            />

            {addTaskModalVisible && <AddTask
                onHide={handleCloseAddTaskModal}
                onSubmit={addTask}
            />}

            {editableTask && <EditTask
                task={editableTask}
            />}
        </div>
    )
}


export default Project;