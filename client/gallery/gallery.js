// Function to populate the gallery with images
function getPictures() {
    const galleryImage = document.getElementById("gallery_displayID");

    // Loop through image numbers from 0 to 60
    for (let i = 0; i < 61; i++) {
        // Add image elements with their source and overlay div to the gallery
        galleryImage.innerHTML += `        
            <div class="bg">
                <img src="../images/gallery/${i}.JPG" alt="">
                <div class="bg_overlay"></div>
            </div>
        `;
    }
}

// Call the function to populate the gallery with images
getPictures();
