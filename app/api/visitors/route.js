import { BetaAnalyticsDataClient } from "@google-analytics/data";

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: JSON.parse(process.env.GA_CREDENTIALS),
});

export async function GET() {
  try {
    const [response] = await analyticsDataClient.runReport({
      property:` properties/${process.env.GA4_PROPERTY_ID}`,
      dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
      metrics: [{ name: "activeUsers" }],
    });

    const visitors = response.rows?.[0]?.metricValues?.[0]?.value || 0;

    return new Response(JSON.stringify({ visitors }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("GA API error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch visitors" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}