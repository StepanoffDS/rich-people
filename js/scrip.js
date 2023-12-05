window.addEventListener("DOMContentLoaded", (event) => {
	try {
		initSwiper();
	} catch (err) { }

	// try {
	//     const inputId = document.querySelectorAll(".application-form__input");
	//     const hold = document.querySelectorAll(".application-form__input-placeholder");
	//
	//     for (let i = 0; i < inputId.length; i++) {
	//         inputId[i].addEventListener("input", function () {
	//             hold[i].style.display = this.value == "" ? "inline" : "none";
	//         });
	//     }
	// } catch(err) {}

	try {
		const textarea = document.querySelector(".application-form__input_textarea");
		const counter = document.querySelector(".current");
		const maxlength = 1000;

		textarea.addEventListener("input", onInput);

		function onInput(event) {
			event.target.value = event.target.value.substr(0, maxlength);
			const length = event.target.value.length;
			counter.textContent = length;
		}
	} catch (err) { }

	try {
		const inputs = document.querySelectorAll(".application-form__input-file > input");

		inputs.forEach.call(inputs, function (input) {
			labelVal = document.querySelector(".application-form__input-file-text").innerText;

			input.addEventListener("change", function (e) {
				let countFiles = "";

				if (this.files && this.files.length >= 1)
					countFiles = this.files.length;

				if (countFiles)
					document.querySelector(".application-form__input-file-text").innerText =
						"Выбрано файлов: " + countFiles;
				else document.querySelector(".application-form__input-file-text").innerText = labelVal;
			});
		});
	} catch (err) { }

	try {
		const btns = document.querySelectorAll(".filter-btns__item");

		for (let index = 0; index < btns.length; index++) {
			btns[index].addEventListener("click", function () {
				const current_btn = this;
				const btn_all = document.getElementById("js-btn-select-all");
				const active_btns = document.querySelectorAll(".btn_filter-btn-active");

				if (btn_all.classList.contains("btn_filter-btn-active") && current_btn != btn_all) {
					btn_all.className = btn_all.className.replace("btn_filter-btn-active", "btn_filter-btn");
					current_btn.classList.replace("btn_filter-btn", "btn_filter-btn-active");
					return;
				}

				if (current_btn == btn_all) {
					if (!btn_all.classList.contains("btn_filter-btn-active")) {
						for (const btn of active_btns) {
							btn.className = btn.className.replace("btn_filter-btn-active", "btn_filter-btn");
						}

						btn_all.classList.replace("btn_filter-btn", "btn_filter-btn-active");
					}
					return;
				}

				if (current_btn.classList.contains("btn_filter-btn-active")) {
					current_btn.className = current_btn.className.replace(
						"btn_filter-btn-active",
						"btn_filter-btn"
					);
					if (active_btns.length == 1) {
						btn_all.classList.replace("btn_filter-btn", "btn_filter-btn-active");
					}
				} else {
					current_btn.classList.replace("btn_filter-btn", "btn_filter-btn-active");
				}
			});
		}
	} catch (err) { }

	try {
		const burgerBtn = document.querySelector(".header__burger-menu");
		const burgerMenu = document.querySelector(".burger-menu");

		burgerBtn.addEventListener('click', function () {
			burgerMenu.style.display = "block";
		});

		const exit = document.querySelector(".burger-menu__exit");

		exit.addEventListener('click', function () {
			burgerMenu.style.display = "none";
		});
	} catch (error) { }

	try {
		const menuItems = document.querySelectorAll('.burger-menu__menu-item')
		menuItems.forEach(e => {
			e.addEventListener('click', () => {
				menuItems.forEach(e => {
					e.classList.remove('show')
				})
				e.classList.toggle('show')
			})
		})
	} catch (error) { }



	try {
		const textarea = document.querySelector('.popup-form__input_textarea--js')
		textarea.addEventListener('keyup', e => {
			let scHeight = e.target.scrollHeight
			// textarea.style.height = '40px'
			textarea.style.height = `${scHeight}px`
			console.log(textarea.value.length)

			if (textarea.value.length === 0) {
				textarea.style.height = '50px'
			}
		})
	} catch (error) { }

	// try {
	//   const dropBurgerBtn = document.querySelectorAll(".burger-menu__drop-btn");
	//   const dropMenu = document.querySelectorAll(".burger-menu__dropdown-menu-items");

	//   dropBurgerBtn.addEventListener('click', function () {
	//     dropMenu.style.display = "block";
	//   });
	// } catch (error) { }

	try {
		// const inputId = document.querySelectorAll(".popup-form__input");
		// const hold = document.querySelectorAll(".popup-form__input-placeholder");
		//
		// for (let i = 0; i < inputId.length; i++) {
		//     inputId[i].addEventListener("input", function () {
		//         hold[i].style.display = this.value == "" ? "inline" : "none";
		//     });
		//     inputId[i].addEventListener("focus", function () {
		//         hold[i].style.display = "none";
		//     });
		//     inputId[i].addEventListener("blur", function () {
		//         hold[i].style.display = this.value == "" ? "inline" : "none";
		//     });
		// }
	} catch (err) { }

	try {
		const textarea = document.querySelector(".popup-form__input_textarea");
		const counter = document.querySelector(".popup-form__current");
		const maxlength = 1000;

		textarea.addEventListener("input", onInput);

		function onInput(event) {
			event.target.value = event.target.value.substr(0, maxlength);
			const length = event.target.value.length;
			counter.textContent = length;
		}
	} catch (err) { }

	try {
		const inputPopup = document.querySelectorAll(".popup-form__input-file>input");

		inputPopup.forEach.call(inputPopup, function (input) {
			labelVal = document.querySelector(".popup-form__input-file-text").innerText;

			input.addEventListener("change", function (e) {
				let countFiles = "";

				if (this.files && this.files.length >= 1)
					countFiles = this.files.length;

				if (countFiles)
					document.querySelector(".popup-form__input-file-text").innerText =
						"Выбрано файлов: " + countFiles;
				else document.querySelector(".popup-form__input-file-text").innerText = labelVal;
			});
		});
	} catch (err) { }

	try {
		const popUp = document.querySelector(".popup-form");
		const openPopup = document.querySelectorAll(".open-popup");
		const closePopup = document.querySelector(".popup-form__close");
		const formPopupName = document.querySelector('.popup-form__title');
		const formPopupBtn = document.querySelector('.popup-form__btn');

		openPopup.forEach((btn) => {
			btn.addEventListener("click", function () {
				popUp.classList.add("active");
				document.body.classList.add('overflow-hidden')
				let btnText = btn.innerText;
				btnText = btnText[0].toUpperCase() + btnText.slice(1).toLowerCase();

				formPopupName.innerText = btnText;
				formPopupBtn.innerText = btnText;
			});
		});

		closePopup.addEventListener("click", function () {
			popUp.classList.remove("active");
			document.body.classList.remove('overflow-hidden')
		});

	} catch (err) { }

	try {
		let horizontalItems = document.querySelectorAll(".js-horizontal-scroller");
		for (const item of horizontalItems) {
			item.addEventListener('wheel', function (event) {
				if (event.deltaMode == event.DOM_DELTA_PIXEL) {
					var modifier = 1;
					// иные режимы возможны в Firefox
				} else if (event.deltaMode == event.DOM_DELTA_LINE) {
					var modifier = parseInt(getComputedStyle(this).lineHeight);
				} else if (event.deltaMode == event.DOM_DELTA_PAGE) {
					var modifier = this.clientHeight;
				}
				if (event.deltaY != 0) {
					// замена вертикальной прокрутки горизонтальной
					this.scrollLeft += modifier * event.deltaY;
					event.preventDefault();
				}
			});
		}
	} catch (error) { }


	const dropdownMenuArray = document.querySelectorAll('.vacancies-section__dropdown-menu')
	if (dropdownMenuArray.length) dropdownMenuArrayInit()
	function dropdownMenuArrayInit() {
		for (let i = 0; i < dropdownMenuArray.length; i++) {
			dropdownMenuArray[i].addEventListener('click', toggleDropdownMenu)
		}
		function toggleDropdownMenu() {
			if (this.classList.contains('vacancies-section__dropdown-menu_active')) {
				this.classList.remove('vacancies-section__dropdown-menu_active')
			} else {
				this.classList.add('vacancies-section__dropdown-menu_active')
			}
		}
	}


	const agencyServicesBtns = document.querySelectorAll('.js-agency-services__btn')
	const agencyServicesTables = document.querySelectorAll('.js-agency-services__services-table')
	for (let i = 0; i < agencyServicesBtns.length; i++) {
		agencyServicesBtns[i].addEventListener('click', toggleServicesTable)
	}
	function toggleServicesTable() {
		const index = this.getAttribute('data-index')
		const oldBtn = document.querySelector('.agency-services__btn_active')
		oldBtn.classList.remove('agency-services__btn_active')
		const oldTable = document.querySelector('.agency-services__services-table_active')
		oldTable.classList.remove('agency-services__services-table_active')
		this.classList.add('agency-services__btn_active')
		agencyServicesTables[index].classList.add('agency-services__services-table_active')
	}


	let phoneNodeArray = document.querySelectorAll('input[name="tel"]')
	let maskOptions = {
		mask: '+{7}(000)000-00-00',
		lazy: false
	}
	// let maskPhone = new IMask(phoneNodeArray[0], maskOptions);
	// let maskPhonePopup = new IMask(phoneNodeArray[1], maskOptions);

	const priceTables = document.querySelectorAll('.price-table__inner')
	const priceTableBtnItems = document.querySelectorAll('.price-table__btn-item')
	for (let i = 0; i < priceTableBtnItems.length; i++) {
		priceTableBtnItems[i].addEventListener('click', togglePriceTables)
	}

	function togglePriceTables() {
		if (this.classList.contains('price-table__btn-item_active')) return
		const oldActive = document.querySelector('.price-table__btn-item_active')
		if (oldActive) oldActive.classList.remove('price-table__btn-item_active')
		this.classList.add('price-table__btn-item_active')
		const index = this.getAttribute('data-index')
		const oldActiveTable = document.querySelector('.price-table__inner_active')
		if (oldActiveTable) oldActiveTable.classList.remove('price-table__inner_active')
		priceTables[index].classList.add('price-table__inner_active')
		// if (this.classList.contains('price-table__btn-item_active')) {
		//   alert(1)
		// }
	}
});



try {
	const btnInfoAgency = document.querySelector('.detective-blog__btns-btn--js')
	const btnCloseInfoAgency = document.querySelector('.agency-details__btn-close--js')

	btnInfoAgency.addEventListener('click', () => {
		const $infoAgencySection = document.querySelector('.agency-details')
		$infoAgencySection.classList.toggle('active')
	})

	btnCloseInfoAgency.addEventListener('click', () => {
		const $infoAgencySection = document.querySelector('.agency-details')
		$infoAgencySection.classList.toggle('active')
	})

} catch (err) { }

try {
	function initSwiper() {
		let swiper = new Swiper(".swiper", {
			loop: true,
			rewind: true,
			slidesPerView: "auto",
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			navigation: {
				nextEl: ".slider-photo__btn_next",
				prevEl: ".slider-photo__btn_prev",
			},
		});

		const loader = document.querySelector(".js-statusbar-progress");
		loader.classList.add("is-loading");

		swiper.on("transitionStart", function () {
			loader.classList.remove("is-loading");
		});

		swiper.on("transitionEnd", function () {
			loader.classList.add("is-loading");
		});
	}
} catch (err) { }
