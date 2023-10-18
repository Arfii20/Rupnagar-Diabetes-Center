// Function to add class for overlay visibility
function addClass() {
    document.getElementById("navbarSupportedContent").classList.add("visible");
}

// Function to remove class for overlay visibility
function removeClass() {
    document.getElementById("navbarSupportedContent").classList.remove("visible");
}


// Function to toggle navigation overlay visibility
function dropOverlay() {
    // Check if the navigation overlay is currently visible
    if (document.getElementById("navbarSupportedContent").classList.contains("visible")) {
        // Remove the overlay and associated class
        document.getElementById("burger-overlay").classList.remove("burger-overlay");
        removeClass();
    } else {
        // Add the overlay and associated class
        addClass();
        document.getElementById("burger-overlay").classList.add("burger-overlay");
    }
}

let val = 0;
let counter = 0;
const galleryImage = document.getElementById("gallery_displayID");

// Function to populate the gallery with images
function addPictures() {
    // Loop through image numbers from 0 to 60
    for (let i = 0; i < (8+val); i++) {
        // Add image elements with their source and overlay div to the gallery
        if (counter <= 60) {
            galleryImage.innerHTML +=   `        
                                            <div class="bg">
                                                <img src="../images/gallery/${counter++}.jpg" alt="">
                                            </div>
                                        `;
        }
        else {
            document.getElementById("viewMoreImages").style.display = "none";
        }
    }

    val += 8
}

// Call the function to populate the gallery with images
addPictures();


