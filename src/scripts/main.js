AOS.init();

const dateEvent = new Date('Dec 24, 2023 20:00:00');
const timeStampEvent = dateEvent.getTime();

const countHours = setInterval(function() {
    const now = new Date();
    const timeStampNow = now.getTime();

    const distanceEvent = timeStampEvent - timeStampNow;

    const days = 1000 * 60 * 60 * 24;
    const hours = 1000 * 60 * 60;
    const minutes = 1000 * 60;
    const seconds = 1000;

    const daysLeft = Math.floor(distanceEvent / days);
    const hoursLeft = Math.floor((distanceEvent % days) / hours);
    const minutesLeft = Math.floor((distanceEvent % hours) / minutes);
    const secondsLeft = Math.floor((distanceEvent % minutes) / seconds);

    document.getElementById('countdown').innerHTML = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;

    if(distanceEvent < 0 ) {
        clearInterval(countHours);
        document.getElementById('countdown').innerHTML = `00d 00h 00m 00s`;
    }
}, 1000)