// MVP Flow (Bubble Sort only)
// Create the random sample of lines to sort
// Move the lines around on the screen
// Demonstrate the sorting happening on the screen using animations/transitions
// Indicate to the user when the sorting starts/ends

app = {};

app.samplesArr = [];

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

app.swapPositions = (arr, index1, index2) => {
	// handle swapping position of elements in array
	let temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
};

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

	console.log(arr, "final result");
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
	console.log(arr, "final result");

	console.log("************END SELECTION SORT*************");
	return arr;
};

app.setupSampleButton = () => {
	// target generate sample button
	const sampleBtn = document.querySelector("#sample-generator");
	sampleBtn.addEventListener("click", () => {
		app.generateSamples();
		console.log(app.samplesArr);
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

app.init = () => {
	app.setupSampleButton();
	app.setupSortingButton();
};

app.init();
