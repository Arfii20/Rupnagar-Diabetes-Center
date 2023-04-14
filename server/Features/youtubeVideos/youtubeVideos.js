

async function loadYouTubeVideos () {
    const response = await fetch('./youtubeVideos.php');
    const data = response.json();
    console.log(data);
}
