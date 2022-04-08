window.onload = () => {
    // fetching the display
    const display = document.getElementById("display");
    // fetching the calculator buttons
    const buttons = document.querySelectorAll("button");
    // calculator functionality
    buttons.forEach((item) => {
        // giving functionality to each calculator button when clicked
        item.onclick = () => {
            // if button clear is clicked, clear the calculator's display field
            if (item.id == "clear") {
                display.innerText = "";
                // if delete button is clicked, delete the last character in the display field
            } else if (item.id == "delete") {
                let string = display.innerText.toString();
                display.innerText = string.substring(0, string.length - 1);
                // if '=' button is clicked & the display field isn't empty, calculate what's in the display field
            } else if (display.innerText != "" && item.id == "equal") {
                display.innerText = eval(display.innerText);
                // if '=' button is clicked & the display field is empty displaying an error "it's empty" on display field then clearing the field after 2 seconds
            } else if (display.innerText == "" && item.id == "equal") {
                display.innerText = "It's empty!";
                setTimeout(() => (display.innerText = ""), 2000);
                // display the value of the button clicked in the display field
            } else {
                display.innerText += item.id;
            }
        };
    })

    // dark mode & light mode functionality
    const themeToggleBtn = document.querySelector(".themeToggler");
    const calculator = document.querySelector(".calculator");
    const togglerIcon = document.querySelector(".togglerIcon");

    let darkMode = true;
    themeToggleBtn.onclick = () => {
        calculator.classList.toggle("dark");
        themeToggleBtn.classList.toggle("active");
        darkMode = false;
    };
};