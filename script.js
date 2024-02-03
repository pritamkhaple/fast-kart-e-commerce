// Function to load header and footer
function loadHeaderAndFooter() {
    // Load header
    let headerPromise = fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('headerfile').innerHTML = data;
        });

    // Load footer
    let footerPromise = fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerfile').innerHTML = data;
        });

    // Return a Promise that resolves when both header and footer are loaded
    return Promise.all([headerPromise, footerPromise]);
}

// Call the function to load header and footer when the page loads
window.onload = function() {
    loadHeaderAndFooter().then(() => {
        // Attach the event listener to the burger menu
        let burg = document.querySelector('.burger');
        burg.addEventListener("click", () => {
            console.log('to see if burger clicked');
            let navbarToggler = document.querySelector(".menu-container");
            navbarToggler.style.display = "block";
            document.getElementById("burgr").style.display = "none"
            document.getElementById("close").style.display = "block"
        });

        // Attach the event listener to the close button
        let closeBtn = document.getElementById("close");
        closeBtn.addEventListener("click", () => {
            let navbarToggler = document.querySelector(".menu-container");
            navbarToggler.style.display = "none";
            document.getElementById("burgr").style.display = "block";
            document.getElementById("close").style.display = "none";
        });
    });
};

// For Menu bar

document.addEventListener('DOMContentLoaded', function() {
    const fashionMenu = document.getElementById('fashionMenu');
    const fashionSubmenu = document.getElementById('fashionSubmenu');

    // Toggle submenu visibility on click
    fashionMenu.addEventListener('click', function() {
        if (window.innerWidth <= 768) { // Adjust this breakpoint as needed
            fashionSubmenu.style.display = fashionSubmenu.style.display === 'block' ? 'none' : 'block';
        }
    });

    // Hide submenu on click outside
    document.addEventListener('click', function(event) {
        if (!fashionMenu.contains(event.target) && !fashionSubmenu.contains(event.target)) {
            fashionSubmenu.style.display = 'none';
        }
    });
});
