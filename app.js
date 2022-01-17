function showLoginConsumer() {
    document.getElementById("drp-dwn1").classList.toggle("show");
    if(document.getElementById("drp-dwn2").classList.contains("show")) {
        document.getElementById("drp-dwn2").classList.remove("show")
    }
}

function showLoginRetailer() {
    document.getElementById("drp-dwn2").classList.toggle("show");
    if(document.getElementById("drp-dwn1").classList.contains("show")) {
        document.getElementById("drp-dwn1").classList.remove("show")
    }
}
// window.onclick = function(event) {
//   if (!event.target.matches('button')) {
//     var dropdowns = document.getElementsByClassName("login");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

