var video = document.querySelector("video")

function updateVideoHistory(event) {
	var url = new URL(window.location.href)
	var id = url.searchParams.get("v")
	var video_history = {}
	video_history[id] = {
		title: document.title.substring(0, document.title.lastIndexOf("-")-1),
		time: video.currentTime
	}
	chrome.storage.local.set(video_history)
}

video.addEventListener("play", updateVideoHistory)
video.addEventListener("pause", updateVideoHistory)
