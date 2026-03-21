import type { Task } from '../types';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
}

const TaskList = ({ tasks, onDelete }: TaskListProps) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem onDelete={onDelete} task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
