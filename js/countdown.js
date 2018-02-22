// Set the date to count down to
var endDate = new Date("Apr 25, 2018 09:00:00").getTime();

// Set interval for countdown update
var x = setInterval(function () {

    var now = new Date().getTime();

    // Get distance between endDate and today's date
    var distance = endDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result for each element
    document.getElementById("days-left").innerHTML = days;
    document.getElementById("hours-left").innerHTML = hours;
    document.getElementById("minutes-left").innerHTML = minutes;
    document.getElementById("seconds-left").innerHTML = seconds;

    // If the count down is finished, add fallback
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days-left").innerHTML = 0;
        document.getElementById("hours-left").innerHTML = 0;
        document.getElementById("minutes-left").innerHTML = 0;
        document.getElementById("seconds-left").innerHTML = 0;
    }
}, 1000);
