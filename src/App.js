import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/AddTask/AddTask";
import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Doctors Appoinment",
            day: "Feb 5th at 2:30pm",
            reminder: true,
        },
        {
            id: 2,
            text: "Meeting at school",
            day: "Feb 6th at 1:30pm",
            reminder: true,
        },
        {
            id: 3,
            text: "Food Shopping",
            day: "Feb 5th at 2:30pm",
            reminder: false,
        },
    ]);

    // Delete task
    const deleteTask = (id) => {
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

    return (
        <div className="container">
            <Header />
            <AddTask />
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
