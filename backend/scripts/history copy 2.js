async function fetchCountry() {
  const country = document.getElementById("countryInput").value.trim();
  if (!country) return alert("Please enter a country name");

  try {
    const response = await fetch(`http://localhost:3000/country/${country}`);

    if (!response.ok) {
      return alert("Country not found");
    }

    const data = await response.json();
    console.log(data); 
    displayData(data);
  } catch (error) {
    console.error("Fetch Error:", error);
    alert("Something went wrong");
  }
}
let limit=4;
let startIndex=0;
let endIndex=startIndex+limit;
let countryName=

function displayData(data) {

document.getElementById("flag").innerHTML="";
const ele=document.createElement("img");
ele.setAttribute("src",`../assets/${data.flag}`);
ele.setAttribute("id","countryFlagImage");
document.getElementById("flag").appendChild(ele);


  const resultDiv = document.getElementById("standingDiv");
  resultDiv.innerHTML = `
    <h2>${data.countryName}</h2>
    <img src="${data.flag}" width="100"><br><br>
    ${Object.entries(data.olympics).map(([year, details]) => `
      <h3>${year}</h3>
      <p>Gold: ${details.gold?.count || 0}</p>
      <p>Silver: ${details.silver?.count || 0}</p>
      <p>Bronze: ${details.bronze?.count || 0}</p>
    `).join("<hr>")}
  `;
}

