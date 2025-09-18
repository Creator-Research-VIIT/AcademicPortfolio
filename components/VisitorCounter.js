import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // Replace "yourdomain.com" with a unique namespace for your site
    fetch("https://api.countapi.xyz/hit/anupingle.com/visits")
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch((err) => console.error("Error fetching visitor count:", err));
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
