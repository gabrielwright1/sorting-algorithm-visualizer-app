# Sorting Algorithm Visualizer

How this app works:

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

# Elementary Sorting Algorithms:

-   Best used when the dataset is very small, more complex algorithms are better for larger datasets

Types:

-   Bubble sort
-   Selection sort
-   Insertion sort

Time complexity (all three - worst case):

-   Quadratic time - O(n<sup>2</sup>)

Space complexity (all three - worst case):

-   Constant space - O(1)

## Bubble Sort

-   Larger values will bubble to the top
-   Smaller and larger elements swap positions
-   As items get solidified, the number of items needed to sort decreases
-   Not very efficient, but important because other algorithms build upon it

### Pseudocode:

-   Define a function called bubble sort, it takes in an array (assume its all numbers)
-   Start looping with a variable called i, at the end of the array towards the beginning
-   Start an inner loop with variable called j from the beginning until i-1
-   Compare if arr[j] is greater than arr[j+1], swap those two values
-   Return the sorted array

### Optimization:

-   This works by using a boolean variable (noSwaps) which flips between true/false depending on whether swaps are necessary
-   When noSwaps = true, break the loop, when false proceed with swapping and return the swapped array.
-   As the array grows in length, the optimized solution shaves off a lot of time

### Use Case:

-   Best used on nearly sorted, the optimization shortens the amount of sorting as items get sorted
-   Worst Case - O(n<sup>2</sup>)
-   Best Case - O(n) - nearly sorted

## Selection Sort

-   Similar to bubble sort, except it places the smallest values into a sorted position (front of the arr) rather than the biggest value

### Pseudocode:

-   Store the first element as the minimum value
-   Compare this minimum to the next item in the array until you find the smallest number
-   If a smaller number is found, designate the smaller number as the new "minimum" and continue until the end of the array
-   If the "minimum" is not at the index position that you began with, swap the two values
-   Repeat this with the next element until the array is sorted and shrink the scope of the array

### Use Case:

-   If we want to minimize the number of swaps (i.e. writing to memory), because the swaps only happen at the end of the comparisons, compared to bubble sort where they happen constantly.
-   Worst Case - O(n<sup>2</sup>)
-   Best Case - O(n<sup>2</sup>)

## Insertion Sort

-   Takes each element and places it where it should go in the sorted portion of the array picks an item and moves it to the correct place in the sorted portion of the array

### Pseudocode:

-   Pick the second element in the array
-   Compare the second element with the one before it and swap if necessary
-   Continue to the next element and if it is in the correct order, iterate through the sorted portion (left side) to place the element in the correct place
-   Repeat until the array is sorted

### Use Case

-   If live data is coming in from the user, we can immediately place it where it needs to be within the left-hand sorted part of the array.
-   Worst Case - O(n<sup>2</sup>)
-   Best Case - O(n) - nearly sorted

# Recursion (Pre-requisite for advanced sorting algorithms)

## Objectives

-   Define recursion and how it can be used
-   Understand two essential components of a recursive function
-   Visualize the call stack o better debug and understand recursive functions

### What is recursion?

-   A process/function that calls itself
-   An alternative to an iterative approach
-   Adds/removes function invocations from call stack (FILO)

## Examples of recursion:

-   JSON.parse or JSON.stringify
-   document.getElementById or DOM traversal algorithms
-   Object traversal
-   Complex data structures

## Parts of recursive function:

-   Base case (end condition)
-   Different input

## Common Pitfalls

-   Missing a base case (infinite recursion = stack overflow)

## Recursion Patterns:

1. Helper Method Recursion
2. Pure Recursion

### Helper Method Recursion:

Two nested functions: outer (non-recursive) and inner (recursive)

-   Outer: we define results container in the outer scope
-   Inner: we perform recursion and populate the results container (i.e. inner function can see outer scope due to a closure being created when the inner function was invoked)

### Pure Recursion:

-   The function is completely self-contained
-   No external data structure
-   Harder to understand

Tips to avoid mutating datastructures:

-   Arrays: use slice, spread, or concat to create copies
-   Objects: use spread, or Object.assign
-   Strings: use slice, substr, or substring to make copies
