import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const IncrementDecrement = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center mb-3">
      <button
        onClick={decrement}
        className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center"
      >
        <FaMinus />
      </button>
      <span className="mx-4 text-2xl font-bold">{count}</span>
      <button
        onClick={increment}
        className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default IncrementDecrement;