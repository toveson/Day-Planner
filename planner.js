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

// Getting local storage and displaying it in the textarea




// with the current time I need to change the colors of the text area 
// if else statements

var text = $('textarea')
function colorChange(currentIndex) {
   
    if (hour == hours[currentIndex]) {
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
// button event listeners
// I need to push any added time block info to local storage when the user clicks the save button
// I need button listeners to save data


// Button listener to save user input to local storage
$( "#Btn9" ).click(function() {
    let textBlock9 = $("#text9").val();
    localStorage.setItem('text9', textBlock9);
  });
// load local storage to textarea
  $( "#text9" ).append(localStorage.getItem('text9'));

  $( "#Btn10" ).click(function() {
    let textBlock10 = $("#text10").val();
    localStorage.setItem('text10', textBlock10);
  });

  $( "#text10" ).append(localStorage.getItem('text10'));
  
  $( "#Btn11" ).click(function() {
    let textBlock11 = $("#text11").val();
    localStorage.setItem('text11', textBlock11);
  });

  $( "#text11" ).append(localStorage.getItem('text11'));
  
  $( "#Btn12" ).click(function() {
    let textBlock12 = $("#text12").val();
    localStorage.setItem('text12', textBlock12);
  });

  $( "#text12" ).append(localStorage.getItem('text12'));


  $( "#Btn13" ).click(function() {
    let textBlock13 = $("#text13").val();
    localStorage.setItem('text13', textBlock13);
  });

  $( "#text13" ).append(localStorage.getItem('text13'));

  $( "#Btn14" ).click(function() {
    let textBlock14 = $("#text14").val();
    localStorage.setItem('text14', textBlock14);
  });

  $( "#text14" ).append(localStorage.getItem('text14'));


  $( "#Btn15" ).click(function() {
    let textBlock15 = $("#text15").val();
    localStorage.setItem('text15', textBlock15);
  });

  $( "#text15" ).append(localStorage.getItem('text15'));


  $( "#Btn16" ).click(function() {
    let textBlock12 = $("#text16").val();
    localStorage.setItem('text16', textBlock12);
  });

  $( "#text16" ).append(localStorage.getItem('text16'));

  $( "#Btn17" ).click(function() {
    let textBlock12 = $("#text17").val();
    localStorage.setItem('text17', textBlock12);
  });

  $( "#text17" ).append(localStorage.getItem('text17'));