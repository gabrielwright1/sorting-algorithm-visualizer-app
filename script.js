// MVP Flow (Bubble Sort only)
// Create the random sample of lines to sort
// Move the lines around on the screen
// Demonstrate the sorting happening on the screen using animations/transitions
// Indicate to the user when the sorting starts/ends

app = {};

app.samplesArr = [];
app.isSorting = false;

// Utility
app.swapPositions = (arr, index1, index2) => {
	// handle swapping position of elements in array
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
};

app.drawLine = (index, length) => {
	// create and style a line based on length
	const lineEl = document.createElement("li");
	lineEl.setAttribute("id", index);
	lineEl.style.width = `${length}px`;
	return lineEl;
};

app.sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

// Visualization
app.animateSorting = (arr) => {
	// re-render the array of lines with each iteration
	// target sample container
	const sampleContainer = document.querySelector(".sample-container");

	// clear and replace with current array iteration (don't clear namespace)
	app.clearSamples(sampleContainer, false);

	// loop over array, build a new batch of lines, append to DOM
	for (let i = 0; i < arr.length; i++) {
		// draw a line
		const lineEl = app.drawLine(i, arr[i]);

		// append to DOM
		sampleContainer.append(lineEl);
	}
};

// Bubble Sort
app.bubbleSort = async (arr) => {
	let noSwaps;
	// Start looping with a variable called i, at the end of the array towards the beginning
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		// Start an inner loop with variable called j from the beginning until i-1
		for (let j = 0; j < i - 1; j++) {
			// pause sorting if user selects "stop"
			if (app.isSorting) {
				// update the container after a short delay
				await app.sleep(100);
				app.animateSorting(arr);

				// Compare if arr[j] is greater than arr[j+1], swap those two values
				if (arr[j] > arr[j + 1]) {
					app.swapPositions(arr, j, j + 1);
					// Optimization: Check if last time we made any swaps, if not, step out of loop
					noSwaps = false;
				}
			}
		}
		if (noSwaps) break;
	}
	// update the DOM with final array
	app.animateSorting(arr);

	// update flag
	app.isSorting = false;

	// reset buttons
	app.toggleDisable("#generate-sample");
	app.toggleDisable("#stop-sort");
};

// Selection Sort
app.selectionSort = async (arr) => {
	// Store the first element as the minimum value
	// Compare this minimum to the next item in the array until you find the smallest number
	// If a smaller number is found, designate the smaller number as the new "minimum" and continue until the end of the array
	// If the "minimum" is not at the index position that you began with, swap the two values
	// Repeat this with the next element until the array is sorted and shrink the scope of the array

	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}
		if (i !== lowest) {
			app.swapPositions(arr, i, lowest);

			// update the container after a short delay
			await app.sleep(100);
			app.animateSorting(arr);
		}
	}
	// update the DOM with final array
	app.animateSorting(arr);

	// update flag
	app.isSorting = false;

	// reset buttons
	app.toggleDisable("#generate-sample");
	app.toggleDisable("#stop-sort");
};

// Insertion Sort
app.insertionSort = async (arr) => {
	// Pick the second element in the array
	// Compare the second element with the one before it and swap if necessary
	// Continue to the next element and if it is in the correct order, iterate through the sorted portion (left side) to place the element in the correct place
	// Repeat until the array is sorted

	for (let i = 1; i < arr.length; i++) {
		// set aside the current value in a variable
		let current = arr[i];
		// declare inner counter in outer loop
		let j;
		// loop from right to left, until either the current value is smaller or end of array
		for (j = i - 1; j >= 0 && arr[j] > current; j--) {
			// copy/paste current element (j) to the right (j+1)
			arr[j + 1] = arr[j];
		}
		// once loop terminates, we've found the correct spot (j)
		// insert the currentVal that we set aside to the right of the current value
		arr[j + 1] = current;

		// update the container after a short delay
		await app.sleep(100);
		app.animateSorting(arr);
	}

	app.animateSorting(arr);

	// update flag
	app.isSorting = false;

	// reset buttons
	app.toggleDisable("#generate-sample");
	app.toggleDisable("#stop-sort");
};

// UI Setup
app.setupGenerateButton = () => {
	// target generate sample button
	const sampleBtn = document.querySelector("#generate-sample");
	sampleBtn.addEventListener("click", () => {
		// toggle sorting buttons
		app.enableSorting();
		// only generate samples if the algorithm isn't running
		if (!app.isSorting) {
			app.generateSamples();
			console.log(app.samplesArr, "start");
		}
	});
};

app.setupStartButton = () => {
	const btn = document.querySelector("#start-sort");
	const sortType = document.querySelector("#sort-type");

	// initially disable button until sample is generated
	btn.disabled = true;

	btn.addEventListener("click", () => {
		// update flag
		app.isSorting = true;
		app.toggleDisable("#start-sort");
		app.toggleDisable("#generate-sample");
		app.toggleDisable("#stop-sort");

		// check for user input
		if (sortType.value === "bubble-sort") {
			app.bubbleSort(app.samplesArr);
		} else if (sortType.value === "selection-sort") {
			app.selectionSort(app.samplesArr);
		} else if (sortType.value === "insertion-sort") {
			app.insertionSort(app.samplesArr);
		}
	});
};

app.setupStopButton = () => {
	// target stop button, add a click listener, update isSorting flag to false
	const btn = document.querySelector("#stop-sort");

	// initially disable button until sample is generated
	btn.disabled = true;

	btn.addEventListener("click", () => {
		app.isSorting = false;
		app.toggleDisable("#start-sort");
	});
};

app.toggleDisable = (buttonId) => {
	// depending on which button type is passed in, target element, and toggle disabled
	const btn = document.querySelector(`${buttonId}`);

	if (btn.disabled) {
		btn.disabled = false;
	} else {
		btn.disabled = true;
	}
};

app.enableSorting = () => {
	const startBtn = document.querySelector("#start-sort");
	startBtn.disabled = false;
};

// Sample Setup
app.generateSamples = () => {
	// target elements
	const sampleContainer = document.querySelector(".sample-container");
	const numSamples = document.querySelector("#num-samples");

	// clear current list of samples
	app.clearSamples(sampleContainer, true);

	// generate random line length
	const randomizeLength = (max, min) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	// generate samples and append to container
	for (let i = 0; i < numSamples.value; i++) {
		const randomLineLength = randomizeLength(10, 400);

		// store lengths in namespace
		app.samplesArr.push(randomLineLength);

		// create line, give it a length, create a unique id for it
		const lineEl = app.drawLine(i, randomLineLength);

		// append to DOM
		sampleContainer.append(lineEl);
	}
};

app.clearSamples = (sampleContainer, isClearingNamespace) => {
	// loop over samples in container and remove each one
	while (sampleContainer.firstChild) {
		sampleContainer.removeChild(sampleContainer.firstChild);
	}
	// remove samples from samples array
	if (isClearingNamespace) {
		app.samplesArr = [];
	}
};

app.init = () => {
	app.setupGenerateButton();
	app.setupStartButton();
	app.setupStopButton();
};

$(() => {
	app.init();
});
