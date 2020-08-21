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
// changes the current hour to a number
// let hourNumb = parseInt(hour);

// with the current time I need to change the colors of the text area 
// if else statements
// console.log(hourNumb);
var text = $('textarea')
function colorChange(currentIndex) {
   
    if (hour === hours[currentIndex]) {
        // if current hour = time block then add present css class to that clock
        text[currentIndex].classList.add("present");
    } else if (hour > hours[currentIndex]) {
        // else/if current hour > time block add past css class to time block
       text[currentIndex].classList.add("past");
    } else {
        // else curruent hour < time block add future css class to time block
       text[currentIndex].classList.add("future");
    }
};

for (var i = 0; i < text.length; i++) {
    colorChange(i);
    // console.log(text[i]);
};

// I need to pull any local storage to its time block when the page loads
// I need to push any added time block info to local storage when the user clicks the save button
// I need button listeners to save data
// button event listeners
    
    $('Btn9').on('click', function () {
        var text9am = $('#text9').val();
        console.log(text9am)
        localStorage.setItem('9am', text9am)
    });




