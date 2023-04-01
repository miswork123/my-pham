document.getElementById("showcart").style.display = "none";

function showcart() {
	var x = document.getElementById("showcart");
	if (x.style.display == "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

let tibeQuestion = document.querySelectorAll('.new-down');

for (let i = 0; i < tibeQuestion.length; i++) {

	tibeQuestion[i].addEventListener('click', function () {

		this.classList.toggle('active');
	});
}


let titleQuestion = document.querySelectorAll('.list-menu');

for (let i = 0; i < titleQuestion.length; i++) {

	titleQuestion[i].addEventListener('click', function () {

		this.classList.toggle('active');
	});
}


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const makeUp = $$('.tab-mekup')
const bests = $$('.best-seller-list')

makeUp.forEach((tab, index) => {
	const best = bests[index]

	tab.onclick = function () {


		$('.tab-mekup.active').classList.remove('active')
		$('.best-seller-list.show').classList.remove('show')

		this.classList.add('active')
		best.classList.add('show')
	}
});


const tabs = document.querySelector.bind(document)
const tabgg = document.querySelectorAll.bind(document)

const water = $$('.tab__list')
const lefts = $$('.water__left-click')

water.forEach((tab, index) => {
	const best = lefts[index]

	tab.onclick = function () {


		$('.tab__list.active').classList.remove('active')
		$('.water__left-click.show').classList.remove('show')

		this.classList.add('active')
		best.classList.add('show')
	}
});







let menuIteam = document.querySelector(".menu-icon");
let menuMobile = document.querySelector(".boshop-left");

menuIteam.addEventListener("click", function () {
	this.classList.toggle("active");
	menuMobile.classList.toggle("show");
});


const header = document.querySelector(".header-shop");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll > 100) {
		header.classList.add(toggleClass);
	} else {
		header.classList.remove(toggleClass);
	}
});


let scroll = document.querySelector(".filter__right");
let listScroll = document.querySelector(".filter__menu");

scroll.addEventListener("click", function () {
	listScroll.classList.toggle("show");
});

// product page
function increaseCount(a, b) {
	var input = b.previousElementSibling;
	var value = parseInt(input.value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	input.value = value;
}

function decreaseCount(a, b) {
	var input = b.nextElementSibling;
	var value = parseInt(input.value, 10);
	if (value > 1) {
		value = isNaN(value) ? 0 : value;
		value--;
		input.value = value;
	}
}

















