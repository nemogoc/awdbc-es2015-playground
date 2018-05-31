

function countDown(countdownTime){
    if (countdownTime < 0){
        return console.log("error");
    }
    else if (countdownTime === 0){
        console.log("Ring Ring Ring!!!");
    }
    else {
        console.log("Timer: " + countdownTime);
        countdownTime--;
        var id = setInterval(function(){
            if(countdownTime === 0){
                clearInterval(id);
                console.log("Ring Ring Ring!!!");
            }
            else {
                console.log("Timer: " + countdownTime);
                countdownTime--;
            }
        }, 5000);
    }
}

// countDown(0);
// countDown(1);
// countDown(3);
// countDown(-1);