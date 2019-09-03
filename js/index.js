const siteContent = {
	nav: {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
		"img-src": "img/logo.png"
	},
	cta: {
		h1: "DOM Is Awesome",
		button: "Get Started",
		"img-src": "img/header-img.png"
	},
	"main-content": {
		"features-h4": "Features",
		"features-content":
			"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4": "About",
		"about-content":
			"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"middle-img-src": "img/mid-page-accent.jpg",
		"services-h4": "Services",
		"services-content":
			"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4": "Product",
		"product-content":
			"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4": "Vision",
		"vision-content":
			"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
	},
	contact: {
		"contact-h4": "Contact",
		address: "123 Way 456 Street Somewhere, USA",
		phone: "1 (888) 888-8888",
		email: "sales@greatidea.io"
	},
	footer: {
		copyright: "Copyright Great Idea! 2018"
	}
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const mainImg = document.querySelector("#cta-img");
mainImg.setAttribute("src", siteContent["cta"]["img-src"]);

const links = document.querySelectorAll("nav a");
links.forEach(
	(el, index) => (el.textContent = siteContent["nav"][`nav-item-${index + 1}`])
);

const title = document.querySelector(".cta-text h1");
title.textContent = "Dom \n Is \n Awesome";

const button = document.querySelector("button");
button.textContent = "Get Started";

const midImg = document.querySelector("#middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const parent = document.getElementsByClassName("textContent");
const topTitles = parent.querySelectorAll("textContent h4");
topTitles[0].textContent = "Features";
topTitles[1].textContent = "About";
// const features = document.querySelector(".text-content h4");
// features.textContent = "Features";

// const featuresTxt = document.querySelector(".text-content p");
// featuresTxt.textContent =
// 	"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// const about = document.querySelector(".text-content h4");
// about.textContent = "About";

const contact = document.querySelector(".contact h4");
contact.textContent = "Contact";

// const contactTxt = document.querySelectorAll("contact p");
// contactTxt.forEach(
// 	(el, index) => (el.textContent = siteContent["contact"]["address"])
// );
