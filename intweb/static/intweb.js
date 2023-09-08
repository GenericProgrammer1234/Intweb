$(document).ready(function(){

  let elements = $(".element");
  let button = $("#addelement");
  let wrapper = $("#wrapper")

button.click(function(){
  	let input = prompt("Element type: ")
  	if (input != null) {
  		if (input == "Heading") {
		  	wrapper.append(`<div class="element" contenteditable="true">
				<h1>This is a new heading!</h1>
			</div>
		  	`)
	    } else if(input == "Paragraph") {
		  	wrapper.append(`<div class="element" contenteditable="true">
					<p>This is a new paragraph</p>
				</div>
			`)
		} else if(input == "Image") {
			src = prompt("Source: ")
			if (src != null) {
				wrapper.append(`<div class="element">
					<img src="${src}" width="300" height="300">
				</div>
			    `)
			} else {
				alert("Invalid source")
			}
	    } else {
	    	alert("Invalid element type")
	    }
	}
   })
});