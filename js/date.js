$(document).ready(function(){

    var date,day,month,writeMonth, dayArrival, monthArrival, writeMonthArrival, daysInMonth;

    /*Date.prototype.daysInMonth = function() {
        return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
    };*/

    date = new Date();
    day = date.getUTCDate();
    month = (date.getUTCMonth()+1);

    daysInMonth = 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();


    if(day > 0 && day < 15){

        day = 15;
        dayArrival = daysInMonth;
        monthArrival = month;

    } else if (day >= 15 && day <= daysInMonth) {

        day = daysInMonth;
        dayArrival = 15;
        monthArrival = month + 1;

    }

    switch (month) {

        case 1:
            writeMonth="января";
            break;
        case 2:
            writeMonth="февраля";
            break;
        case 3:
            writeMonth="марта";
            break;
        case 4:
            writeMonth="апреля";
            break;
        case 5:
            writeMonth="мая";
            break;
        case 6:
            writeMonth="июня";
            break;
        case 7:
            writeMonth="июля";
            break;
        case 8:
            writeMonth="августа";
            break;
        case 9:
            writeMonth="сентября";
            break;
        case 10:
            writeMonth="октября";
            break;
        case 11:
            writeMonth="ноября";
            break;
        case 12:
            writeMonth="декабря";
            break;

    }

    switch (monthArrival) {

        case 1:
            writeMonthArrival="января";
            break;
        case 2:
            writeMonthArrival="февраля";
            break;
        case 3:
            writeMonthArrival="марта";
            break;
        case 4:
            writeMonthArrival="апреля";
            break;
        case 5:
            writeMonthArrival="мая";
            break;
        case 6:
            writeMonthArrival="июня";
            break;
        case 7:
            writeMonthArrival="июля";
            break;
        case 8:
            writeMonthArrival="августа";
            break;
        case 9:
            writeMonthArrival="сентября";
            break;
        case 10:
            writeMonthArrival="октября";
            break;
        case 11:
            writeMonthArrival="ноября";
            break;
        case 12:
            writeMonthArrival="декабря";
            break;

    }

    $(".month").text(writeMonth);
    $(".day").text(day);
    $(".day_two").text(dayArrival);
    $(".monthArrival").text(writeMonthArrival);

});