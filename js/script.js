<script>
function return getAkanName () {
  let yearOfBirth = document.getElementById("year-input").value;
  let monthOfBirth = Number(document.getElementById("month-input").value);
  let dayOfBirth = Number(document.getElementById("day-input").value);
  let genders = document.getElementsByName("gender");

  // function to get gender
  // for  every  element in the let gender,run the function genders on a loop:if its checked, return the value.run  the command on loop  for every  entry
  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

  let myGenderValue = getGender();
  console.log(myGenderValue);

  // validation functions  how  do i know my  code will run? the if function  lets us  vallidate the  the  entry  made
  function monthValidator () {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }
  }
// the  day   second line of script is to  ensure the month of february is included as it is a leap  year.dayof birth on a leap year cannot be >28 or <1.
  function dayValidator () {
    if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
      if (dayOfBirth > 28 || dayOfBirth < 1) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth > 29) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth < 1) {
        return false;
      } else {
        return true;
      }
    } else if (dayOfBirth < 1 || dayOfBirth > 31){
      return false;
    } else {
      return true;
    }
  }

  //validation variables
  let monthValid = monthValidator();
  let dayValid = dayValidator();

  //formula to determine day of birth (Sunday = 1, Monday = 2). this  formular  works best  when each  part is done separately, i  shall use the  functions Math.floor and .slice to  make it executable wth no  errors.
// it has errors the mathematical  fomular  wont  run.fix the bug.
  let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
          ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

  // these arrays of Akan names for males & females and  respective days of the week
  let daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];

  //generating an index value to select items on arrays This method returns -1 if the value to search for never occurs.
  let index;
  if (dayOfWeekNumber == 0){
    index = 6;
  } else {
    index = dayOfWeekNumber - 1;
  }

  console.log(index);

  if (myGenderValue == "male" && monthValid && dayValid) {
    document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";
    document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[index];
    return false;
  } else if (myGenderValue == "female" && monthValid && dayValid) {
    document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";
    document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[index];
    return false;
  } else {
    alert("You entered an invalid day or month, please try again");
  }
}
</script>