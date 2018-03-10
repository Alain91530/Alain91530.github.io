// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var hInput, hVal, lInput, lVal, colorInput, colorVal,submitData, grid, success;

hInput = $('#input_height');
lInput = $('#input_width');
grid = $('#pixel_canvas');
colorInput = $('#colorPicker')
submitData= $('#submit_data');
lVal = hInput.val();
hVal = lInput.val();
colorVal = colorInput.val();

// Your code goes here!

// Function to make the grid
function makeGrid(h,l) {
  // Remove previous grid if any
  $(grid).children().remove();
  // Loops to draw new Grid
  for (i=0 ; i<h ; i++){ // Loop on each row
    grid.append('<tr></tr'); //Add the row
    for (j=0 ; j<l ; j++){ //Loop on each column
      let currentRow =grid.find('tr').last();
      currentRow.append("<td></td>"); // Add a cell at the end of the current row
    }
  }
};

// Function to set or erase the color of a square un the grid
function setColor() {
  // Set the event of clicking in the grid
  $('td').on('click',function(){
    if ($(this).hasClass('colored')){ // Check if its'a coloured square
      $(this).css("background-color", 'white') // Erase if coloured
      }
    else {$(this).css("background-color", colorVal)} // Set if not
  $(this).toggleClass('colored'); // Toggle this square to colored or not
  })
};

// Setting events

// Change of Height of table
$(hInput).on('change', function() {
    hVal = $(this).val();
});

  // Change of width of table
$(lInput).on('change', function() {
  lVal = $(this).val();
});

// Change color
$(colorInput).on("change", function(){
     colorVal = $(this).val();
});

// Submission of table values
$(submitData).on('click', function(){
  makeGrid(hVal,lVal); // Draw the grid of the selected size
  setColor(); // Set the color in the grid
});
