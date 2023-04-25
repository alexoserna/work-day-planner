$(function () {

  // Get the current day and display it in the header
  var currentDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDate);



});
