'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	console.log("page initialized");
	$(".btn").click(clickLikeBtn);

}

function clickLikeBtn(e){
	e.preventDefault();
	console.log("clicked");

	
	ga("send", "event", 'like', 'click');
}