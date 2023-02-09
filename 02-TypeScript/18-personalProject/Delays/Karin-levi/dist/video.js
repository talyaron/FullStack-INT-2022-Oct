debugger;
var videoString = localStorage.getItem('video');
if (videoString != null) {
    var video = JSON.parse(videoString);
    var rendered = renderVideoHtml(video);
    if (videoElement) {
        videoElement.innerHTML = rendered;
    }
}
