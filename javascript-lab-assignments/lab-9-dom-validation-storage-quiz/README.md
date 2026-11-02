# DOM, Form Validation, Local Storage and Quiz

**Folder:** `lab-9-dom-validation-storage-quiz`

## Overview
Original source files are preserved as supplied.

## Tasks and results

### Task 1 — `task1.html`

Change a heading when the button is clicked in a browser.

- Evidence: `task1-output.png`
- Result: **Browser-tested:** Clicked Change text; heading updated.
### Task 2 — `task2.js`

Validate a name and return an error list for valid and blank input.

- Evidence: `task2-output.png`
- Result: **Executed with Node.js:** captured terminal output is shown in the screenshot.
### Task 3 — `task3.html`

Save a note in localStorage and show it again after reload.

- Evidence: `task3-output.png`
- Result: **Partially verified:** Page source attempts localStorage access, which Chromium blocks for the isolated preview origin. UI captured; save/persistence not verified.
### Task 4 — `task4.html`

Select an answer in a quiz and display whether it is correct.

- Evidence: `task4-output.png`
- Result: **Browser-tested:** Selected 5 and verified Correct.

## How to run

### JavaScript files
Install [Node.js](https://nodejs.org/), open a terminal in this folder, and run a task:

```bash
node task1.js
```

Replace `task1.js` with the required filename. Timer and Promise tasks may print asynchronously.

### HTML files
Open the relevant `.html` file in a modern browser and use the page controls for interactive tasks. Browser storage behaviour depends on the browser's origin and privacy settings.

## Evidence notes
Each task has one corresponding `taskN-output.png` image saved directly in this lab folder. Node.js screenshots contain captured process output. HTML screenshots contain browser-rendered pages and tested interactions where noted. Empty source files and environment limitations are explicitly documented; no output has been fabricated.
