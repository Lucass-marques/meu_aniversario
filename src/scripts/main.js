AOS.init();

const eventDate = new Date("Nov 26, 2023 12:00:00");
const eventTimeStamp = eventDate.getTime();

const hourCounter = setInterval(function() {
    const now = new Date();
    const actualTimeStamp = now.getTime();

    const eventDay = eventTimeStamp - actualTimeStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;
    const secondInMs = 1000;

    const daysUntilEvent = Math.floor(eventDay / dayInMs);
    const hoursUntilEvent = Math.floor((eventDay % dayInMs) / hourInMs);
    const minutesUntilEvent = Math.floor((eventDay % hourInMs) / minuteInMs);
    const secondsUntilEvent = Math.floor((eventDay % minuteInMs) / secondInMs);
    
    console.log(daysUntilEvent);
    console.log(hoursUntilEvent);
    console.log(minutesUntilEvent);
    console.log(secondsUntilEvent);

    document.getElementById('contador').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`

    if (eventDay < 0) {
        clearInterval(hourCounter);
        document.getElementById('contador').innerHTML = 'O evento já ocorreu! Chegastes tarde!'
    }
}, 1000)