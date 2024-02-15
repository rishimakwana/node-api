import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import connectDB from "./config/db.connection.js";
import routes from "./routes/index.js"
const app = express();

// Connect to the database before starting the server
connectDB()
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(compression())

app.use("/api", routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server ids Running On Port : ${PORT}`);
})

export default app;

// if cluster is used
// import { startServer } from "./config/cluster.js";
// const useCluster = true;
// if (useCluster) {
//     startServer(useCluster);
// }