function dayOfTheWeek(weekDay) {
  
  let dayName = parseInt(weekDay);

  switch(dayName) {
    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    case 7:
    case 0:
      return "Sunday";

    default:
      throw "Invalid day number. Please enter a number between 0 and 7.";
  }
}  

function getOutput(dayNumber) {

  if (dayNumber >= 0 && dayNumber <= 7) {
    return "The week day number "+ dayNumber +" is called " + dayOfTheWeek(dayNumber) + ".";
  } 
}

  // console.log(getOutput(2));
  console.log(getOutput(11));