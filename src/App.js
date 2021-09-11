import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/AddTask/AddTask";
import { useState, useEffect } from "react";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTask();
            setTasks(tasksFromServer);
        };
        getTasks();
    }, []);

    //Fetching Tasks
    const fetchTask = async () => {
        const res = await fetch("http://localhost:5000/tasks");
        const data = await res.json();

        return data;
    };

    // Delete task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE",
        });
        console.log("delete", id);
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Toggle Reminder
    const toggleReminder = (id) => {
        console.log(id);
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    // Add task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    return (
        <div className="container">
            <Header
                onAdd={() => setShowAddTask(!showAddTask)}
                showAddTask={showAddTask}
            />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                "No tasks"
            )}
        </div>
    );
}

export default App;
