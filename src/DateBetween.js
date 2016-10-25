let DateBetween = function(startDate, endDate, format) {
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let distance = endDate - startDate;

  if (distance < 0) {
    return "count down date expired";
  }

  let days = Math.floor(distance / day);
  let hours = Math.floor((distance % day) / hour);
  let hoursIncDays = Math.floor(distance / hour);
  let minutes = Math.floor((distance % hour) / minute);
  let seconds = Math.floor((distance % minute) / second);

  var day_description;
  var hour_description;
  var min_description;
  var sec_description;

  if(days == 1) {
    day_description = ' day ';
  } else {
    day_description = ' days ';
  }

  if(hours == 1) {
    hour_description = ' hour ';
  } else {
    hour_description = ' hours ';
  }

  if(minutes == 1) {
    min_description = ' minute ';
  } else {
    min_description = ' minutes ';
  }

  if(seconds == 1) {
    sec_description = ' second';
  } else {
    sec_description = ' seconds';
  }

  if(format.indexOf('%days') === -1) {
    hours = hoursIncDays;
  }

  return format.replace('%days', days)
      .replace('%daysDescription', day_description)
      .replace('%hours', hours)
      .replace('%hoursDescrption', hour_description)
      .replace('%minutes', minutes)
      .replace('%minutesDescription', min_description)
      .replace('%seconds', seconds)
      .replace('%secondsDescription', sec_description);
}

module.exports = DateBetween;
