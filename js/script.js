$(function(){
    var note=$('#note'),ts=new Date(2012,0,1),time=new Date(2012,0,1),newYear=true;

    if ((new Date())>ts){

        var date = new Date();
        var nextMonth = (date.getUTCMonth()+1);
        var month = date.getUTCMonth();
        var day = date.getUTCDate();

        if (0<day,day<15) {

            ts = (new Date(2016,month,15)).getTime();

        } else ts = (new Date(2016,month,30)).getTime();

        newYear=false;
    }

    $('#countdown').countdown({
        timestamp:ts,
        callback:function(days,hours,minutes,seconds){

            var message="";

            message+="Дней: "+days+", ";
            message+="часов: "+hours+", ";
            message+="минут: "+minutes+" и ";
            message+="секунд: "+seconds+" <br />";

            if (newYear) {
                message+="осталось до Нового года!";
            } else {
                message+="осталось до момента через 10 дней!";
            }

            note.html(message);
        }
    });

    if ((new Date())>time) {

        var date=new Date();
        var nextMonth=(date.getUTCMonth()+1);
        var month=date.getUTCMonth();
        var day=date.getUTCDate();

        if (0<day,day<15) {

            time = (new Date(2016,month,30)).getTime();

        } else time = (new Date(2016,nextMonth,15)).getTime();

        newYear=false;
    }

    $('#count_down').count_down({
        timestamp:time,
        callback:function (days,hours,minutes,seconds) {
            var message="";
            message+="Дней: "+days+", ";
            message+="часов: "+hours+", ";
            message+="минут: "+minutes+" и ";
            message+="секунд: "+seconds+" <br />";

            if (newYear) {

                message+="осталось до Нового года!";
            } else {
                message+="осталось до момента через 10 дней!";
            }

            note.html(message);
        }
    });
});