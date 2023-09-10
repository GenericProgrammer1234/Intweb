$(document).ready(function(){
  let elements = $(".element");
  let button = $("#addelement");
  let wrapper = $("#wrapper");
  
  wrapper.on("click", "#addelement", function(){
	let input = prompt("Element type: ");
	if (input != null) {
		switch (input) {
		case "Heading":
			wrapper.append(`<div class="element" contenteditable="true">
			<h1>This is a new heading!</h1>
			</div>`);
			break;
		case "Paragraph":
			wrapper.append(`<div class="element" contenteditable="true">
			<p>This is a new paragraph</p>
			</div>`);
			break;
		case "Image":
			let src = prompt("Source: ");
			if (src != null) {
			wrapper.append(`<div class="element">
				<img src="${src}" width="300" height="300">
			</div>`);
			} else {
			alert("Invalid source");
			}
			break;
		default:
			alert("Invalid element type");
		}
	}
  });
});