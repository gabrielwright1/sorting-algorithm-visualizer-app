// MVP Flow (Bubble Sort only)
// Create the random sample of lines to sort
// Move the lines around on the screen
// Demonstrate the sorting happening on the screen using animations/transitions
// Indicate to the user when the sorting starts/ends

app = {};

app.samplesArr = [];

// Utility
app.swapPositions = (arr, index1, index2) => {
	// handle swapping position of elements in array
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
};

// Bubble Sort
app.bubbleSort = (arr) => {
	console.log("************START BUBBLE SORT*************");

	let noSwaps;
	// Start looping with a variable called i, at the end of the array towards the beginning
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		// Start an inner loop with variable called j from the beginning until i-1
		for (let j = 0; j < i - 1; j++) {
			console.log(arr, "swapped: ", arr[j], arr[j + 1]);
			// Compare if arr[j] is greater than arr[j+1], swap those two values
			if (arr[j] > arr[j + 1]) {
				app.swapPositions(arr, j, j + 1);
				// Optimization: Check if last time we made any swaps, if not, step out of loop
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}

	console.log(arr, "final");
	console.log("************END BUBBLE SORT*************");

	return arr;
};

// Selection Sort
app.selectionSort = (arr) => {
	console.log("************START SELECTION SORT*************");
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
			console.log(arr, "swapped: ", arr[i], arr[lowest]);
		}
	}
	console.log(arr, "final");

	console.log("************END SELECTION SORT*************");
	return arr;
};

// Insertion Sort
app.insertionSort = (arr) => {
	console.log("************START INSERTION SORT*************");
	// Pick the second element in the array
	// Compare the second element with the one before it and swap if necessary
	// Continue to the next element and if it is in the correct order, iterate through the sorted portion (left side) to place the element in the correct place
	// Repeat until the array is sorted

	for (let i = 1; i < arr.length; i++) {
		// set aside the current value in a variable
		let current = arr[i];
		let j;
		// loop from right to left, until either the current value is smaller or end of array
		for (j = i - 1; j >= 0 && arr[j] > current; j--) {
			// copy/paste current element (j) to the right (j+1)
			arr[j + 1] = arr[j];
		}
		// once loop terminates, we've found the correct spot (j)
		// insert the currentVal that we set aside to the right of the current value
		arr[j + 1] = current;
		console.log(arr, "inserted: ", current);
	}
	console.log(arr, "final");
	console.log("************END INSERTION SORT*************");
	return arr;
};

// UI Setup
app.setupSampleButton = () => {
	// target generate sample button
	const sampleBtn = document.querySelector("#sample-generator");
	sampleBtn.addEventListener("click", () => {
		app.generateSamples();
		console.log(app.samplesArr, "start");
	});
};

app.setupSortingButton = () => {
	const btn = document.querySelector("#start-sort");
	const sortType = document.querySelector("#sort-type");

	btn.addEventListener("click", () => {
		if (sortType.value === "bubble-sort") {
			app.bubbleSort(app.samplesArr);
		} else if (sortType.value === "selection-sort") {
			app.selectionSort(app.samplesArr);
		} else if (sortType.value === "insertion-sort") {
			app.insertionSort(app.samplesArr);
		}
	});
};

// Sample Setup
app.clearSamples = (sampleContainer) => {
	// loop over samples in container and remove each one
	while (sampleContainer.firstChild) {
		sampleContainer.removeChild(sampleContainer.firstChild);
	}
	// remove samples from samples array
	app.samplesArr = [];
};

app.generateSamples = () => {
	// target elements
	const sampleContainer = document.querySelector(".sample-container");
	const numSamples = document.querySelector("#num-samples");

	// clear current list of samples
	app.clearSamples(sampleContainer);

	// generate random line length
	const randomizeLength = (max, min) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	// generate samples and append to container
	for (let i = 0; i < numSamples.value; i++) {
		const sampleLine = document.createElement("li");
		sampleLine.setAttribute("id", i);

		// set each sample's lengths randomly
		const randomLineLength = randomizeLength(10, 400);
		sampleLine.style.width = `${randomLineLength}px`;

		// append to samples array in namespace
		app.samplesArr.push(randomLineLength);

		// append to DOM
		sampleContainer.append(sampleLine);
	}
};

app.init = () => {
	app.setupSampleButton();
	app.setupSortingButton();
};

app.init();
