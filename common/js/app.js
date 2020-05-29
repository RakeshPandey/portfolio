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
		content: `We have followed the design thinking process to develop the idea to create a chatbot for VU international students. The process help us to develop an understanding of the international students for whom we were designing the product. This helps us to create empathy towards the international students studying at Victoria University and the advantage of brainstorming session is to define the students needs, problems and gather more insights. The next step in design thinking process is to create ideas for smart and intelligent chatbot and starts the hands on approach in prototyping and testing.
			<p><a href="common/images/documents/Chatbot_Proposal_Document.pdf" target="_blank" title="Download Chatbot Proposal">Download Chatbot Proposal</a></p>
			<div><img src="common/images/design_thinking.jpg" alt="Design Thinking - develop an idea" width="100%" /></div>
			<br/><br/><br/><br/>
		`
	},
	{
		title: "User Research",
		content: `During the process, we have started in-depth look into the full UX Process we involved into. In the due course for a month in a group of five, we’ve discovered problems, identified solutions, implemented designs and continuously tested prototype against personas and subjects.
			<h3>Market Research</h3>
			<p>According to research, each year more than 200,000 international students from over 170 countries choose to come to Victoria to study. In 2018, Victoria university had more than 40,000 enrolled students and 12,600 of them are international students who come from more than 100 countries. In addition, the number of international students entering Australia has increased by 800,000 from 1994 to 2019. The rising number of international students not only shows Australian institutions have been successful in recruiting and retaining international students, but also provides them with a big challenge about how to meet a growing need for international students’ guidance and assistance. We started taking a series of interview with our users and gathered information about their use of VU Chatbo as well as how frequent they use the chatbot for queries.</p>
			<p><a href="https://internationaleducation.gov.au/research/International-Student-Data/Pages/InternationalStudentData2019.aspx" target="_blank" title="Download International Student Data 2019">Download International Student Data 2019</a></p>
			<br/><br/><br/><br/>
		`
	},
	{
		title: "Usability Testing",
		content: `Additionally, we started usability testing using an existing chatbot and during regular conversations with the users, we identified most of the users are not comfortable while using the chatbot, and also the experience is equally not too great. Following are the pain points discovered during the process:
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
			</ul><br/><br/><br/><br/>
		`
	},
	{
		title: "User Story",
		content: `<p>User stories are short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer of the system. They typically follow a simple template:</p>
			<p><strong>As a < user >, I want < some goal > so that < some reason >.</strong></p>
			<p>User stories are often written on index cards or sticky notes, stored in a shoe box, and arranged on walls or tables to facilitate planning and discussion. As such, they strongly shift the focus from writing about features to discussing them. In fact, these discussions are more important than whatever text is written.</p>
			<div><img src="common/images/documents/user-story-map.PNG" alt="User Story" width="100%" /></div><br/><br/><br/><br/>
		`
	},
	{
		title: "User Journey Map",
		content: `<p>A User Journey map is a visual representation of the customer journey to identify the path taken by a user to achieve specific goals. It is the most important UX tool to analyze how a user interacts with a product and allows the research team to understand the user journey from the user’s point of view.</p>
			<p>Key components of a Journey Map:</p>
			<ul>
				<li>Create a user persona</li>
				<li>Define scenario and user expectations</li>
				<li>Sketch the journey</li>
				<li>Actions, Mindsets, and Emotions</li>
				<li>Opportunities</li>
			</ul>
			<p><a href="common/images/documents/Journey_Map.xlsx" target="_blank" title="Download the User Journey Map">Download the user journey map</a></p>
		`
	},
	{
		title: "User Testing",
		content: `<p>User testing is the process to evaluate the web or mobile application and to figure out whether the website is ready to launch for the end-users.  It is the process to identify the performance of the website, application, product, or service by the end-user by asking to perform specific tasks. Users are not directed or controlled by anyone at the time of testing or interview so that the research team gets the relevant feedback from the user without any biased. This also helps to understand how intuitive and comfortable is the product for the end-users.</p>
			<p>There are many different types of research methods a research team can use:</p>
			<ul>
				<li>Interviews</li>
				<li>Usability Testing</li>
				<li>Surveys</li>
				<li>A/B Testing</li>
				<li>Focus Group</li>
			</ul>
			<p>We have conducted interviews with Victoria University's current postgraduate students to understand the challenges faced by international students and their expectations with an existing online learning system called VU Collaborate. The objective of the usability testing report is to build an outstanding experience that demands the composition of user needs and frustration. The study aims to analyze the gap between the existing online VU collaborate portal and the requirement of the current international students. The result of the study shows that further areas of research and input from students help to design a better online system</p>
			<p><a href="common/images/documents/Usability_Testing_Report.pdf" target="_blank" title="Download VU Collaborate Usability Testing Report">Download VU Collaborate User Testing Report</a></p>
			<p><a href="common/images/documents/usability_testing_questions.docx" target="_blank" title="Download Interview Questions">Download Interview Questions</a></p>
			<p><a href="common/images/documents/Interview_with_Setareh_Rasouli.mp3" target="_blank" title="Download Interview with Setareh Rasouli">Download Interview with Setareh Rasouli</a></p>
			<p><a href="common/images/documents/Interview_with_Tanay_akgul.mp3" target="_blank" title="Download Interview with Tanay Akgul">Download Interview with Tanay Akgul</a></p>
			<br/><br/><br/><br/>
		`
	},
	{
		title: "User Persona",
		content: `Using our research data and interviews we combined our findings to create a persona that would be typical users of an international student.
			<p>Jaques is a former actor from France who wants to transition his career into Digital Media. He wanted to focus on Digital Marketing for his plans for entrepreneurship. He wants to get acquainted with the university and its services. And for someone who recently moved to Australia, he wants to gain more connections. He is also in need of assistance regarding time and stress management.</p>
			<p><a href="common/images/documents/VU_Persona.pdf" target="_blank" title="Download User Persona">Download VU User Persona</a></p>
			<div><img src="common/images/documents/persona_image.PNG" alt="VU Persona" width="100%" /></div>
			<br/><br/><br/><br/>
		`
	},
	{
		title: "Customer Journey",
		content: `
			A customer journey map is a visual representation of the experience that our students have with the chatbot. It helps to tell the story of a customer's experience with your brand from original engagement and into hopefully a long-term relationship.
			<p>To investigate the need further, interviews are conducted to determine the most common pain points for an international student whose name is Jaques Crow and there are several aspects of pain points for him. The first one is to get acquainted with a new environment and a new culture. He might be confronted with issues of cultural shock. The second is to find the right place for accommodation with an acceptable budget. And then it is not easy to understand the enrollment process and contents for units as well as keep up with schedules and deadlines. The fourth aspect is that he lacks resources to seek support and gain information about all kinds of activities. Making new connections with others and finding opportunities in a competitive world is the last aspect of pain points for him.</p>
			<p><a href="common/images/documents/customer_journey.jpeg" target="_blank" title="Download Customer Journey">Download Customer Journey</a></p>
			<div><img src="common/images/documents/customer_journey.jpeg" alt="Customer Journey" width="100%" /></div>
			<br/><br/><br/><br/>
		`
	},
	{
		title: "Voice Tone and Style Guide",
		content: `
			The effective combination of voice and tone of a brand makes the product in the market easier to use. The voice brings more consistency in your writing style whereas tone makes your design more humane.
			<p>Our Crowfessor chatbot brand personality is smart, reliable, and friendly whereas its tone is friendly, helpful, and knowledgeable. The reason for our voice is friendly because we radiate a feeling of warmth and make students comfortable as we speak with students in a friendly yet professional manner. Our voice is helpful because we want to make students feel that we are ready to listen, assist and guide them as we want to make students feel that we are ready to listen, assist and guide them. Our voice is knowledgeable because we will provide you the right answers to your queries and give you expert advice through meaningful data from reliable sources and provide useful tips and information.</p>
			<p><a href="common/images/documents/tone-style-guide.pdf" target="_blank" title="Tone and Style Guide">Download Tone and Style Guide</a></p>
			<br/><br/><br/><br/>
		`
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
					<p>${data.content}</p>`
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