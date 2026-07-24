import express from "express";
import cors from "cors";
import helmet from "helmet";

import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import customerRoutes from "./routes/customer.routes";
import inventoryRoutes from "./routes/inventory.routes";
import orderRoutes from "./routes/order.routes";
import paymentRoutes from "./routes/payment.routes";
import dashboardRoutes from "./routes/dashboard.routes";
import supplierRoutes from "./routes/supplier.routes";
import reportRoutes from "./routes/report.routes";
import invoiceRoutes from "./routes/invoice.routes";
import purchaseRoutes from "./routes/purchase.routes";
import salesRoutes from "./routes/sales.routes";


const app = express();
app.use((req, res, next) => {
    console.log(
        `${req.method} ${req.url}`
    );
    next();
});

// Enable CORS for frontend connection
app.use(cors());
app.use(helmet());
app.use(express.json());

// API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/customers", customerRoutes);
app.use("/api/v1/inventory", inventoryRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/payments", paymentRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/v1/suppliers", supplierRoutes);
app.use("/api/v1/reports", reportRoutes);
app.use("/api/v1/invoices", invoiceRoutes);
app.use("/api/v1/purchases", purchaseRoutes);
app.use("/api/v1/sales", salesRoutes);


app.get("/", (req, res) => {
    res.send("Mini ERP CRM Backend Running");
});

export default app;