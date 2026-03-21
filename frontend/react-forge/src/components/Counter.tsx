import { useState } from 'react';
import Button from './Button';

interface CounterProps {
  initialValue?: number;
}

function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState<number>(initialValue);

  function inc() {
    setCount(count + 1);
  }

  function dec() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="font-bold text-6xl">{count}</div>
        <div className="flex gap-2">
          <Button onClick={inc} variant="primary" size="md">
            Increase
          </Button>
          <Button onClick={dec} variant="primary" size="md">
            Decrease
          </Button>
          <Button onClick={reset} variant="danger" size="md">
            Reset
          </Button>
        </div>
      </div>
    </>
  );
}

export default Counter;
