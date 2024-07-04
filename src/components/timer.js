import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [count]); // Dependency array

  return <h1>I've rendered {count} times!</h1>;
}

export default Timer;
