import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *", function () {
  https.get(`${process.env.API_URL}/api/health`).on("error", (e) => console.error("Error while running cron job"));
});

export default job;
