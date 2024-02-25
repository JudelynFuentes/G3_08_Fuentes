
        // JavaScript function to display current date and time
        function displayDateTime() {
            var date = new Date();
            var time = "Date and Time: " + date.toLocaleString();
            document.getElementById("id").innerText = time;
        }
    
        // Call the function when the page loads
        window.onload = function() {
            displayDateTime();
        };
