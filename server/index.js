import render from './render';
import express from 'express';
import path from 'path';
const app = express();

app.use(express.static("./public"));

app.get('*', render);

app.listen(3000, () => {
    console.log('服务已启动...');
})