import express from 'express';
import db from './database/connection';
import convertHourToMinues from './utils/convertHourToMinutes';

const routes = express.Router();

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

routes.post('/classes', async (request, response) => {
    const {         //desestruturação, para pegar cada coisa que vem no request.body e fazer variaveis individuais
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

    const trx = await db.transaction(); //fazer todas as alterações no db ao mesmo tempo, e se alguma delas falhar, descarta as que por ventura já foram feitas.

    try {
        const insertedUsersIds = await trx('users').insert({ //como o ID criado com o registro é usado na hora de criar o registro da tabela classes, coloca-se como variavel a função e depois a utiliza...
            name,
            avatar,
            whatsapp,
            bio
        });
    
        const user_id = insertedUsersIds[0];//...aqui. e...
    
        const insertedClassesIds = await trx('classes').insert({
            subject,
            cost,
            user_id //joga para dentro da chamada da db. Boa né?!
        });
    
        const class_id = insertedClassesIds[0];
    
        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinues(scheduleItem.from),
                to: convertHourToMinues(scheduleItem.to),
            };
        });
    
        await trx('class_schedule').insert(classSchedule);
    
        await trx.commit();
    
        return response.status(201).send(); //201 é "criado com sucesso"
    } catch (err) {
        await trx.rollback();
        return response.status(400).json({ //400 é um erro genérico
            error: 'Unexpected error while creating new class'
        });
    };
});

export default routes;