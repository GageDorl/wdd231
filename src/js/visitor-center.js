import { getParkData, getVisitorCenterData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import '../css/style.css';
import '../css/visitor-center.css';
const getVisitorCenterFromURL = async () => {
    const queryString = new URLSearchParams(window.location.search);
    const visitorCenterId = queryString.get('id');
    const visitorCenter = await getVisitorCenterData(visitorCenterId);
    return visitorCenter[0];
}


const init = async () => {
    const parkData = await getParkData();
    setHeaderFooter(parkData);
    const visitorCenter = await getVisitorCenterFromURL();
    setVisitorCenter(visitorCenter);
    // const visitorCenter = getVisitorCenterFromURL();
    // setVisitorCenter(visitorCenter);
};

const setVisitorCenter = (visitorCenter) => {
    console.log(visitorCenter);
    const visitorCenterName = document.querySelector('.visitorCenterName');
    visitorCenterName.textContent = visitorCenter.name;
    const visitorCenterImage = document.querySelector('.visitorCenterImage');
    visitorCenterImage.src = visitorCenter.images[0].url;
    visitorCenterImage.alt = visitorCenter.images[0].altText;
    const visitorCenterCaption = document.querySelector('.visitorCenterCaption');
    visitorCenterCaption.innerHTML = `${visitorCenter.images[0].caption} <span>${visitorCenter.images[0].credit}</span>`;
    const visitorCenterDescription = document.querySelector('.visitorCenterInfo>p');
    visitorCenterDescription.innerHTML = visitorCenter.description;
    const physicalAddress = document.querySelector('.vc-addresses__physical>address');
    physicalAddress.innerHTML = visitorCenter.addresses[0].line1 + '<br>' + visitorCenter.addresses[0].city + ', ' + visitorCenter.addresses[0].stateCode + ' ' + visitorCenter.addresses[0].postalCode;
    const mailingAddress = document.querySelector('.vc-addresses__mailing>address');
    mailingAddress.innerHTML = visitorCenter.addresses[1].line1 + '<br>' + visitorCenter.addresses[1].city + ', ' + visitorCenter.addresses[1].stateCode + ' ' + visitorCenter.addresses[1].postalCode;
    const directionsInfo = document.querySelector('#vcDirections>p');
    directionsInfo.innerHTML = visitorCenter.directionsInfo;
    const amenities = document.querySelector('#vcAmenities>ul');
    visitorCenter.amenities.forEach(amenity => {
        const amenityItem = document.createElement('li');
        amenityItem.textContent = amenity;
        amenityItem.classList.add('vcAmenities__item');
        amenities.appendChild(amenityItem);
    });
    const email = document.querySelector('.vc-contact__email>a');
    email.href = 'mailto:' + visitorCenter.contacts.emailAddresses[0].emailAddress;
    email.textContent = visitorCenter.contacts.emailAddresses[0].emailAddress;
    const phone = document.querySelector('.vc-contact__phone>a');
    phone.href = 'tel:' + visitorCenter.contacts.phoneNumbers[0].phoneNumber;
    phone.textContent = visitorCenter.contacts.phoneNumbers[0].phoneNumber;
    const imageGallery = document.querySelector('.vc-gallery>ul');
    visitorCenter.images.forEach(image => {
        const imageItem = document.createElement('li');
        const imageLink = document.createElement('a');
        const imageElement = document.createElement('img');
        imageElement.src = image.url;
        imageElement.alt = image.altText;
        imageLink.href = image.url;
        imageLink.target = '_blank';
        imageLink.appendChild(imageElement);
        imageItem.appendChild(imageLink);
        imageGallery.appendChild(imageItem);
    });
}

init();
