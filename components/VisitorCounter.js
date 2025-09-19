"use client";
import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [visits, setVisits] = useState({ total: null, today: null });

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch("/api/visitors");
        const data = await res.json();
        console.log("Visitor data:", data);
        setVisits({ total: data.totalVisits, today: data.todayVisits });
      } catch (err) {
        console.error("Failed to fetch visitor count:", err);
      }
    }
    fetchCount();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Visitor Counter</h1>
      <p className="text-lg">
        Total visits: {visits.total === null ? "Loading..." : visits.total}
      </p>
      <p className="text-lg">
        Today’s visits: {visits.today === null ? "Loading..." : visits.today}
      </p>
    </div>
  );
}
