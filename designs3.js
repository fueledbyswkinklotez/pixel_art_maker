const gridForm = document.getElementById('sizePicker');
//these variables represent the inputs provided by the user for Height & Width
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');
//this variable represents the table where the grid will be drawn
let tableCanvas = document.getElementById('pixelCanvas');

function colorMe() {

};

function makeGrid() {
	tableCanvas.innerHTML = '';//creates an empty table for tableCanvas (id = pixelCanvas)
	let rowCount = gridHeight.value; //retrieves height value from user input and assigns to rowCount for # rows in table
	let columnCount = gridWidth.value; //retrieves height value from user input and assigns to columnCount for # columns in table
	//used let for rowCount & columnCount so that the values can be reassigned each time "submit" is pressed
	for (i = 0; i < rowCount; i++) { //loops over number of rows
		let newRow = document.createElement('tr');//creates a new table row element
		tableCanvas.appendChild(newRow);//appends the new row to the tableCanvas
		for (x = 0; x < columnCount; x++) {//for each new row created, loop over the # columns (gridWidth value)
			let cell = document.createElement('td'); //create a new table data element "cell"
			cell.addEventListener('click', function colorMe(click){ //add an event listener to each new cell as they are created
				let pickedColor = document.getElementById('colorPicker').value; //gets the color "value" currently chosedn in the colorPicker and assigns to variable
				click.target.style.backgroundColor = pickedColor; //"fills" the cell that is clicked with color selected in colorPicker
			});
			newRow.appendChild(cell);//add the new cell to the new row and repeat for x # of columns
		};
	};
};


gridForm.addEventListener('submit', function myfunction () {
	event.preventDefault();//prevents the form from submitting to server and refreshing the page
	makeGrid();//calls makeGrid() to draw the # rows/columns based on user inputs
});
