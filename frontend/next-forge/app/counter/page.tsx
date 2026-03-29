'use client';

import { useState } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(0);

  const btnStyle =
    'px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold cursor-pointer w-full rounded';
  function inc() {
    setCount((prev) => prev + 1);
  }
  function dec() {
    setCount((prev) => prev - 1);
  }
  function reset() {
    setCount(0);
  }

  function incThreeBroken() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <div className="mx-auto mt-4">
      <p className="font-bold text-2xl">Count: {count}</p>
      <div className="flex flex-col items-center gap-4">
        <button className={`${btnStyle}`} onClick={inc}>
          inc
        </button>
        <button className={`${btnStyle}`} onClick={dec}>
          dec
        </button>
        <button className={`${btnStyle}`} onClick={reset}>
          reset
        </button>
        <button className={`${btnStyle}`} onClick={incThreeBroken}>
          inc 3x
        </button>
      </div>
    </div>
  );
}
