const tag = document.getElementById("standingDiv");

let limit = 4;
let startIndex = 0;
let endIndex = startIndex + limit;

let countryData = {};   
let years = [];
async function fetchCountryData(countryName) {
  try {
    const res = await fetch(`history/${countryName}`); 
    const data = await res.json();
    document.getElementById("flag").innerHTML="";
const ele=document.createElement("img");
ele.setAttribute("src",`../assets/${data.flag}`);
ele.setAttribute("id","countryFlagImage");
document.getElementById("flag").appendChild(ele);
document.getElementById("countryBrief").textContent=`${data.description}`;

    countryData = {}; 
    years = [];

    data.olympics.forEach(item => {
      countryData[item.year] = {
        gold: item.gold,
        silver: item.silver,
        bronze: item.bronze
      };
      years.push(item.year);
    });

    years.sort((a, b) => b - a); 
    renderInitial();
  } catch (err) {
    console.error("Failed to fetch:", err);
    tag.innerHTML = `<p>Failed to load country history.</p>`;
  }
}

function renderInitial() {
  startIndex = 0;
  endIndex = limit;
  tag.innerHTML = "";
  renderPage();
}

function paginationRequest() {
  startIndex = endIndex;
  endIndex = startIndex + limit;

  if (startIndex >= years.length) return; 
  tag.innerHTML = "";
  renderPage();
}

function renderPage() {
  for (let i = startIndex; i < endIndex && i < years.length; i++) {
    let year = years[i];
    let { gold, silver, bronze } = countryData[year];
    let total = gold + silver + bronze;

    const detailsCard = `
      <div class="detailsBar">
        <div class="yearImage"><img src="../assets/olympics/${year}.png" class="olympicImage"  alt="${year}"></div>
        <div class="Bar" id="${year}">
          <h1>${year}</h1>
          <div><img src="../assets/gold-medal.png"><h5>:${gold}</h5></div>
          <div><img src="../assets/silver-medal.png"><h5>:${silver}</h5></div>
          <div><img src="../assets/bronze-medal.png"><h5>:${bronze}</h5></div>
          <h5 style="padding-left:1rem;">total: ${total}</h5>
        </div>
      </div>
    `;
    tag.innerHTML += detailsCard;
  }

 
}


fetchCountryData("India");

