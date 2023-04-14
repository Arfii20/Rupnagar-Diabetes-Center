// const BASE = "http://localhost/"

async function loadYouTubeVideos(event) {
    const divElement = document.getElementById("testing_videos");
    let divString = "";

    const response = await fetch(BASE + '/Features/youtubeVideos/youtubeVideos.php');
    if (response.ok) {
        const linkData = await response.json();
        for (let i = 0; i < linkData.length; i++) {
            divString += `<h5>${linkData[i].title}</h5>
                          <iframe width="560" height="315" src=${linkData[i].link}?rel=0 allowfullscreen></iframe>
                          <br>`;
        }
        divElement.innerHTML = divString;
    }
}

