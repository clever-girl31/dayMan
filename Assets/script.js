// wraps code in call to jQ
$(document).ready(function () {
  // creates variable to represent all save buttons
  var saveBtn = document.querySelectorAll('.saveBtn')
  // event listener for clicking save
  $(saveBtn).click(function() {
    // creates variable representing the value of users input in whichever box they have clicked the save button of. 
    var textinput = $(this).siblings('textarea.description').val()
    // creates variable representing the id of the parent container of the whichever text box they are typing in, aka the hour 
    var parentId = $(this).parent().attr('id')
    // save to local storage. key is the hour, value is the users notes.
    localStorage.setItem(parentId, textinput)
  })
  // create variable for current hour
  var currentHour = dayjs().format('HH')
  // create two digit variable to represent id of each hour's box. had to add a 0 to hour-9 in the html 
  $('.time-block').each(function() {
    var idHour = $(this).attr('id').slice(-2)
    // grabs items from local storage to be displayed back on table
    var storedData = localStorage.getItem($(this).attr('id'))
    // if stored data exists, print to each corresponding text area
    if (storedData) {
      $(this).find('textarea.description').val(storedData)
    }
    // applies past/present/future classes on condition of relationship b/t current hour and hour represented in box id.
    if (currentHour == idHour) {
      $(this).addClass('present')        
    } else if (currentHour > idHour) {
      $(this).addClass('past')
    } else {
      $(this).addClass('future')
    }
  })
  // creates a variable for the #currentday div
  var currentDay = $('#currentDay')
  // creates a variable to represent current day provided by dayjs
  var todaysDate = dayjs().format('MMMM D, YYYY')
  // inserts todays date into #currentDay inner HTML
  currentDay.html(todaysDate)
  
});
