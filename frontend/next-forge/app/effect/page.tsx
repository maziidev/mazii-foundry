'use client';

import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function EffectPage() {
  // demo 1
  const [count, setCount] = useState(0);

  //   demo 2
  const [width, setWidth] = useState(0);

  //   demo 3
  const [userId, setUserId] = useState(1);
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //   demo 1 - auto inc
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  //   demo - 2 window resize
  useEffect(() => {
    setWidth(window.innerWidth);

    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // demo - 3 data fetching
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError('Something went wrong');
        console.error('Error found', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [userId]);

  return (
    <div className="mx-auto mt-8 max-w-lg flex flex-col gap-8 p-4">
      {/* Demo 1 */}
      <section className="border rounded-xl p-4 flex flex-col gap-3">
        <h2 className="font-bold text-xl">Demo 1 — Auto Counter</h2>
        <p className="text-4xl font-bold">{count}</p>
        <div className="flex gap-2">
          <button
            onClick={() => setCount((p) => p + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded">
            +
          </button>
          <button
            onClick={() => setCount((p) => p - 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded">
            -
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-red-500 text-white rounded">
            Reset
          </button>
        </div>
      </section>

      {/* Demo 2 */}
      <section className="border rounded-xl p-4">
        <h2 className="font-bold text-xl">Demo 2 — Window Width</h2>
        <p className="text-2xl mt-2">{width}px</p>
        <p className="text-sm text-gray-500">
          Resize the window to see it update
        </p>
      </section>

      {/* Demo 3 */}
      <section className="border rounded-xl p-4 flex flex-col gap-3">
        <h2 className="font-bold text-xl">Demo 3 — User Fetcher</h2>
        <input
          type="number"
          min={1}
          max={10}
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
          className="border rounded px-3 py-2 w-24"
        />
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {data && !loading && (
          <div className="mt-2">
            <p className="font-semibold">{data.name}</p>
            <p className="text-sm text-gray-500">{data.email}</p>
          </div>
        )}
      </section>
    </div>
  );
}
