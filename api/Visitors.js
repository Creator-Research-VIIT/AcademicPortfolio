import { BetaAnalyticsDataClient } from "@google-analytics/data";

// Create GA client
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: JSON.parse(process.env.GA_CREDENTIALS), // store your GA service account JSON as an env var
});

export default async function handler(req, res) {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: properties/505652030, // replace with your GA4 property ID
      dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
      metrics: [{ name: "activeUsers" }],
    });

    const visitors = response.rows[0].metricValues[0].value;

    res.status(200).json({ visitors });
  } catch (error) {
    console.error("GA API error:", error);
    res.status(500).json({ error: "Failed to fetch visitors" });
  }
}
