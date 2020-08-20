// I need to get the current time first
// use moment
var now = moment();
var dayOfWeek = moment().format('dddd');
var month = moment().format('MMMM');
var date = moment().format('DD')
var hour = moment().format('HH');


//  day of week, month, date
$('#currentDay').html(dayOfWeek + ', ' + month + ' ' + date);


// I need to get the hour from html and use it to change the textarea
// this gets only the number text from the time block

var timeBlock9 = parseInt($("#9Block").text().replace(/\D/g, ''));
var timeBlock10 = parseInt($('#10Block').text().replace(/\D/g, ''));
var timeBlock11 = parseInt($('#11Block').text().replace(/\D/g, ''));
var timeBlock12 = parseInt($('#12Block').text().replace(/\D/g, ''));
var timeBlock1 = parseInt($('#1Block').text().replace(/\D/g, '')) + 12;
var timeBlock2 = parseInt($('#2Block').text().replace(/\D/g, '')) + 12;
var timeBlock3 = parseInt($('#3Block').text().replace(/\D/g, '')) + 12;
var timeBlock4 = parseInt($('#4Block').text().replace(/\D/g, '')) + 12;
var timeBlock5 = parseInt($('#5Block').text().replace(/\D/g, '')) + 12;

let hours = [timeBlock9, timeBlock10, timeBlock11, timeBlock12, timeBlock1, timeBlock2, timeBlock3, timeBlock4, timeBlock5];


// with the current time I need to change the colors of the text area 
// if else statements
console.log(hour);
function colorChange() {
    if (parseInt(hour) === hours) {
        // if current hour = time block then add present css class to that clock
        $("textarea").addClass("present");
    } else if (parseInt(hour) > hours) {
        // else/if current hour > time block add past css class to time block
        $("textarea").addClass("past");
    } else {
        // else curruent hour < time block add future css class to time block
        $("textarea").addClass("future");
    }
};

for (var i = 0; i < hours.length;) {
    colorChange();
    i++;
    console.log(hours.length);
};

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




