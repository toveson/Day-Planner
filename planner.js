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
// this gets only the number text from the time block

var timeBlock9 = $("#9Block").text().replace(/\D/g,'');
var timeBlock10 = $('#10Block').text().replace(/\D/g,'');
var timeBlock11 = $('#11Block').text().replace(/\D/g,'');
var timeBlock12 = $('#12Block').text().replace(/\D/g,'');
var timeBlock1 = $('#1Block').text().replace(/\D/g,'');
var timeBlock2 = $('#2Block').text().replace(/\D/g,'');
var timeBlock3 = $('#3Block').text().replace(/\D/g,'');
var timeBlock4 = $('#4Block').text().replace(/\D/g,'');
var timeBlock5 = $('#5Block').text().replace(/\D/g,'');

let hours = [timeBlock9, timeBlock10, timeBlock11, timeBlock12, timeBlock1, timeBlock2, timeBlock3, timeBlock4, timeBlock5];

console.log(hours);

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




