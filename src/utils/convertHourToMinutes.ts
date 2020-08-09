export default function convertHourToMinues(time: string) {
    //08:00

    const [hour, minutes] = time.split(':').map(Number); //pegando os dois lados do horario e jogando nas duas variaveis
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}