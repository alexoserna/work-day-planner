$(function () {

  // Get the current day and display it in the header
  var currentDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDate);

  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    // Get the id of the containing time-block
    var timeBlockId = $(this).closest(".time-block").attr("id");

    // Get the user input from the corresponding textarea
    var userInput = $(this).siblings(".description").val();

    // Save the user input in local storage using the timeBlockId as the key
    localStorage.setItem(timeBlockId, userInput);
  });

  // Apply the past, present, or future class to each time block
  $(".time-block").each(function () {
    // Get the hour of the time block from the id attribute
    var hour = parseInt($(this).attr("id").split("-")[1]);

    // Get the current hour in 24-hour format using Day.js
    var currentHour = dayjs().hour();

    // Add the appropriate class based on the comparison between the time block hour and the current hour
    if (hour < currentHour) {
      $(this).children(".description").addClass("past");
    } else if (hour === currentHour) {
      $(this).children(".description").addClass("present");
    } else {
      $(this).children(".description").addClass("future");
    }
  });

  // Get any saved user input from local storage and display it
  $(".time-block").each(function () {
    // Get the id of the time block
    var timeBlockId = $(this).attr("id");

    // Get the corresponding user input from local storage
    var userInput = localStorage.getItem(timeBlockId);

    // If there is saved user input, set the value of the textarea to it
    if (userInput !== null) {
      $(this).children(".description").val(userInput);
    }
  });

});
