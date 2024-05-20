let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');

let timer = true;
let hour = 0;
let minute = 0;
let second = 0;
let mili = 0;

document.getElementById('pause').disabled = true;

start.addEventListener('click', function(){
    timer = true;
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
    stopWatch();
});

pause.addEventListener('click', function(){
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
    timer = false;
});

reset.addEventListener('click', function(){
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    mili = 0;
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('second').innerHTML = "00";
    document.getElementById('milisecond').innerHTML = "00";
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
});

function stopWatch(){
    if(timer){
        mili++;
        if(mili == 100){
            second++;
            mili = 0;
        }
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
            second = 0;
        }

        const strHour = hour < 10 ? "0" + hour : hour;
        const strMinute = minute < 10 ? "0" + minute : minute;
        const strSecond = second < 10 ? "0" + second : second;
        const strMili = mili < 10 ? "0" + mili : mili;

        document.getElementById("hour").innerHTML = strHour;
        document.getElementById("minute").innerHTML = strMinute;
        document.getElementById("second").innerHTML = strSecond;
        document.getElementById("milisecond").innerHTML = strMili;

        setTimeout(stopWatch, 10);
    }
}
