import app from "./app.js";
import { ENV } from "./config/env.js";

const port = ENV.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});