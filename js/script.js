// show nav
const toggle = document.querySelector('.toggle')
const nav = document.querySelector('.navigation')

const toggleEvent = () => {
	toggle.classList.toggle('active')
	nav.classList.toggle('active')
}

toggle.addEventListener('click', toggleEvent)


// blur fx
const homeSec = document.querySelector('.home-section')


var load = 0

const scale = (num, in_min, in_max, out_min, out_max) => {
	return (
		(num - in_min) * (out_max - in_max) / (in_max - in_min) + out_min
		)
}


const blurring = () => {
	load++

	if (load > 99) {
		clearInterval(int)
	}
	homeSec.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`

}

var int = setInterval(blurring, 30)