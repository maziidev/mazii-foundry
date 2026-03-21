import type { Task } from '../types';
import Button from './ui/Button';

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
}
const TaskItem = ({ task, onDelete }: TaskItemProps) => {
  function handleDelete() {
    onDelete(task.id);
  }
  return (
    <div>
      <div className="flex justify-between  p-3 border rounded-lg">
        <div>
          <p>{task.title}</p>
          {task.description && (
            <p className="text-sm text-gray-500">{task.description}</p>
          )}
        </div>
        <Button onClick={handleDelete} variant="danger" size="md">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
