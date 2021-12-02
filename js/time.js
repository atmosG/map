function timeTyping() {
    let currentTime = new Date();
    let utcTime = [ 
        currentTime.getUTCMonth()+1, 
        currentTime.getUTCDate(), 
        currentTime.getUTCHours(), 
        currentTime.getUTCMinutes()
    ];
    let year = currentTime.getUTCFullYear().toString();

    utcTime.forEach((cv,idx) => {
        utcTime[idx] = cv.toString().padStart(2,'0');
    });
    
    
    let [month, day, hour, min] = [...utcTime];
    
    $('.time-now').children('span').text(`${year}-${month}-${day} ${hour}:${min}`);
}

timeTyping();

