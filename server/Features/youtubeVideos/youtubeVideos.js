// const BASE = "http://localhost/"

async function loadYouTubeVideos(event) {
    const divElement = document.getElementById("testing_videos");
    console.log(divElement);
    let divString = "";

    const response = await fetch(BASE + '/Features/youtubeVideos/youtubeVideos.php');
    if (response.ok) {
        const linkData = await response.json();
        console.log(linkData);
        for (let i = 0; i < linkData.length; i++) {
            divString += '<iframe width="560" height="315" src=' + linkData[i].link + ' allowfullscreen></iframe>';
        }
        divElement.innerHTML = divString;
    }
}
