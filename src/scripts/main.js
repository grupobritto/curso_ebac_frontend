AOS.init();

const aniversario = new Date('Jan 15, 2024 00:00:00');
const timeStampAniversario = aniversario.getTime();

const countdown = setInterval(function() {
    const now = new Date();
    const timeStampNow = now.getTime();

    const distance = timeStampAniversario - timeStampNow;

    const days = 1000 * 60 * 60 * 24;
    const hours = 1000 * 60 * 60;
    const minutes = 1000 * 60;
    const seconds = 1000;

    const daysLeft = Math.floor(distance / days);
    const hoursLeft = Math.floor((distance % days) / hours);
    const minutesLeft = Math.floor((distance % hours) / minutes);
    const secondsLeft = Math.floor((distance % minutes) / seconds);

    document.getElementById('countdown').innerHTML = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;

    if(distance < 0 ) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = `00d 00h 00m 00s`;
    }

}, 1000);