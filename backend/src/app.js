import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { envVariables } from "./constants";

const app = express();

app.use(
    cors({
        origin: envVariables.origin,
        credentials: true,
    })
);

app.use(express.json({limit: '16kb'}));
app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}));
app.use(express.static('public'));
app.use(cookieParser());

//first import a router 

//then use it