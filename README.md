# Login & Signup UI

A simple, responsive login and signup form built with HTML, CSS, and JavaScript. This project provides a clean and user-friendly interface for user authentication, with form validation and toggle functionality between login and signup modes.

## Demo

[View Demo](index.html)

## Features

- **Toggle between Login and Signup**: Easily switch between login and signup forms using the provided link.
- **Form Validation**:
  - Email validation (must be a valid email format).
  - Password validation (minimum 6 characters).
  - Name field required for signup.
- **Responsive Design**: Styled with CSS for a modern look, including gradients and shadows.
- **Error and Success Messages**: Displays appropriate messages for validation errors or successful submissions.
- **No Backend Required**: Pure frontend implementation; can be integrated with a backend API for actual authentication.

## Technologies Used

- **HTML**: Structure of the form and page.
- **CSS**: Styling for layout, colors, and responsiveness.
- **JavaScript**: Form validation, toggle functionality, and dynamic updates.

## How to Run

1. **Clone or Download the Repository**: Ensure you have the files `index.html`, `style.css`, and `script.js` in the same directory.

2. **Open in Browser**:
   - Double-click `index.html` to open it in your default web browser.
   - Alternatively, right-click `index.html` and select "Open with" > your preferred browser.

3. **Interact with the Form**:
   - Enter email and password for login.
   - Click "Signup" to switch to signup mode and enter name, email, and password.
   - Click "Submit" to validate and see success/error messages.

## File Structure

- `index.html`: Main HTML file containing the form structure.
- `style.css`: CSS file for styling the form and page layout.
- `script.js`: JavaScript file handling form validation and toggle logic.

## Usage

- **Login Mode**: Default mode. Enter email and password, then submit.
- **Signup Mode**: Click the "Signup" link to reveal the name field. Enter all fields and submit.
- **Validation**: The form checks for valid email, password length, and required name on signup. Success messages appear on valid submission.

## Customization

- **Styling**: Modify `style.css` to change colors, fonts, or layout.
- **Validation Rules**: Update `script.js` to add more validation (e.g., password strength) or integrate with a backend.
- **Backend Integration**: Add AJAX calls in `submitForm()` to send data to a server for real authentication.

## Browser Compatibility

- Tested on modern browsers like Chrome, Firefox, and Edge.
- Uses standard HTML, CSS, and JavaScript features.

## Contributing

Feel free to fork the repository and submit pull requests for improvements or bug fixes.

## License

This project is open-source and available under the MIT License.
