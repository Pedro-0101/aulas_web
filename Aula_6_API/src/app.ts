import express, {Request, Response} from "express";

const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(express.json());

function appLog(){
    console.log("A API se encontra disponível no URL: hhtp://localhost: 3000");
}

app.listen(PORT, appLog);