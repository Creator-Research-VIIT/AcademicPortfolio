import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => setCount(data.visitors))
      .catch((err) => console.error("Error fetching visitors:", err));
  }, []);

  return (
    <div className="text-center text-sm text-gray-600">
      {count !== null ? (
        <p>Total Visitors (last 7 days): {count}</p>
      ) : (
        <p>Loading visitors...</p>
      )}
    </div>
  );
};

export default VisitorCounter;