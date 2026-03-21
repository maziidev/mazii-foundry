import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import type { Task } from './types';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(task: Task) {
    setTasks([...tasks, task]);
  }

  function removeTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <div>
      <div className="font-bold text-3xl">Task Manager</div>
      <AddTaskForm onAdd={addTask} />

      <TaskList tasks={tasks} onDelete={removeTask} />
    </div>
  );
};

export default App;
