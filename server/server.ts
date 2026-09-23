import express, { type Express, type Request, type Response } from "express";
import globalErrorHandler from "./middleware/globalErrorHandler";
import { AppError } from "./errors/AppError";

const app: Express = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("homepage");
});

// Catch-all route for undefined routes
app.use((req, res, next) => {
  next(new AppError("Route does not exist", 404));
});

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
