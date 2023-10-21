/* W05: Programming Tasks */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* FETCH */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    let article = document.createElement("article");
    let templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;
    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.location);

    article.appendChild(templeName);
    article.appendChild(img);

    templesElement.appendChild(article);
  });
};

const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  templeList = await response.json();
  displayTemples(templeList);
};

const reset = () => {
  templesElement.textContent = "";
};


const sortBy = (temples) => {
  reset();

  let filter = document.querySelector("#sortBy").value;

  switch (filter) {
    case "utah":
      displayTemples(temples.filter( temple => temple.location.includes("Utah") ));
      break;
    case "notutah":
      displayTemples(temples.filter(temple => !temple.location.includes("Utah") ));
      break;
    case "older":
      displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1) ));
      break;
    case "all":
      displayTemples(temples);
      break;

  };
};

getTemples();

document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });