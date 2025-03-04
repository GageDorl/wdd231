const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

const parkInfoLinks = [
  {
      name: "Current Conditions &#x203A;",
      link: "conditions.html",
      image: "",
      altText: "",
      description: "See what conditions to expect in the park before leaving on your trip!"
  },
  {
      name: "Fees and Passes &#x203A;",
      link: "fees.html",
      image: "",
      altText: "",
      description: "Learn about the fees and passes that are available."
  },
  {
      name: "Visitor Centers &#x203A;",
      link: "visitor_centers.html",
      image: "",
      altText: "",
      description: "Learn about the visitor centers in the park."
  }
];

export async function getParkData() {
  const parkData = await getJson(`parks?parkCode=yell`);
  return parkData.data[0];
}

export function getParkInfoLinks(data) {
  const withUpdatedImages = parkInfoLinks.map((item, index) => {
    item.image = data[index+2].url;
    item.altText = data[index+2].altText;
    return item;
  });
  return withUpdatedImages;
}

export const getJson = async url => {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  let data = {};
  const response = await fetch(`${baseUrl}${url}`, options);
  if (response.ok){
    data = await response.json();
  } else throw new Error("response not ok");
  return data;
}