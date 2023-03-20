// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.



  var timeBlock = $('.time-block');
  var currentHour = dayjs().hour();

  timeBlock.each(function () {
    var timeBlock = $(this);

    // pulling textarea //
    var hour = timeBlock.attr('id').split('-')[1];
    console.log(parseInt(hour))
    var data = localStorage.getItem(hour);
    var textarea = timeBlock.find('textarea')
    textarea.val(data);

    if (hour < currentHour) {
      timeBlock.removeClass('present');
      timeBlock.removeClass('future');
      timeBlock.addClass('past');
    } else if (hour == currentHour) {
      timeBlock.removeClass('past');
      timeBlock.removeClass('future');
      timeBlock.addClass('present');
    } else {
      timeBlock.removeClass('present');
      timeBlock.removeClass('past');
      timeBlock.addClass('future');
    }

  });

  // eventListner for clicks on the save button
  $('.time-block button').on('click', submissions);

  function submissions() {
    var button = $(this);
    // select textare
    var textarea = button.prev();
    //get text values
    var parentElement = button.parent();

    //Store value to localStorage
    var value = textarea.val()
    var hourKey = parentElement.attr('id').split('-')[1];
    //Alert that event was saved
    console.log(hourKey)
    console.log(value)
    localStorage.setItem(hourKey, value)
  }

  var date = dayjs().format('MMMM,DD,YYYY')

  console.log(date)











});
