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

app.bubbleSortUnoptimized = (arr) => {
	console.log("************START UNOPTIMIZED BUBBLE SORT*************");

	// Start looping with a variable called i, at the end of the array towards the beginning
	for (let i = arr.length; i > 0; i--) {
		// Start an inner loop with variable called j from the beginning until i-1
		for (let j = 0; j < i - 1; j++) {
			console.log(arr, arr[j], arr[j + 1]);
			// Compare if arr[j] is greater than arr[j+1], swap those two values
			if (arr[j] > arr[j + 1]) {
				app.swapPositions(arr, j, j + 1);
			}
		}
	}
	console.log("************END UNOPTIMIZED BUBBLE SORT*************");

	return arr;
};

app.bubbleSortOptimized = (arr) => {
	console.log("************START OPTIMIZED BUBBLE SORT*************");

	let noSwaps;
	// Start looping with a variable called i, at the end of the array towards the beginning
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		// Start an inner loop with variable called j from the beginning until i-1
		for (let j = 0; j < i - 1; j++) {
			console.log(arr, arr[j], arr[j + 1]);
			// Compare if arr[j] is greater than arr[j+1], swap those two values
			if (arr[j] > arr[j + 1]) {
				app.swapPositions(arr, j, j + 1);
				// Optimization: Check if last time we made any swaps, if not, step out of loop
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	console.log("************END OPTIMIZED BUBBLE SORT*************");

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

app.setupSortingOptimizedButton = () => {
	const btn = document.querySelector("#start-sort-optimized");
	btn.addEventListener("click", () => {
		app.bubbleSortOptimized(app.samplesArr);
	});
};

app.setupSortingUnoptimizedButton = () => {
	const btn = document.querySelector("#start-sort-unoptimized");
	btn.addEventListener("click", () => {
		app.bubbleSortUnoptimized(app.samplesArr);
	});
};

app.init = () => {
	app.setupSampleButton();
	app.setupSortingOptimizedButton();
	app.setupSortingUnoptimizedButton();
};

app.init();
