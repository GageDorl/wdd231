import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

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

init();