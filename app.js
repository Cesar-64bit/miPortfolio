import express from 'express';
import morgan from 'morgan';
import bodyparser from 'body-parser';
import ejs from 'ejs'
import rutas from './router/index.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views')
app.use(express.static('public'));

app.engine('html', ejs.renderFile);
app.use(rutas)

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`);
});