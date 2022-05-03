/* Based on code from https://www.w3schools.com/howto/howto_css_modals.asp */

// not sure of law surrounding non-tracking cookies so we can't use this
/* localStorage.setItem('IsModalShown', false); */ 


// Get the modal
var modal = document.getElementById("newsletterModal");


// Get the <span> element that closes the modal
var registrationClose = document.getElementsByClassName("close")[0];


$(document).ready(function(){
   setTimeout(function(){
       modal.style.display = "block";
   }, 5000);
});




// allow 'X' to close the modal
registrationClose.onclick = function() {
	modal.style.display = "none";
}


// Allow clicking outside the modal to dismiss it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
} 




function submitEmail(){
	/* hide the modal now */
	modal.style.display = "none";
}

