function getTime(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + today.getSeconds();
    var timeString = time;
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = (H < 12 || H === 24) ? " AM" : " PM";
    timeString = h + timeString.substr(2, 3) + ampm;
    var title = document.getElementById("currenttime").value = timeString;
};



getTime();