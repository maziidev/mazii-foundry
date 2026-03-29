'use client';

import useFetch from '@/hooks/useFetch';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function FetchPage() {
  const { data, loading, error } = useFetch<User>(
    'https://jsonplaceholder.typicode.com/users/1',
  );

  return (
    <>
      <div>
        {loading && <p className="">loading...</p>}
        {error && <p className="text-red-500">Error loading data...</p>}
        {data && !loading && (
          <div>
            <p>{data.name}</p>
            <p>{data.email}</p>
          </div>
        )}
      </div>
    </>
  );
}
