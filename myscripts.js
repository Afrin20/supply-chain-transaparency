// When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");

    // Update the button text and form action based on the selected option
    dropdown.addEventListener('click', function (event) {
        if (event.target.classList.contains('dropdown-item')) {
            var selectedOption = event.target.innerText;
            document.getElementById("dropdownMenuButton").innerText = selectedOption;

            // Update the form action only if Manufacturer is selected
            if (selectedOption === 'Manufacturer') {
                document.getElementById("loginForm").action = selectedOption + ".html";
            } else {
                // Reset the form action for other options
                document.getElementById("loginForm").action = "default.html";
            }
        }
    });
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
