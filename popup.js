var enable_button = document.getElementById('videolist')
//enable_button.addEventListener('click', updateEnabled)
var enable_zoom_button = document.getElementById('btnZoomEnable')
//enable_zoom_button.addEventListener('click', updateZoomEnabled)

var video_history
var videolist = document.getElementById('videolist')

function toHHMMSS(secs){
	secs = Math.round(secs);
    var hours   = Math.floor(secs / 3600);
    var minutes = Math.floor((secs - (hours * 3600)) / 60);
	var seconds = secs - (hours * 3600) - (minutes * 60);
	
	var s = "";
    if (hours > 0) {
		s += hours + ':';
		
		if (minutes < 10) s += "0";
	}
	s += minutes + ":";
	if (seconds < 10 && seconds !== 0) s+= "0";
	s += seconds;
	if (seconds === 0) s+= "0";
    return s;
}

chrome.storage.local.get(null, (h) => {

	Object.entries(h).forEach(([key, val]) => {
		var time = toHHMMSS(val.time);
		videolist.innerHTML += `
		<li id="${key}">
		<a href="https://youtube.com/watch?v=${key}" target="_blank">${val.title}</a>
		 - 
		<a href="https://youtube.com/watch?v=${key}&t=${Math.floor(val.time)}" target="_blank">${time}</a>
		</li>
		`
	});
})