let sportDetails = {
  "2024": {
    hostCity: "Paris, France",
    sports: ["soccer", "basketball", "gymnastics"],
    country: ["France", "USA", "China"]
  },
  "2021": {
    hostCity: "Tokyo, Japan",
    sports: ["swimming", "tennis", "soccer"],
    country: ["Japan", "USA", "Brazil"]
  },
  "2016": {
    hostCity: "Rio de Janeiro, Brazil",
    sports: ["soccer", "basketball", "gymnastics"],
    country: ["Brazil", "USA", "Russia"]
  },
  "2012": {
    hostCity: "London, United Kingdom",
    sports: ["swimming", "tennis", "soccer"],
    country: ["USA", "UK", "Spain"]
  },
  "2008": {
    hostCity: "Beijing, China",
    sports: ["gymnastics", "basketball", "soccer"],
    country: ["China", "USA", "Argentina"]
  },
  "2004": {
    hostCity: "Athens, Greece",
    sports: ["swimming", "tennis", "soccer"],
    country: ["USA", "Russia", "Greece"]
  },
  "2000": {
    hostCity: "Sydney, Australia",
    sports: ["soccer", "basketball", "gymnastics"],
    country: ["Australia", "USA", "Russia"]
  },
  "1996": {
    hostCity: "Atlanta, USA",
    sports: ["swimming", "tennis", "soccer"],
    country: ["USA", "Germany", "Nigeria"]
  },
  "1992": {
    hostCity: "Barcelona, Spain",
    sports: ["soccer", "basketball", "gymnastics"],
    country: ["Spain", "USA", "Unified Team"]
  },
  "1988": {
    hostCity: "Seoul, South Korea",
    sports: ["swimming", "tennis", "soccer"],
    country: ["USA", "Germany", "South Korea"]
  },

  // Winter Olympics
  "2022": {
    hostCity: "Beijing, China",
    sports: ["skiing", "ice hockey", "figure skating"],
    country: ["Norway", "Russia", "Canada"]
  },
  "2018": {
    hostCity: "Pyeongchang, South Korea",
    sports: ["snowboarding", "curling", "speed skating"],
    country: ["Norway", "Germany", "Canada"]
  },
  "2014": {
    hostCity: "Sochi, Russia",
    sports: ["bobsleigh", "ice hockey", "ski jumping"],
    country: ["Russia", "USA", "Norway"]
  },
  "2010": {
    hostCity: "Vancouver, Canada",
    sports: ["figure skating", "snowboarding", "ice hockey"],
    country: ["Canada", "Germany", "USA"]
  },
  "2006": {
    hostCity: "Turin, Italy",
    sports: ["speed skating", "biathlon", "skiing"],
    country: ["Germany", "USA", "Austria"]
  },
  "2002": {
    hostCity: "Salt Lake City, USA",
    sports: ["snowboarding", "ice hockey", "figure skating"],
    country: ["Germany", "USA", "Norway"]
  },
  "1998": {
    hostCity: "Nagano, Japan",
    sports: ["ski jumping", "ice hockey", "snowboarding"],
    country: ["Germany", "Norway", "Russia"]
  },
  "1994": {
    hostCity: "Lillehammer, Norway",
    sports: ["cross-country skiing", "biathlon", "figure skating"],
    country: ["Norway", "Russia", "Germany"]
  },
  "1992": {
    hostCity: "Albertville, France",
    sports: ["alpine skiing", "speed skating", "ice hockey"],
    country: ["Germany", "Norway", "USA"]
  },
  "1988": {
    hostCity: "Calgary, Canada",
    sports: ["bobsleigh", "figure skating", "ski jumping"],
    country: ["Soviet Union", "East Germany", "Switzerland"]
  }
};
function populate(name){
    name=name.toLowerCase();
    const years = Object.keys(sportDetails).sort().reverse(); 
    console.log(name);

    for(let year of years)
    {
        
        var sportArray=sportDetails[year].sports;
        var index=sportArray.indexOf(name);
         if (index === -1) continue;
        var country=sportDetails[year].country[index];
        console.log(country);
        var element=document.createElement("div");
        element.setAttribute("class","winsList");
        element.innerHTML=`
        <div class="diagonal">
                <h1 style="transform: rotate(-45deg);">${year}</h1>

            </div>
            <div class="countryDetials">
                <h1 style="margin-top: 3.2rem;">${country}</h1>
                <div class="playerAchievement">
                    <div class="playerImage"></div>
                    <div class="playerOverview"></div>
                </div>

            </div>
        `;
        document.body.appendChild(element);
        
    }
}
window.addEventListener('DOMContentLoaded', ()=>{
 

  document.getElementById("heading").innerHTML=localStorage.getItem("sportName");
  console.log(localStorage.getItem("sportName"));
    const heading=document.getElementById("heading").innerHTML;
    let image=document.createElement('img');
    image.setAttribute('src',`../assets/${heading}.png`);
    let element=document.getElementById("sportImage");
    element.appendChild(image);

    populate(heading);


});
