// let titleQuestion = document.querySelectorAll('.list-menu');
// for (let i = 0; i < titleQuestion.length; i++) {

// 	titleQuestion[i].addEventListener('click', function() {
		
// 		this.classList.toggle('active');
// 	});
// }


	const $ = document.querySelector.bind(document)
	const $$ = document.querySelectorAll.bind(document)

	const makeUp = $$('.tab-mekup')
	const bests = $$('.best-seller-list')

	makeUp.forEach((tab, index) =>{
		const best = bests[index]

		tab.onclick = function (){


			$('.tab-mekup.active').classList.remove('active')
			$('.best-seller-list.show').classList.remove('show')
			
			this.classList.add('active')
			best.classList.add('show')
		}
	})