console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let img = document.querySelector('#Sol')
img.addEventListener('mouseover', hoverOver)
function hoverOver(){
	alert(`You're the cats meow!`)
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);