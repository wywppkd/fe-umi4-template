import { useState } from 'react';

export default function HomePage() {
  const [count, setCount] = useState(0);
  function add() {
    setCount(count + 1);
  }

  return (
    <div>
      <button type="button" onClick={add}>
        add {count}
      </button>
    </div>
  );
}
