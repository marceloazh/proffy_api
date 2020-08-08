import express from 'express';

const app = express();

app.use(express.json()); //inclui plugin do express que entende JSON

//Corpo (Request Body): Dados p/ criar ou atualizar registro
app.post('/users', (request, response) => {
    console.log(request.body);
    const users = [
        { nome: 'Marcelo', age: 37 },
        { nome: 'Pedro', age: 6 }
    ];
    
    return response.json(users);
    console.log('Acessou a rota!');
});

app.listen(3333);//localhost:3333