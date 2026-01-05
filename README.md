# Password Strength Validator 🛡️

A real-time, interactive web application that evaluates password security as the user types. This project demonstrates fundamental front-end development skills using **HTML5**, **CSS3**, and **Vanilla JavaScript**.

## ✨ Features
* **Real-time Validation**: Instantly checks password requirements using JavaScript event listeners.
* **Visual Strength Meter**: A dynamic progress bar that changes width and color based on the password's complexity.
* **Dynamic Requirement Checklist**: Each requirement updates with a **Green Tick (✔)** or **Red Cross (✘)** in real-time.
* **Show/Hide Password**: A functional toggle using an eye icon to switch between `password` and `text` input types.
* **"Very Weak" Detection**: Specific logic to identify when a user has started typing but satisfies zero security requirements.

## 📋 Security Requirements
The validator checks for the following three rules:
1.  **Minimum 8 Characters**: Ensures the password is long enough.
2.  **At least Two Digits**: Uses Regular Expressions to find at least two numbers `(0-9)`.
3.  **Special Characters**: Uses Regular Expressions to ensure at least one symbol is used (e.g., `!@#$%&?`).

## 🛠️ Technologies Used
* **HTML5**: Structured the input field, strength bar, and requirement list.
* **CSS3**: Handled the layout using Flexbox, created smooth transitions for the bar, and managed the tick/cross icons.
* **JavaScript (ES6)**: 
    * **DOM Manipulation**: Used to update text, colors, and classes based on user input.
    * **Regex (Regular Expressions)**: Used for complex pattern matching of digits and special characters.

## 🚀 How to Run the Project
1.  Ensure all three files (`page.html`, `style.css`, and `script.js`) are in the same folder.
2.  Open `page.html` in any modern web browser.
3.  Type a password to see the validator in action!

## 🔧 Technical Notes
* **Character Encoding**: The project includes `<meta charset="UTF-8">` in the HTML to ensure that the tick (`✔`), cross (`✘`), and eye (`👁️`) symbols display correctly across all browsers.
* **Logic Flow**: The script calculates a "score" based on met requirements and then calls a centralized `updateUI` function to modify the bar and text status.
* **Empty State**: The code includes a reset logic to clear the UI when the input field is empty.