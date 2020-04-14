define(function(require) {

const Header = require('modules/Header');


document.body.insertAdjacentHTML('afterBegin', new Header(data = {
	activity: 'Не в сети',
	photoUrl: 'img/profile__photo.jpg'
}).render());


const headerProfile = document.querySelector('.header__profile');
const nav = document.querySelector('.profile__nav');
const navClasses = nav.classList;

headerProfile.addEventListener('click', toggleNav);

function toggleNav() {

	if(navClasses.contains('visible')) {
		closeNav();
	} 

	else {
		navClasses.add('visible');
		document.addEventListener('click', function handler(event) {
			if (nav && !headerProfile.contains(event.target)) {
				closeNav();
				this.removeEventListener('click',handler);
			}
		});
	}
}
function closeNav() {
	navClasses.remove('visible');
}

});