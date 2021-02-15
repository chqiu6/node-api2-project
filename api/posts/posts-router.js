// implement your posts router here
const express = require("express");
const router = express.Router();

router.get("/", () => {
    res.json({
        message : "Router test"
    });
})

model.exports = router; 