var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var mainInfo = document.getElementById('mainInfo')
if(w > 1200) {
  mainInfo.innerHTML = "I'm a <span>agile</span><br>front-end developer<br>that makes f*cking<br>cool <span>landing pages</span><br>for awesome <span>studios</span>"
}