import { useState } from 'react';
import type { Task } from '../types';
import Button from './ui/Button';

interface AddTaskProps {
  onAdd: (task: Task) => void;
}

interface TaskFormData {
  title: string;
  description?: string;
}
const AddTaskForm = ({ onAdd }: AddTaskProps) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
  });

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    onAdd({
      id: Date.now(),
      title: formData.title,
      description: formData.description,
    });

    setFormData({
      title: '',
      description: '',
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter task Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border p-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Enter task Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="border p-2 rounded outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        <Button variant="primary" size="md">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTaskForm;
