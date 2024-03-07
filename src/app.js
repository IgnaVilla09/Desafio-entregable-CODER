import express from "express";
import path from "path";
import { Server } from "socket.io";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import { router as productsRouter } from "./routes/productsRouter.js";
import { router as cartRouter } from "./routes/cartRouter.js";
import { router as viewRouter } from "./routes/viewRouter.js";

const PORT = 8080;
let io;

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/products", productsRouter);
app.use("/api/carts", cartRouter);
app.use(
  "/realTimeProducts",
  (req, res, next) => {
    req.io = io;
    next();
  },
  productsRouter
); //Vista de productos en real time con WebSocket
app.use("/", viewRouter);

const serverHttp = app.listen(PORT, () => {
  console.log(`Server escuchando en puerto ${PORT}`);
});

io = new Server(serverHttp);
