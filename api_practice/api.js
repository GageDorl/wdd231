const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(endpoint) {
  // replace this with your actual key
  const apiKey = "kGIggf62s3DzwtqbdK1YD6kn0bxd4iLagfyuojhP";
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey
      }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}


async function renderClimbingList() {
    const data = await getJson('activities/parks?q=climbing');
    const parks = data.data[0].parks;
    const outputList = document.createElement('ul');
    outputList.setAttribute('id', 'outputList');
    outputList.innerHTML = parks.map(listTemplate).join('');
    document.body.appendChild(outputList);
}

const listTemplate = item => {
    return `
    <li>
        <a href=${item.url}><h2>${item.fullName}</h2></a>
        <h3>States: ${item.states.split(',').join(', ')}</h3>
    </li>
    `
}

renderClimbingList();