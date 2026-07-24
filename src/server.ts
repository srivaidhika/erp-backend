import dotenv from "dotenv";
import app from "./app";
import {errorMiddleware} from "./middlewares/error.middleware";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";
import reportRoutes from "./routes/report.routes";


dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(errorMiddleware);
app.use(
    "/api/v1/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});