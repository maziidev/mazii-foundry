import Button from './components/Button';
import Counter from './components/Counter';
import Form from './components/Form';
import type { User } from './components/UserCard';
import UserCard from './components/UserCard';

function App() {
  const userWithRole: User = {
    id: 1,
    name: 'maziidev',
    email: 'godswill@gmail.com',
    role: 'admin',
  };
  const userWithRoleTwo: User = {
    id: 2,
    name: 'warri',
    email: 'warri@gmail.com',
    role: 'viewer',
  };
  const userWithOutRole: User = {
    id: 2,
    name: 'emma',
    email: 'emma@gmail.com',
  };
  return (
    <>
      <div className="flex flex-col mt-4 gap-4 mx-auto w-2xl">
        <Button
          variant="primary"
          size="lg"
          onClick={() => console.log('Primary Clicked')}>
          Click me
        </Button>
        <Button
          variant="danger"
          size="lg"
          onClick={() => console.log('Danger Clicked')}>
          Delete
        </Button>

        <UserCard user={userWithRole} />
        <UserCard user={userWithRoleTwo} />
        <UserCard user={userWithOutRole} />

        <Counter />
        <Form onSubmit={(data) => console.log('Parent received:', data)} />
      </div>
    </>
  );
}

export default App;
