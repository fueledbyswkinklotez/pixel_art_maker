const gridForm = document.getElementById('sizePicker');
//these variables represent the inputs provided by the user for Height & Width
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');
//this variable represents the table where the grid will be drawn
let tableCanvas = document.getElementById('pixelCanvas');

function makeGrid() {
	tableCanvas.innerHTML = '';
	//creates an empty table for tableCanvas (id = pixelCanvas)
	let rowCount = gridHeight.value;
	//retrieves height value from user input and assigns to rowCount for # rows in table
	let columnCount = gridWidth.value;
	//retrieves height value from user input and assigns to columnCount for # columns in table
	//used let for rowCount & columnCount so that the values can be reassigned each time "submit" is pressed
	for (row = 0; row < rowCount; row++) {
	//loops over number of rows
		let newRow = document.createElement('tr');
		//creates a new table row element
		tableCanvas.appendChild(newRow);
		//appends the new row to the tableCanvas
		for (col = 0; col < columnCount; col++) {
		//for each new row created, loop over the # columns (gridWidth value)
			let cell = document.createElement('td');
			//create a new table data element "cell"
			let counter = 0;
			cell.addEventListener('click', function colorMe(click){
			//add an event listener to each new cell as they are created
				let pickedColor = document.getElementById('colorPicker').value;
				let clickedCell = click.target;
				//create an if test so that every other click "resets" the cell color to blank/white
				//if a cell is clicked once, it will be filled with pickedColor
				//if a cell is clicked a second time, it will be "cleared"
				if (counter % 2 ==0){
				//even clicks
					clickedCell.style.backgroundColor = pickedColor;
					//set the background color of clickedCell to pickedColor
				}
				else{
				//odd clicks
					let clickedCell = click.target;
					clickedCell.style.backgroundColor = 'white';
					//set the background color of clickedCell to white
				}
				counter += 1;
				//increment counter by 1
			});
			newRow.appendChild(cell);
			//add the new cell to the new row and repeat for x # of columns
		};
	};
gridForm.addEventListener('submit', function myfunction () {
	event.preventDefault();//prevents the form from submitting to server and refreshing the page
	makeGrid();//calls makeGrid() to draw the # rows/columns based on user inputs
});
