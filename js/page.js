new WOW().init()

var allSpan = document.getElementsByTagName('span')
var getFlash = document.getElementsByClassName('getFlash')[0]
var flash = document.getElementsByClassName('flash')[0]

// 替换回车为<br>标签
for(var i=0 ; i<allSpan.length ; i++) {
	allSpan[i].innerHTML = allSpan[i].innerHTML.replace(/\n/g, '<br>')
}
console.log(getFlash)

// 点击显示Flash
getFlash.addEventListener('click', function () {
	flash.classList.remove('remove')
})