// Function to load YouTube videos from the server
async function loadYouTubeVideos(event) {
    const divElement = document.getElementById("testing_videos");
    let divString = "";

    // Send a GET request to fetch YouTube video data from the server
    const response = await fetch(BASE + '/Features/youtubeVideos/youtubeVideos.php');

    if (response.ok) {
        // Parse the JSON response containing video data
        const linkData = await response.json();

        // Iterate through the video data and create HTML elements
        for (let i = 0; i < linkData.length; i++) {
            divString += `<h5>${linkData[i].title}</h5>
                          <iframe width="560" height="315" src=${linkData[i].link}?rel=0 allowfullscreen></iframe>
                          <br>`;
        }

        // Update the HTML content of the divElement with the video data
        divElement.innerHTML = divString;
    }
}
