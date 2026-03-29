'use client';

import { useEffect, useRef } from 'react';

export default function RefPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  function clearAndFocus() {
    if (inputRef.current) {
      inputRef.current.value = ' ';
      inputRef.current.focus();
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <div>
        <input type="text" ref={inputRef} />
      </div>
    </>
  );
}
