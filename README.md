# dayplanner

This project is currently incompleted and will be updated soon. Updates planned are highlighted in each section which will be updated.

## index.html

This file contains the initial div for the table which will eventually make up the day planner. This file links the javascript and jquery components together as well as linking the style.css file to the overall structure.

## style.css

This file is entirely blank and as of yet serves no purpose. However once the table is correctly populated style.css will play a key roll in readability and some functionality of the page. The goal is to re-approach this document once functionality has been added.

## script.js

This file currently contains and classifies the columns and rows of the table in j-query and displays the column associated with each data element. Col 0 will be populated by the time slots, Col 1 will be populated by the user input, and Col 2 will be populated by the save button. As of yet I have been unable to populate Col 0 in any reasonable way. All of function tableInit may need to be replaced in order to avoid the usage of more nested loops or nesting if/elseif/else statements within an already iterative process. One significant roadblock is the lack of recognition by the table data elements as to what class they are and so far any attempts to populate the table with the correct elements have led to the deletion of all test elements