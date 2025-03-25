import { parkInfoTemplate, addressTemplate } from "./templates.mjs";

export const setHeaderInfo = data => {
    const disclaimerLink = document.querySelector(".disclaimer > a");
    disclaimerLink.href = data.url;
    disclaimerLink.textContent = data.fullName;
    document.title = data.fullName;
    const heroImg = document.querySelector(".hero-banner > img");
    heroImg.src = data.images[0].url;
    heroImg.alt = data.images[0].altText;
    document.querySelector('.hero-banner__content').innerHTML = parkInfoTemplate(data);
    enableNavigation();
};

export const setFooterInfo = data => {
    const address = data.addresses.find(address => address.type === "Mailing");
    const footerAddress = document.querySelector('.footer-address');
    footerAddress.innerHTML = addressTemplate(address);
    const phone = data.contacts.phoneNumbers.find(phone => phone.type === "Voice");
    const footerPhone = document.querySelector('.footer-phone');
    footerPhone.textContent = phone.phoneNumber;
};

const setHeaderFooter = data => {
    setHeaderInfo(data);
    setFooterInfo(data);
}


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
    const submenuButtons = document.querySelectorAll('.global-nav__split-button__toggle');
    submenuButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.currentTarget.closest('li').querySelector('.global-nav__submenu').classList.toggle('show');
            event.currentTarget.querySelector('.icon').classList.toggle('rotate');
        });
    });
};

export default setHeaderFooter;