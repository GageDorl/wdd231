import { products } from "./products.mjs";

const linkTemplate = product => {
    return `<li>
                <a href="product.html?productId=${product.id}">
                    <img src="${product.image}" alt="${product.name}"/>
                    <h3>${product.name}</h3>
                </a>
            </li>`;
}

const setLinks = () => {
    const linkList = products.map(product => linkTemplate(product)).join('');
    document.querySelector('.productList').innerHTML = linkList;
}

setLinks();
