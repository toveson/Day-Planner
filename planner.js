// I need to get the current time first
    // use moment
    var now = moment();
    var dayOfWeek = moment().format('dddd');
    var month = moment().format('MMMM');
    var date = moment().format('DD')
    var hour = now.hour();

    $('#currentDay').html(dayOfWeek + ', ' + month + ' ' + date);
  

//  day of week, month, date
    // function colorChange () {

    //     if (hour = /* div */){
    //         // if current hour = time block then add present css class to that clock
    //         $("#text9").addClass("present");
    //     } else if (hour > /*past*/) {
    //         // else/if current hour > time block add past css class to time block
    //         $("#text9").addClass("past");
    //     } else {
    //         // else curruent hour < time block add future css class to time block
    //         $("#text9").addClass("future");
    //     }
    // };

    // with the current time I need to change the colors of the text area 
    // if else statements

// I need to pull any local storage to its time block when the page loads
    // I need to push any added time block info to local storage when the user clicks the save button
        // I need button listeners to save data
    
