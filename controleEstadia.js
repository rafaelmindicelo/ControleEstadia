const dateCheckIn = "28/05/2021 10:00:00";
const dateCheckOut = "20/01/2022 10:01:30";

function dateInMs(handleDate){
  const [date, time] = handleDate.split(" ");
  const [day, month, year] = date.split("/");
  const [hour, minute, second] = time.split(":");
  
  const newDate = new Date(year, month - 1, day, hour, minute, second).getTime(); //Date em js entende que o mês de janeiro é 0, fevereiro é 1, assim por diante

  return newDate;
}

const dateCheckInMs = dateInMs(dateCheckIn);
const dateCheckOutMs = dateInMs(dateCheckOut);

const stayedTimeInSeconds = (dateCheckOutMs - dateCheckInMs) / 1000;
const yearInSeconds = 60 * 60 * 24 * 365;
const monthInSeconds = 60 * 60 * 24 * (365 / 12);
const dayInSeconds = 60 * 60 * 24;
const hourInSeconds = 60 * 60;
const minuteInSeconds = 60;

const year = Math.floor(stayedTimeInSeconds / yearInSeconds);
const month = Math.floor(stayedTimeInSeconds / monthInSeconds) % 12;
const day = Math.round(Math.floor(stayedTimeInSeconds / dayInSeconds) % (365 / 12));
const hour = Math.floor(stayedTimeInSeconds / hourInSeconds) % 24;
const minute = Math.floor(stayedTimeInSeconds / minuteInSeconds) % 60;
const second = stayedTimeInSeconds % 60;

console.log(`
             Data/hora de entrada: ${dateCheckIn}
             Data/hora de saída: ${dateCheckOut}

             ------------------------------------

             Usuário ficou no estabelecimento: ${year} ano(s), ${month} mes(es), ${day} dia(s), ${hour} hora(s), ${minute} minuto(s) e ${second} segundo(s)         

             ------------------------------------

             Obrigado e volte sempre!`);

module.exports = dateInMs;