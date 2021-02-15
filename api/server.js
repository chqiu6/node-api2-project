// implement your server here
// require your posts router and connect it here

const express = require("express");
const postRouter = require("./posts/posts-router"); 
const postModel = require("./posts/posts-model");

const server = express();

server.use(express.json());
server.use(postRouter);
server.use(postModel);

model.exports = server; 