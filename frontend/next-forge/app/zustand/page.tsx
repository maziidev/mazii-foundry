'use client';

import useCounterStore from '@/store/counterStore';

export default function ZustandPage() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <p className="text-6xl font-bold">{count}</p>
      <div className="flex gap-2">
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-600 text-white rounded">
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-blue-600 text-white rounded">
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 text-white rounded">
          Reset
        </button>
      </div>
    </div>
  );
}
