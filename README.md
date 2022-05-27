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

Bubble Sort Optimization:

-   To be used when the array is nearly sorted, the optimization shortens the amount of sorting as items get sorted
-   This works by using a boolean variable (noSwaps) which flips between true/false depending on whether swaps are necessary
-   When noSwaps = true, break the loop, when false proceed with swapping and return the swapped array.
-   As the array grows in length, the optimized solution shaves off a lot of time
-   Time complexity for unoptimized solution: O(n^2)
-   Time complexity for optimized solution: O(2n) ~ O(n)

Selection Sort Notes:

-   Similar to bubble sort, except it places the smallest values into a sorted position (front of the arr) rather than the biggest value

Selection Sort Pseudocode:

-   Store the first element as the minimum value
-   Compare this minimum to the next item in the array until you find the smallest number
-   If a smaller number is found, designate the smaller number as the new "minimum" and continue until the end of the array
-   If the "minimum" is not at the index position that you began with, swap the two values
-   Repeat this with the next element until the array is sorted and shrink the scope of the array
