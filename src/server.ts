import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    const users = [
        { nome: 'Marcelo', age: 37 },
        { nome: 'Pedro', age: 6 }
    ];
    return response.json(users);
    console.log('Acessou a rota!');
});

app.listen(3333);//localhost:3333