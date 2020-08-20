// I need to get the current time first
// use moment
var now = moment();
var dayOfWeek = moment().format('dddd');
var month = moment().format('MMMM');
var date = moment().format('DD')
var hour = now.hour();


//  day of week, month, date
$('#currentDay').html(dayOfWeek + ', ' + month + ' ' + date);


// I need to get the hour from html and use it to change the textarea
    // this gets the hour block ex 9am, 10am. 11am...
  var timeBlock9 = document.getElementById('9Block').textContent;
  var timeBlock10 = document.getElementById('10Block').textContent;
  var timeBlock11 = document.getElementById('11Block').textContent;
  var timeBlock12 = document.getElementById('12Block').textContent;
  var timeBlock1 = document.getElementById('1Block').textContent;
  var timeBlock2 = document.getElementById('2Block').textContent;
  var timeBlock3 = document.getElementById('3Block').textContent;
  var timeBlock4 = document.getElementById('4Block').textContent;
  var timeBlock5 = document.getElementById('5Block').textContent;

//   Now I need to make the time into a number



console.log(timeBlock9);
console.log(timeBlock10);
console.log(timeBlock11);
console.log(timeBlock12);
console.log(timeBlock1);
console.log(timeBlock2);
console.log(timeBlock3);
console.log(timeBlock4);
console.log(timeBlock5);




// // function colorChange () {

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
    // // };

    // with the current time I need to change the colors of the text area 
    // if else statements

// I need to pull any local storage to its time block when the page loads
    // I need to push any added time block info to local storage when the user clicks the save button
        // I need button listeners to save data
        // button event listeners
                $(".saveBtn").click();
                // $("#9Btn, #10Btn, #11Btn, #12Btn, #13Btn, #14Btn, #15Btn, #16Btn, #17Btn").click();
                // $("#10Btn").click();
                // $("#11Btn").click();
                // $("#12Btn").click();
                // $("#13Btn").click();
                // $("#14Btn").click();
                // $("#15Btn").click();
                // $("#16Btn").click();
                // $("#17Btn").click();




