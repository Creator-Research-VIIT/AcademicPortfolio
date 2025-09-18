import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("https://hits.sh/www.anupingle.com.json")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error("Error fetching visitors:", err));
  }, []);

  return (
    <div className="text-center text-sm text-gray-600">
      {count !== null ? (
        <p>Total Visitors: {count}</p>
      ) : (
        <p>Loading visitors...</p>
      )}
    </div>
  );
};

export default VisitorCounter;
