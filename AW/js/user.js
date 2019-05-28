$(function() {
	loginToSignup();
	signUptoLogin();
});

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
	container.classList.remove('right-panel-active');
});

function loginToSignup() {
	$('#signup').click(function() {
		$('.sign-up-container').css('opacity', 1);
		$('.sign-up-container').css('z-index', 3);
	});
}

function signUptoLogin() {
	$('#login').click(function() {
		$('.sign-up-container').css('opacity', 0);
		$('.sign-up-container').css('z-index', 1);
	});
}
