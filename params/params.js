import {products} from './products.mjs';

const getParams = (param) => {
  const URLstring = window.location.href;
  const url = new URL(URLstring);
  return url.searchParams.get(param);
}

const productTemplate = product => {
  return `
    <div class="product">
      <img src="${product.image}" alt="${product.name}"/>
      <div class="productDescription">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
      </div>
    </div>
  `;
}

const getProductDetails = () => {
  const productId = getParams("productId");
  if (!productId){
    document.querySelector('.productSection').innerHTML = "<h1>Product Not Found</h1>";
    return;
  };
  console.log(productId);
  const product = products.find(product => product.id === parseInt(productId));
  const productDetails = productTemplate(product);
  document.querySelector('.productSection').innerHTML = productDetails;
}

getProductDetails();