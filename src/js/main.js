import { getParkData } from "./parkService.mjs";

const parkData = getParkData();
console.log(parkData);

const disclaimerLink = document.querySelector(".disclaimer a");
disclaimerLink.href = parkData.url;
disclaimerLink.textContent = parkData.fullName;

document.title = `${parkData.fullName} - National Parks Service`;

const heroImg = document.querySelector(".hero-banner img");
heroImg.src = parkData.images[0].url;
heroImg.alt = parkData.images[0].altText;
const heroTitle = document.querySelector(".hero-banner__title");
heroTitle.textContent = parkData.name;
const heroSubtitle = document.querySelectorAll(".hero-banner__subtitle span");
heroSubtitle[0].textContent = parkData.designation;
heroSubtitle[1].textContent = parkData.states;