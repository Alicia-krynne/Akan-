$(document).ready(function() {
    const akanForm = document.getElementById("akanForm");//targeting the id akanForm
    const maleNames =["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    akanForm.addEventListener("submit",(e)=> {
      e.preventDefault();//prevents the browser from  running the page by  default.
      const formData = new FormData(e.target); // this becomes the new form that has been filled arcordingly.
      var dateEntered = new Date(formData.get("date"));// this will convert the  dates entered into objects
      if (formData.get("gender")== "male") {
          document.getElementById("message").innerHTML="Akan name is" + maleNames[dateEntered.getDay()];
      } else {
          document.getElementById("message").innerHTML="Akan name is" + femaleNames[dateEntered.getDay()];
       }
  });
});
