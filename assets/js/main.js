let titleQuestion = document.querySelectorAll('.list-menu');
for (let i = 0; i < titleQuestion.length; i++) {

	titleQuestion[i].addEventListener('click', function() {
		
		this.classList.toggle('active');
	});
}
