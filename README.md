Sorting Algorithm Visualizer

How it works

-   User selects a sorting algorithm from a dropdown
-   Once option is selected, store user input in a variable
-   Display a randomly generated list of lines with varying length betweeen 10px and 400px
-   Allow the user to reset the pattern or generate a new pattern of starter data to sort
-   When algorithm runs, move lines up/down based on the sorting algorithm logic

MVP Flow (Bubble Sort only)

-   Create the random sample of lines to sort
-   Move the lines around on the screen
-   Demonstrate the sorting happening on the screen using animations/transitions
-   Indicate to the user when the sorting starts/ends

Elementary Sorting Algorithms:

-   Bubble sort
-   Selection sort
-   Insertion sort

Bubble Sort Notes:

-   Larger values will bubble to the top
-   Smaller and larger elements swap positions
-   As items get solidified, the number of items needed to sort decreases
-   Not very efficient, but important because other algorithms build upon it

Bubble Sort Pseudocode:

-   Define a function called bubble sort, it takes in an array (assume its all numbers)
-   Start looping with a variable called i, at the end of the array towards the beginning
-   Start an inner loop with variable called j from the beginning until i-1
-   Compare if arr[j] is greater than arr[j+1], swap those two values
-   Return the sorted array
