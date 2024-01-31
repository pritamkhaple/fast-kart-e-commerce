// function loadHeader() {
//     fetch('header.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('headerfile').innerHTML = data;
//         });
// }


// window.onload = function() {
//     loadHeader();
// };



// Function to load header and footer
function loadHeaderAndFooter() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('headerfile').innerHTML = data;
        });

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerfile').innerHTML = data;
        });
}

// Call the function to load header and footer when the page loads
window.onload = loadHeaderAndFooter;
