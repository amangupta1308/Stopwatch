var timer= false; //will tell whether timer is running or not
var hr=0;
var min=0;
var sec=0;
var count=0;  // we'll show 100th part of second in this

function start(){
    timer=true;
    stopwatch();
}
function stop(){
    timer=false;
}
function reset(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("hr").innerHTML = "00";    // could have written =hr but then single 0 will come as in maths, 00 is 0 so to show 00, we wrte "00".
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}
function stopwatch(){
    if(timer==true)
    {
        //after every 10ms, increase the count value by 1
        count++;
        if(count==100)
        {
            count=0;
            sec++;
        }
        if(sec==60)
        {
            sec=0;
            min++;
        }
        if(min==60)
        {
            min=0;
            hr++;
            sec=0;
        }
        document.getElementById("hr").innerHTML = hr;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
        document.getElementById("count").innerHTML = count;
        setTimeout("stopwatch()",10);
        // wait for 10 ms and then execute again as in count, we are storing the 100th part and ms is 1000th part of second so waited for 10ms.
        //stopwatch() will get continuously called until someone clicks on stop or reset. and i n that the timer is false so this if condition will get false hence settimeout will not be executed.

    }
}