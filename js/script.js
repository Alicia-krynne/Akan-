<script>
function getAkanName () {
  let yearOfBirth = parseint(document.getElementById("year-input").value;
  let monthOfBirth = parserint(document.getElementById("month-input").value);
  let dayOfBirth = parseint(document.getElementById("day-input").value);
  let genders = document.getElementsByName("gender");
                            
  // function to get gender value
  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

  let myGenderValue = getGender();
  console.log(myGenderValue);
// check correct date entered

</script>