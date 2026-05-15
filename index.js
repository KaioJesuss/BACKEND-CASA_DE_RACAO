import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const porta = 3000;
const host = '0.0.0.0';
const app = express();

app.listen(porta, host, () =>{
    console.log('Servidor rodando em http://${host}:${porta}');
});

