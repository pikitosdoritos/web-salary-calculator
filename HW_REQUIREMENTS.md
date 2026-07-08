# Homework: Build a Salary Calculator (Web)

## Goal
Create a browser-based salary calculator similar to the reference project.  
The app must let users select known salary fields as inputs and compute selected output fields from them.  
Users may choose any subset of input fields and any subset of output fields, and the app must automatically determine how to calculate each requested output when enough data is available.

---

## Business Domain
Your calculator works with these fields:

- `monthly` - monthly salary
- `daily` - daily salary
- `hourly` - hourly salary
- `dpm` - work days per month
- `hpd` - work hours per day

---

## Functional Requirements

### 1) Page and UI structure
- Build a single-page app using HTML, CSS, and JavaScript (no framework required).
- Add an **Input fields** multi-select where users choose which inputs to enter.
- Add an **Output fields** multi-select where users choose which outputs to display.
- Allow arbitrary combinations of selected inputs and outputs (not only predefined pairs).
- Show/hide input controls dynamically based on selected input fields.
- Show/hide output rows dynamically based on selected output fields.
- Add a `Calculate` button that triggers computation.

### 2) Input handling
- Use numeric inputs for all field values.
- Accept decimal values (for example: `8.5` hours/day).
- Build calculation logic that can infer a valid path from available input values to each requested output value.
- Validate input before calculation:
  - Empty values in selected input fields are not allowed.
  - Division by zero is not allowed (`dpm = 0`, `hpd = 0`, etc.).
  - Negative numbers should be rejected with a user-friendly message.

### 3) Output formatting
- Show numeric outputs rounded to 2 decimal places.
- Format `hpd` as duration text:
  - Example: `8h 30m`
- If a selected output cannot be calculated from available inputs, display:
  - `Not enough data!`

### 4) User feedback
- Show clear inline error messages for invalid input.
- Prevent calculation until input errors are fixed.
- Keep the UI responsive and understandable.

---

## Technical Requirements
- Use plain JavaScript modules or a single script file.
- Keep logic separated from DOM event wiring as much as possible.
- Do not hardcode output values in HTML.
- Use semantic HTML labels and accessible form controls.
- Add basic visual styling (layout + readable forms + visible outputs).

---

## Quality Requirements

### Code quality
- Use descriptive variable and function names.
- Avoid duplicated formula logic where possible.
- Add short comments only for non-obvious logic.

### Testing (required)
Provide tests for:
- Core calculation correctness
- Invalid input handling (empty, zero-division, negative values)
- `hpd` duration formatting

You may use any test approach (unit tests, browser tests, or manual test matrix), but your submission must include reproducible test evidence.

---

## Deliverables
Submit:
- Source code
- `README.md` with:
  - setup/run steps
  - explanation of your calculation approach
  - known limitations
- Test evidence (automated output or manual checklist with results)
