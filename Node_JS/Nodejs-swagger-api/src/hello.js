import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path from "path";

const router = express();

router.use(bodyParser.json());
router.use(morgan("dev"));
router.use(cors());

router.set("view engine", "ejs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

router.set("views", path.join(__dirname, "views"));
router.set("view engine", "ejs");

router.use(express.static(path.join(__dirname, "views/pages")));

router.get("/", (req, res) => {
  res.render(path.join(__dirname, "views", "pages", "index"));
});

export default router;
