import express, {Request, Response} from "express";
import { Produto } from './models/Produto' 

let produtos: Produto[] = [];
const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(express.json());

function appLog(){
    console.log('Servidor acessivel em: http:\\localhost:${PORT}');
}

function newProduct(req : Request , res : Response){
    const obj: {name: string, desc: string, price: number} = req.body;
    console.log("obj>>> ", obj);
}

app.post("/api/products", newProduct);

app.listen(PORT, appLog);