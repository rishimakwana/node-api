import express from "express";
const router = express.Router();
import Auth from "./authRoute.js";
const productRoutes = require('./productRoute');
const categoryRoutes = require('./categoryRoute');
const transactionRouter = require('./transaction');

app.get('/', (req, res) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' }
    ];
    res.json(users);
});

router.use("/auth", Auth);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/transaction', transactionRouter);
export default router;
