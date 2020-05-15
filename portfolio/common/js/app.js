console.log('Thank you so much for taking the time to look through my portfolio! I can be reached at rakesh.pandey10@gmail.com')

const portApp = {};

//Menu Click Function
portApp.hamburgerClick = () => {
	$('#hamburger').on('click', () => {
		let menuStatus = $('.menuInner').hasClass('menuShow')
		if(menuStatus === false) {
			$('#hamburgerIcon').addClass('hamburgerSpin').delay(500).queue(function() {
				$('#hamburgerIcon').removeClass('hamburgerSpin').addClass('hamburgerHide')
				$('.exitIcon').addClass('exitIconShow');
				$(this).dequeue();
			})
			$('.menuInner').toggleClass('menuShow')
		}
		else if (menuStatus === true) {
			$('.menuInner').toggleClass('menuShow')
			$('.exitIcon').removeClass('exitIconShow')
			$('#hamburgerIcon').removeClass('hamburgerHide')
			$('#hamburgerIcon').removeClass('hamburgerSpin')
		}
	})
}

//Click functions for portfolio images
portApp.clickPortfolio = () => {
	$('.imgContain').on('click', (e) => {
		let id = $(e.currentTarget).attr('id')
		console.log(id)
		if(id === 'spill'){
			window.open('http://talialongname.com/spill')
		}
		else if(id === 'cleanIt'){
			window.open('http://cleanit.talialongname.com')
		}
		else if(id === 'gift'){
			window.open('https://giftme.talialongname.com')
		}
		else if(id === 'charity'){
			window.open('http://talialongname.com/psdConversion/')
		}
	})
}

//Skills Click
portApp.skillFlip = () => {
	$('.skill__iconContain').on('mouseover', function(e) {
		console.log(e)
		let id = $(this).attr('id')
		$(id).addClass('showText')
	})
}

//Smooth scroll to page sections when clicked in hamburger menu
portApp.burgerMenuScroll = () => {
	$('#menuAbout').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#about');
		portApp.scroll(targetElem);
	});
	$('#menuSkill').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#skills');
		portApp.scroll(targetElem)
	});
	$('#menuPortfolio').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#portfolio')
		portApp.scroll(targetElem)
	})
	$('#menuContact').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#contact')
		portApp.scroll(targetElem)
	})

}

//Smooth scroll function reused 
portApp.scroll = (target) => {
	$('body, html').animate({
		scrollTop: target.offset().top}, 'fast');
}

//Events
portApp.events = () => {
	portApp.clickPortfolio();
	portApp.hamburgerClick();
	portApp.burgerMenuScroll();
	portApp.skillFlip();
}

//Animation in Header
portApp.animation = () => {
	const pinkLine = $('#pinkLine');
	const greenArrow = $('#greenArrow');
	const blueLineOne = $('#blueSquiggleOne')
	const blueLineTwo = $('#blueSquiggleTwo')
	const blueLineThree = $('#blueSquiggleThree')
	const timeline = new TimelineLite()
	timeline
		.fromTo(greenArrow, 1.5, {drawSVG: 0}, {drawSVG: "100%"}, 0.5)
		.fromTo(blueLineOne, 1, {drawSVG: 0}, {drawSVG: "100%"}, 0.5)
		.fromTo(blueLineTwo, 1, {drawSVG: 0}, {drawSVG: "100%"}, 0.7)
		.fromTo(blueLineThree, 1, {drawSVG: 0}, {drawSVG: "100%"}, 0.5)
		.fromTo(pinkLine, 1.5, {drawSVG: 0}, {drawSVG: "100%"}, 0.7)
}

//Animation in Footer
portApp.contactAnimation = () => {
	const pinkLineContact = $('#contact__pinkLine')
	const greenArrowContact = $('#contact__greenArrow')
	const blueCircleContact = $('#contact__blueCircle')
	const triangleContact = $('#contact__triangle')
	const pinkCircleContact = $('#contact__pinkCircle')
	const timelineContact = new TimelineLite({paused:true})
	timelineContact
		.fromTo(pinkLineContact, 1.5, {drawSVG: 0}, {drawSVG: "100%"}, 0.5)
		.fromTo(greenArrowContact, 1.5, {drawSVG: 0}, {drawSVG: "100%"}, 1)
		.fromTo(blueCircleContact, 1.5, {drawSVG: 0, fill: 'none'}, {drawSVG: "100%"}, 1)
		.fromTo(triangleContact, 1.5, {drawSVG: 0, fill: 'none'}, {drawSVG: "100%"}, 0)
		.fromTo(pinkCircleContact, 1.5, {drawSVG: 0, fill: 'none'}, {drawSVG: "100%"}, 0)
	const controller = new ScrollMagic.Controller();
	const scene = new ScrollMagic.Scene({
		triggerElement: '#trigger'
	})
		.on('enter', () => {
			timelineContact.play()
		})
		.addTo(controller)
}

portApp.init = () => {
	portApp.events()
	portApp.animation()
	portApp.contactAnimation()
}

$(function() {
   portApp.init();
}); 


//Open Design & Research Modal

let modalData = [ 
	{ 
		title : "Design Thinking - develop an idea", 
		description : "We have followed the design thinking process to develop the idea to create a chatbot for VU international students. The process help us to develop an understanding of the international students for whom we were designing the product. This helps us to create empathy towards the international students studying at Victoria University and the advantage of brainstorming session is to define the students needs, problems and gather more insights. The next step in design thinking process is to create ideas for smart and intelligent chatbot and starts the hands on approach in prototyping and testing.", 
		img: "common/images/design_thinking.jpg"
	},
	{
		title : "User Research", 
		description : "User Research", 
		img: "common/images/design_thinking.jpg"
	} 
];

// Get the class that opens the modal
let tileClick = document.querySelectorAll('.openModal');

// Get the modal
let modal = document.getElementById('myModal');
// let output = document.querySelector('.modal-content');

// When the user clicks the button, open the modal 

tileClick.forEach(function(item, index) {
	console.log(item)
	item.addEventListener('click', function(){
		modal.style.display = "block";
	})
})

const items = `
	<div class="modal-content">
		<span class="close">&times;</span>
		${modalData.map(item => {
			return`			
			<h2>${item.title}</h2>
			<p>${item.description}</p>
			<p><img src='${item.img}' width="100%" alt="Design Thinking" /></p>`
		}).join("")}
	</div>	
`;

modal.innerHTML = items;
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
 span.onclick = function() {
 	modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}