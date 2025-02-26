import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();

const setMainInfo = data => {
    const siteTitle = document.querySelector('#site-title');
    siteTitle.textContent = data.fullName;
    const siteDescription = document.querySelector('#site-description');
    siteDescription.textContent = data.description;
    parkInfoLinks.map(info => mediaCardTemplate(info)).forEach(card => {
        document.querySelector('.info').appendChild(card);
    });
};

setHeaderFooter(parkData);
setMainInfo(parkData);