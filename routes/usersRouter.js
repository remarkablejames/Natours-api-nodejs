import express from "express";

const router = express.Router();

router.use((req, res, next) => {
    console.log("hello from the users Router middleware!");
    next();
});

router.get("/", (req, res) => {
    res.status(200).json({ message: "All users" });
});

export default router;