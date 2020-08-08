import express from 'express';

const app = express();

app.use(express.json()); //inclui plugin do express que entende JSON

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World!' });
});

app.listen(3333);//localhost:3333