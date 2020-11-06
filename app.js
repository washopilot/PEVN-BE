// const express = require('express');
// SE USA ESTA SINTAXIS YA QUE BABEL ESTÁ INSTALADO
import express from 'express';
import morgan from "morgan";
import cors from "cors";
import fileupload from "express-fileupload";
import history from "connect-history-api-fallback";
import path from "path";

const app = express();

// Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload({ useTempFiles: true }));
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/',require('./routes/auth.routes'));

//Settings
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ' + app.get('port'));
})
