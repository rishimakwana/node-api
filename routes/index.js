import express from "express";
const router = express.Router();
import Auth from "./authRoute.js";
const productRoutes = require('./productRoute');
const categoryRoutes = require('./categoryRoute');
const transactionRouter = require('./transaction');

router.use("/auth", Auth);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/transaction', transactionRouter);
export default router;
