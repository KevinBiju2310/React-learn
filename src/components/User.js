import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const { name, location } = props;
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          const newCount = count - 1;
          setCount(newCount);
        }}
      >
        minus
      </button>
      <h2>Name: {name}</h2>
      <h3>Place: {location}</h3>
    </div>
  );
};

export default User;
