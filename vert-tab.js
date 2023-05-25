// Declare all variables
let i;
let contingutCarpeta = document.getElementsByClassName("tabcontent");


// contingutCarpeta.forEach(element => {
//   element.style.display = "none";
// });

for (i = 0; i < contingutCarpeta.length; i++) {
  contingutCarpeta[i].style.display = "none";
}
contingutCarpeta[0].style.display = "block";
contingutCarpeta[0].style.className.replace(" active", "");


function obreEnunciat(evt, enunciat) {
  let enllasosCarptes;

  // Get all elements with class="tabcontent" and hide them
  for (i = 0; i < contingutCarpeta.length; i++) {
    contingutCarpeta[i].style.display = "none";
  }
  

  // Get all elements with class="tablinks" and remove the class "active"
  enllasosCarptes = document.getElementsByClassName("tablinks");
  for (i = 0; i < enllasosCarptes.length; i++) {
    enllasosCarptes[i].className = enllasosCarptes[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(enunciat).style.display = "block";
  evt.currentTarget.className += " active";
}