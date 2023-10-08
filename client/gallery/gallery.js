let counter = 0;
const galleryImage = document.getElementById("gallery_displayID");

// Function to populate the gallery with images
function addPictures() {
    // Loop through image numbers from 0 to 60
    for (let i = 0; i < 8; i++) {
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
}

// Call the function to populate the gallery with images
addPictures();

