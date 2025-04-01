import spritePath from '../images/sprite.symbol.svg';

export const parkInfoTemplate = data => {
    const heroTitle = document.createElement('a');
    heroTitle.href = data.url;
    heroTitle.textContent = data.name;
    heroTitle.classList.add('hero-banner__title');
    const heroSubtitle = document.createElement('p');
    heroSubtitle.classList.add('hero-banner__subtitle');
    let subtitleHTML = `<span>${data.designation}</span>`;
    subtitleHTML += `<span>${data.states}</span>`;
    heroSubtitle.innerHTML = subtitleHTML;
    return heroTitle.outerHTML + heroSubtitle.outerHTML;
};

export const mediaCardTemplate = info => {
    const card = document.createElement('div');
    card.classList.add('media-card');
    const link = document.createElement('a');
    link.href = info.link;
    link.classList.add('media-card__link');
    const cardImg = document.createElement('img');
    cardImg.src = info.image;
    cardImg.alt = info.altText;
    cardImg.classList.add('media-card__image');
    const cardTitle = document.createElement('h2');
    cardTitle.innerHTML = info.name;
    cardTitle.classList.add('media-card__title');
    link.appendChild(cardImg);
    link.appendChild(cardTitle);
    const cardDescription = document.createElement('p');
    cardDescription.textContent = info.description;
    cardDescription.classList.add('media-card__description');
    card.appendChild(link);
    card.appendChild(cardDescription);
    return card;
};

export const addressTemplate = address => {
    const addressHTML = `${address.line1}<br>${address.city}, ${address.stateCode} ${address.postalCode}`;
    return addressHTML;
};

export const alertTemplate = alert => {
    return `<svg class="icon" focusable="false" aria-hidden="true">
                <use xlink:href="${spritePath}#alert-${alert.category.toLowerCase()=='park closure' ? 'closure' : alert.category.toLowerCase()}"></use>
            </svg>
            <div>
                <h3 class="alert-${alert.category.toLowerCase()=='park closure' ? 'closure' : alert.category.toLowerCase()}">${alert.title}</h3>
                <p>${alert.description}</p>
            </div>`
}

export const visitorCenterTemplate = center => {
    return `
        <h3><a href="visitor-center.html?id=${center.id}">${center.name}</a></h3>
        <p>${center.description}</p>
        <p>${center.directionsInfo}</p>
        `
}