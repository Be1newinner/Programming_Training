import { type RouteConfig, index, route } from "@react-router/dev/routes";
// import Contact from "./routes/contact";

export default [
  index("routes/home.tsx"),
  route("/contact", "./routes/Contact.tsx"),
  route("/about", "./routes/About.tsx"),
] satisfies RouteConfig;
