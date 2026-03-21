import { useState } from 'react';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="enter name"
          value={formData.name}
          className="border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="enter your email"
          value={formData.email}
          className="border p-2 rounded"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Button variant="primary" size="md">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
