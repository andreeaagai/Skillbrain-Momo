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
      return "You have to write a number between 0 and 7.";
  }

}  

function dayReturn(dayNumber) {

  if (dayNumber === 0 || dayNumber <= 7) {
    return "Today is " + dayOfTheWeek(dayNumber) + ".";
  } else {
    throw new Error("Invalid day number. Please enter a number between 0 and 7.");
  }
}

  console.log(dayReturn(2));
  // console.log(dayReturn(11));