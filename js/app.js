define(function() {
	class Header  {
		constructor(data) {
			// super();
			this.data = data;
			return () => this.render();
		}

		render() {
			return `
			<div class="header header_blue">
				<div class="header__wraper wraper">
					<div class="header__status">
						<p>${this.data.activity || "В сети"}</p>
					</div>
					<div class="header__profile">
						<img src="${this.data.photoUrl || "img/profile__photo.jpg" }" class="profile__img profile__img_small" alt="Фото пользователя">
						<span class="profile__settings">
							<span class="settings-dot"></span>
							<span class="settings-dot"></span>
							<span class="settings-dot"></span>
						</span>
						<div class="profile__nav">
							<a class="nav-link" href="#">Редактировать</a>
							<a class="nav-link" href="#">Настройки</a>
							<hr class="nav-link__line">
							<a class="nav-link" href="#">Выйти</a>
						</div>
					</div>
				</div>
			</div>`;
		}
	}
 }

// const headerProfile = document.querySelector('.header__profile');
// const nav = document.querySelector('.profile__nav');
// const navClasses = nav.classList;

// headerProfile.addEventListener('click', toggleNav);

// function toggleNav() {

// 	if(navClasses.contains('visible')) {
// 		closeNav();
// 	} 

// 	else {
// 		navClasses.add('visible');
// 		document.addEventListener('click', function handler(event) {
// 			if (nav && !headerProfile.contains(event.target)) {
// 				closeNav();
// 				this.removeEventListener('click',handler);
// 			}
// 		});
// 	}
// }
// function closeNav() {
// 	navClasses.remove('visible');
// }

)
