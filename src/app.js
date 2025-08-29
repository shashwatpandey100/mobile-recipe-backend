import express from "express";
import healthRoutes from "./routes/health.routes.js";
import favouritesRoutes from "./routes/favourites.routes.js";
import job from "./config/cron.js";
import { ENV } from "./config/env.js";

const app = express();
app.use(express.json()); 

if(ENV.NODE_ENV === "production")job.start();

app.use("/api/health", healthRoutes);
app.use("/api/favourites", favouritesRoutes);

export default app;