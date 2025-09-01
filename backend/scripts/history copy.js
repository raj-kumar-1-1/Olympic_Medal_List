

document.getElementById("flag").innerHTML="";
const ele=document.createElement("img");
ele.setAttribute("src","../assets/Indian-flag.png");
ele.setAttribute("id","countryFlagImage");
document.getElementById("flag").appendChild(ele);

let history = {
  "India": {
    "2004": {
      "gold": 0,
      "silver": 0,
      "bronze": 0,
      "total": 0
    },
    "2008": {
      "gold": 1,
      "silver": 0,
      "bronze": 2,
      "total": 3
    },
    "2012": {
      "gold": 0,
      "silver": 2,
      "bronze": 4,
      "total": 6
    },
    "2016": {
      "gold": 0,
      "silver": 1,
      "bronze": 1,
      "total": 2
    },
    "2020": {
      "gold": 1,
      "silver": 2,
      "bronze": 4,
      "total": 7
    },
    "2024": {
      "gold": 0,
      "silver": 1,
      "bronze": 5,
      "total": 6
    }
  }
}

let tag=document.getElementById("standingDiv");

let limit=4;
let startIndex=0;
let endIndex=startIndex+limit;
let country=history["India"];
let years=Object.keys(country);
years.sort((a, b) => b - a);


function paginationRequest(){
    startIndex=limit;
    endIndex=endIndex+limit;
 
tag.innerHTML="";
    for(let i=startIndex;i<endIndex;i++)
    {
        let year = years[i];
        let gold=country[year]["gold"];
        let silver=country[year]["silver"];
        let bronze=country[year]["bronze"];
        let total=gold+silver+bronze;
        const detailsCard=`
  <div class="detailsBar">
 <div class="yearImage"><img src="../assets/olympics/2004.jpg"> </div>
                <div class="Bar" id="2024">
                    <h1>${year}</h1>
                    <div ><img src="../assets/gold-medal.png" ><h5>:${gold}</h5></div>
                    <div ><img src="../assets/silver-medal.png" ><h5>:${silver}</h5> </div>
                    <div ><img src="../assets/bronze-medal.png" ><h5>:${bronze}</h5></div>
                    <h5 style:"padding-left:1rem;">total:${total}</h5>
                </div>
            </div>
`;
tag.innerHTML+=detailsCard;


    }
      tag.innerHTML+=`            <button onclick="paginationRequest()" style="height:2rem;width:2rem; align-items: center;">-></button>
`;


}

function start()
{
    tag.innerHTML="";
    for(let i=startIndex;i<endIndex;i++)
    {
        let year = years[i];
        let gold=(country[year]["gold"]);
        let silver=(country[year]["silver"]);
        let bronze=(country[year]["bronze"]);
        let total=gold+silver+bronze;
        const detailsCard=`
  <div class="detailsBar">
 <div class="yearImage"><img src="../assets/olympics/2004.jpg"> </div>
                <div class="Bar" id="2024">
                    <h1>${year}</h1>
                    <div ><img src="../assets/gold-medal.png" ><h5>:${gold}</h5></div>
                    <div ><img src="../assets/silver-medal.png" ><h5>:${silver}</h5> </div>
                    <div ><img src="../assets/bronze-medal.png" ><h5>:${bronze}</h5></div>
                    <h5 style:"padding-left:1rem;">total:${total}</h5>
                </div>
            </div>
`;
tag.innerHTML += detailsCard;


    }
    tag.innerHTML+=`            <h1 onclick="paginationRequest()" style="height:2rem;width:2rem; align-items: center;">-></h1>
`;



}
start();




