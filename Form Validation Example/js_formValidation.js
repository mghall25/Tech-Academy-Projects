$(document).ready(function() {

	function calc() {
		// get entries from radio buttons - note - error if nothing selected on form
		var crust = document.querySelector('input[name="selectedCrust"]:checked').value;
		
		var errorMsg="";
		
		// check for errors
		if (isEmpty(crust)) {
			if (errorMsg !== null && errorMsg!=="") {errorMsg = errorMsg + ",";}
			errorMsg = errorMsg + " crust";
		}
		
		if (errorMsg!==null || errorMsg!=="") {
			errorMsg = "Please select at least one: " + errorMsg;
			console.log(errorMsg);
		}
	};

	function isEmpty(text){
		console.log(text.length);
		if (text.length === 0) {return true;}
		return false;
	};

});
