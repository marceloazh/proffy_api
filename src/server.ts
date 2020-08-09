import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json()); //inclui plugin do express que entende JSON
app.use(routes);


app.listen(3333);//localhost:3333