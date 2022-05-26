// MVP Flow (Bubble Sort only)
// Create the random sample of lines to sort
// Move the lines around on the screen
// Demonstrate the sorting happening on the screen using animations/transitions
// Indicate to the user when the sorting starts/ends

app = {};

app.clearSamples = (sampleContainer) => {
	// loop over samples in container and remove each one
	while (sampleContainer.firstChild) {
		sampleContainer.removeChild(sampleContainer.firstChild);
	}
};

app.generateSamples = () => {
	// Fill up the samples
	const sampleContainer = document.querySelector(".sample-container");
	const numSamples = document.querySelector("#num-samples");

	// clear current list of samples
	app.clearSamples(sampleContainer);

	// generate random line length
	const randomizeLength = (max, min) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	// Generate samples and append to container
	for (let i = 0; i <= numSamples.value; i++) {
		// target each sample line
		const sampleLine = document.createElement("li");
		// give each sample a unique id
		sampleLine.setAttribute("id", i);
		// set each sample's lengths randomly
		const randomLineLength = randomizeLength(10, 400);
		sampleLine.style.width = `${randomLineLength}px`;
		sampleContainer.append(sampleLine);
	}
};

app.setupSampleButton = () => {
	// target generate sample button
	const sampleBtn = document.querySelector("#sample-generator");
	sampleBtn.addEventListener("click", () => {
		app.generateSamples();
	});
};

app.init = () => {
	app.setupSampleButton();
};

app.init();
