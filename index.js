import express from "express";
import path from "path";
import { engine } from "express-handlebars";
// import { logger } from "./middleware/logger.js";
import { router } from "./routes/api/members.js";
import { members } from "./Members.js";

const PORT = process.env.PORT ?? 5000;
const __dirname = path.resolve();

const app = express();

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members,
  })
);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Members API Routes
app.use("/api/members", router);

app.listen(PORT, () => {
  console.log(`Server started om port ${PORT}`);
});
