import express from "express";
import healthRoutes from "./routes/health.routes.js";
import favouritesRoutes from "./routes/favourites.routes.js";

const app = express();
app.use(express.json()); 

app.use("/api/health", healthRoutes);
app.use("/api/favourites", favouritesRoutes);

export default app;