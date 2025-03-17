import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import '../css/style.css';
import '../css/home.css';

const init = async () => {
    const parkData = await getParkData();
    const parkInfoLinks = getParkInfoLinks(parkData.images);
    setHeaderFooter(parkData);
    setMainInfo(parkData, parkInfoLinks);

}

const setMainInfo = (data, parkInfoLinks) => {
    const siteTitle = document.querySelector('#site-title');
    siteTitle.textContent = data.fullName;
    const siteDescription = document.querySelector('#site-description');
    siteDescription.textContent = data.description;
    parkInfoLinks.map(info => mediaCardTemplate(info)).forEach(card => {
        document.querySelector('.info').appendChild(card);
    });
};

const enableNavigation = () => {
    const menuButton = document.querySelector('#global-nav-toggle');
    menuButton.addEventListener('click', (event) => {
        let target = event.target;
        document.querySelector('.global-nav').classList.toggle('show');
        if (target.tagName != "BUTTON") {
            target = target.closest('button');
        }
        if(document.querySelector('.global-nav').classList.contains('show')) {
            target.setAttribute('aria-expanded', 'true');
        } else {
            target.setAttribute('aria-expanded', 'false');
        }
        console.log("toggle")
    });
}
enableNavigation();
init();