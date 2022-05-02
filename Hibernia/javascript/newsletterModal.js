// not sure of law surrounding non-tracking cookies so we can't use this
/* localStorage.setItem('IsModalShown', false); */ 


// Get the modal
var modal = document.getElementById("newsletterModal");
var thanksModal = document.getElementById("thanksModal");


// Get the <span> element that closes the modal
var registrationClose = document.getElementsByClassName("close")[0];
var closeThanks = document.getElementById("closeThanks");




// allow 'X' to close the modal
registrationClose.onclick = function() {
	modal.style.display = "none";
	thanksModal.style.display = "block";
}


// Allow clicking outside the modal to dismiss it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
	
	else if (event.target == thanksModal) {
		thanksModal.style.display = "none";
	}
} 




function submitEmail(){
	/* hide the modal now */
	modal.style.display = "none";
	thanksModal.style.display = "block"; /* show the thank you message */
}

