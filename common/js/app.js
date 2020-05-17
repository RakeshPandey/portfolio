console.log('Thank you so much for taking the time to look through my portfolio! I can be reached at rakesh.pandey10@gmail.com')

const portApp = {};

//Menu Click Function
portApp.hamburgerClick = () => {
	$('#hamburger').on('click', () => {
		let menuStatus = $('.menuInner').hasClass('menuShow')
		if (menuStatus === false) {
			$('#hamburgerIcon').addClass('hamburgerSpin').delay(500).queue(function () {
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
		if (id === 'manulife') {
			window.open('https://www.manulife.ca/personal.html')
		}
		else if (id === 'boston') {
			window.open('https://www.bostonscientific.com/en-US/Home.html')
		}
		else if (id === 'beats') {
			window.open('https://www.beatsbydre.com/au')
		}
	})
}

//Skills Click
portApp.skillFlip = () => {
	$('.skill__iconContain').on('mouseover', function (e) {
		console.log(e)
		let id = $(this).attr('id')
		$(id).addClass('showText')
	})
}

//Smooth scroll to page sections when clicked in hamburger menu
portApp.burgerMenuScroll = () => {
	// Main Navigation
	$('#topMenuAbout').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#about');
		portApp.scroll(targetElem);
	});
	$('#topMenuResearch').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#research');
		portApp.scroll(targetElem)
	});
	$('#topMenuSkill').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#skills');
		portApp.scroll(targetElem)
	});
	$('#topMenuPortfolio').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#portfolio')
		portApp.scroll(targetElem)
	})
	$('#topMenuContact').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#contact')
		portApp.scroll(targetElem)
	})

	// Hamburgur Menu
	$('#menuAbout').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#about');
		portApp.scroll(targetElem);
	});
	$('#menuResearch').on('click', (e) => {
		e.preventDefault();
		let targetElem = $('#research');
		portApp.scroll(targetElem)
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
		scrollTop: target.offset().top
	}, 'fast');
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
		.fromTo(greenArrow, 1.5, { drawSVG: 0 }, { drawSVG: "100%" }, 0.5)
		.fromTo(blueLineOne, 1, { drawSVG: 0 }, { drawSVG: "100%" }, 0.5)
		.fromTo(blueLineTwo, 1, { drawSVG: 0 }, { drawSVG: "100%" }, 0.7)
		.fromTo(blueLineThree, 1, { drawSVG: 0 }, { drawSVG: "100%" }, 0.5)
		.fromTo(pinkLine, 1.5, { drawSVG: 0 }, { drawSVG: "100%" }, 0.7)
}

//Animation in Footer
portApp.contactAnimation = () => {
	const pinkLineContact = $('#contact__pinkLine')
	const greenArrowContact = $('#contact__greenArrow')
	const blueCircleContact = $('#contact__blueCircle')
	const triangleContact = $('#contact__triangle')
	const pinkCircleContact = $('#contact__pinkCircle')
	const timelineContact = new TimelineLite({ paused: true })
	timelineContact
		.fromTo(pinkLineContact, 1.5, { drawSVG: 0 }, { drawSVG: "100%" }, 0.5)
		.fromTo(greenArrowContact, 1.5, { drawSVG: 0 }, { drawSVG: "100%" }, 1)
		.fromTo(blueCircleContact, 1.5, { drawSVG: 0, fill: 'none' }, { drawSVG: "100%" }, 1)
		.fromTo(triangleContact, 1.5, { drawSVG: 0, fill: 'none' }, { drawSVG: "100%" }, 0)
		.fromTo(pinkCircleContact, 1.5, { drawSVG: 0, fill: 'none' }, { drawSVG: "100%" }, 0)
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

$(function () {
	portApp.init();
});


//Open Design & Research Modal

let modalData = [
	{
		title: "Design Thinking - develop an idea",
		description: "We have followed the design thinking process to develop the idea to create a chatbot for VU international students. The process help us to develop an understanding of the international students for whom we were designing the product. This helps us to create empathy towards the international students studying at Victoria University and the advantage of brainstorming session is to define the students needs, problems and gather more insights. The next step in design thinking process is to create ideas for smart and intelligent chatbot and starts the hands on approach in prototyping and testing.",
		subtitle: "sdfldsjf",
		desc: "sdfslkj",
		img: "common/images/design_thinking.jpg",
		href: "www.google.com"
	},
	{
		title: "User Research",
		description: "During the process, we have started in-depth look into the full UX Process we involved into. In the due course for a month in a group of five, we’ve discovered problems, identified solutions, implemented designs and continuously tested prototype against personas and subjects.",
		subtitle: "Market Research",
		desc: "According to research, each year more than 200,000 international students from over 170 countries choose to come to Victoria to study. In 2018, Victoria university had more than 40,000 enrolled students and 12,600 of them are international students who come from more than 100 countries. In addition, the number of international students entering Australia has increased by 800,000 from 1994 to 2019. The rising number of international students not only shows Australian institutions have been successful in recruiting and retaining international students, but also provides them with a big challenge about how to meet a growing need for international students’ guidance and assistance. We started taking a series of interview with our users and gathered information about their use of VU Chatbo as well as how frequent they use the chatbot for queries.",
		img: "",
		href: "www.google.com"
	},
	{
		title: "Usability Testing",
		description: `Additionally, we started usability testing using an existing chatbot and during regular conversations with the users, we identified most of the users are not comfortable while using the chatbot, and also the experience is equally not too great. Following are the pain points discovered during the process:
			<ul>
				<li>Getting acquainted with a new country and place</li>
				<li>Figuring out the transportation system and routes</li>
				<li>Finding the right place for accommodation which is also within budget</li>
				<li>Difficulty understanding the enrollment process</li>
				<li>Keeping up with schedules and deadlines</li>
				<li>Seeking help and counseling</li>
				<li>Current student platform is confusing to use</li>
				<li>Not enough resources to gain info about activities, events, meet-ups, and clubs</li>
				<li>Making new connections and network</li>
				<li>Finding opportunities in a competitive world</li>
			</ul>
		`,
		subtitle: "sdfdsfsg",
		desc: "sdfds",
		img: "",
		href: "www.google.com"
	},
	{
		title: "User Persona",
		description: "Using our research data and interviews we combined our findings to create a persona that would be typical users of an international student.",
		subtitle: "",
		desc: "Jaques is a former actor from France who wants to transition his career into Digital Media. He wanted to focus on Digital Marketing for his plans for entrepreneurship. He wants to get acquainted with the university and its services. And for someone who recently moved to Australia, he wants to gain more connections. He is also in need of assistance regarding time and stress management.",
		img: "",
		href: "www.google.com"
	},
	{
		title: "Customer Journey",
		description: `
			A customer journey map is a visual representation of the experience that our students have with the chatbot. It helps to tell the story of a customer's experience with your brand from original engagement and into hopefully a long-term relationship.
			<p>To investigate the need further, interviews are conducted to determine the most common pain points for an international student whose name is Jaques Crow and there are several aspects of pain points for him. The first one is to get acquainted with a new environment and a new culture. He might be confronted with issues of cultural shock. The second is to find the right place for accommodation with an acceptable budget. And then it is not easy to understand the enrollment process and contents for units as well as keep up with schedules and deadlines. The fourth aspect is that he lacks resources to seek support and gain information about all kinds of activities. Making new connections with others and finding opportunities in a competitive world is the last aspect of pain points for him.</p>
		`,
		subtitle: "sldskfjsdl",
		desc: "sdfdsgsd",
		img: "common/images/design_thinking.jpg",
		href: "www.google.com"
	},
	{
		title: "Voice Tone &amp; Style Guide",
		description: "We have followed the design thinking process to develop the idea to create a chatbot for VU international students. The process help us to develop an understanding of the international students for whom we were designing the product. This helps us to create empathy towards the international students studying at Victoria University and the advantage of brainstorming session is to define the students needs, problems and gather more insights. The next step in design thinking process is to create ideas for smart and intelligent chatbot and starts the hands on approach in prototyping and testing.",
		subtitle: "sdfksdlssdgdsf",
		desc: "sdfdsge",
		img: "common/images/design_thinking.jpg",
		href: "www.google.com"
	}
];

function closeModal() {
	const CLASS_CLOSE_BUTTON = document.querySelector('.close');
	CLASS_CLOSE_BUTTON.addEventListener('click', (e) => {
		e.target.parentElement.parentElement.style.display = 'none';
	});
}

// When the user clicks the button, open the modal 
const initializeModal = () => {
	const GET_TILE = document.querySelectorAll('.openModal');
	const GET_MODAL = document.getElementById('myModal');

	GET_TILE.forEach((el, index) => {
		el.addEventListener('click', () => {
			GET_MODAL.style.display = "block";
			const setModalContent = `
			<div class="modal-content">
				<span class="close">&times;</span>
				${modalData.map((data, i) => {
				if (index === i)
					return `			
					<h2>${data.title}</h2>
					<p>${data.description}</p>
					<p><img src='${data.img}' width="100%" alt="${data.title}" /></p>
					<h4>${data.subtitle}</h4>
					<p>${data.desc}</p>
					<p><a href="${data.href}" title="test" /></p>`
			}).join("")}
			</div>	
			`;
			GET_MODAL.innerHTML = setModalContent;
			closeModal()
			window.onclick = function (event) {
				if (event.target == GET_MODAL) {
					GET_MODAL.style.display = "none";
				}
			}
		})
	})
}
document.addEventListener('DOMContentLoaded', initializeModal);
