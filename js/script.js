const toggle = document.querySelector('.toggle')
const nav = document.querySelector('.navigation')


const toggleEvent = () => {
	toggle.classList.toggle('active')
	nav.classList.toggle('active')
}


toggle.addEventListener('click', toggleEvent)