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

export default setHeaderFooter;