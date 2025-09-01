let standings = {
  "2024": {
    stand1: {
      country: "USA",
      gold: "45",
      silver: "48",
      bronze: "40",
      total: "133"
    },
    stand2: {
      country: "China",
      gold: "38",
      silver: "41",
      bronze: "35",
      total: "114"
    },
    stand3: {
      country: "Indian",
      gold: "15",
      silver: "18",
      bronze: "22",
      total: "55"
    }
  },
  "2021": {
    stand1: {
      country: "USA",
      gold: "39",
      silver: "41",
      bronze: "33",
      total: "113"
    },
    stand2: {
      country: "China",
      gold: "38",
      silver: "32",
      bronze: "18",
      total: "88"
    },
    stand3: {
      country: "Japan",
      gold: "27",
      silver: "14",
      bronze: "17",
      total: "58"
    }
  },
  "2016": {
    stand1: {
      country: "USA",
      gold: "46",
      silver: "37",
      bronze: "38",
      total: "121"
    },
    stand2: {
      country: "Great-Britain",
      gold: "27",
      silver: "23",
      bronze: "17",
      total: "67"
    },
    stand3: {
      country: "China",
      gold: "26",
      silver: "18",
      bronze: "26",
      total: "70"
    }
  },
  "2012": {
    stand1: {
      country: "USA",
      gold: "46",
      silver: "28",
      bronze: "30",
      total: "104"
    },
    stand2: {
      country: "China",
      gold: "38",
      silver: "27",
      bronze: "23",
      total: "88"
    },
    stand3: {
      country: "Russia",
      gold: "24",
      silver: "26",
      bronze: "32",
      total: "82"
    }
  },
  "2008": {
    stand1: {
      country: "China",
      gold: "48",
      silver: "22",
      bronze: "30",
      total: "100"
    },
    stand2: {
      country: "USA",
      gold: "36",
      silver: "38",
      bronze: "36",
      total: "110"
    },
    stand3: {
      country: "Russia",
      gold: "24",
      silver: "13",
      bronze: "23",
      total: "60"
    }
  },
  "2004": {
    stand1: {
      country: "USA",
      gold: "36",
      silver: "39",
      bronze: "26",
      total: "101"
    },
    stand2: {
      country: "China",
      gold: "32",
      silver: "17",
      bronze: "14",
      total: "63"
    },
    stand3: {
      country: "Russia",
      gold: "27",
      silver: "27",
      bronze: "38",
      total: "92"
    }
  },
  "2000": {
    stand1: {
      country: "USA",
      gold: "37",
      silver: "24",
      bronze: "32",
      total: "93"
    },
    stand2: {
      country: "Russia",
      gold: "32",
      silver: "28",
      bronze: "29",
      total: "89"
    },
    stand3: {
      country: "China",
      gold: "28",
      silver: "16",
      bronze: "14",
      total: "58"
    }
  },
  "1996": {
    stand1: {
      country: "USA",
      gold: "44",
      silver: "32",
      bronze: "25",
      total: "101"
    },
    stand2: {
      country: "Russia",
      gold: "26",
      silver: "21",
      bronze: "16",
      total: "63"
    },
    stand3: {
      country: "Germany",
      gold: "20",
      silver: "18",
      bronze: "27",
      total: "65"
    }
  },
  "1992": {
    stand1: {
      country: "Unified Team",
      gold: "45",
      silver: "38",
      bronze: "29",
      total: "112"
    },
    stand2: {
      country: "USA",
      gold: "37",
      silver: "34",
      bronze: "37",
      total: "108"
    },
    stand3: {
      country: "Germany",
      gold: "33",
      silver: "21",
      bronze: "28",
      total: "82"
    }
  },
  "1988": {
    stand1: {
      country: "Soviet Union",
      gold: "55",
      silver: "31",
      bronze: "46",
      total: "132"
    },
    stand2: {
      country: "East Germany",
      gold: "37",
      silver: "35",
      bronze: "30",
      total: "102"
    },
    stand3: {
      country: "USA",
      gold: "36",
      silver: "31",
      bronze: "27",
      total: "94"
    }
  }
};
function populate(year){
    // year=year.toLowerCase();
    const years = Object.keys(standings).sort().reverse(); 
   const stand1=standings[year].stand1;
   const stand2=standings[year].stand2;
   const stand3=standings[year].stand3;
   const stand1_country=stand1.country;
   const stand2_country=stand2.country;
   const stand3_country=stand3.country;
   const stand1_gold=stand1.gold;
   const stand1_silver=stand1.silver;
   const stand1_bronze=stand1.bronze;
   const stand1_total=stand1.total;
   const stand2_gold=stand2.gold;
   const stand2_silver=stand2.silver;
   const stand2_bronze=stand2.bronze;
   const stand2_total=stand2.total;
   const stand3_gold=stand3.gold;
   const stand3_silver=stand3.silver;
   const stand3_bronze=stand3.bronze;
   const stand3_total=stand3.total;
   //stand1
   document.getElementById("stand1_gold").innerHTML=`Gold: ${stand1_gold}`;
   document.getElementById("stand1_silver").innerHTML=`Silver: ${stand1_silver}`;
   document.getElementById("stand1_bronze").innerHTML=`Bronze: ${stand1_bronze}`;
   document.getElementById("stand1_total").innerHTML=`Total: ${stand1_total}`;
   //stand2
 document.getElementById("stand2_gold").innerHTML=`Gold: ${stand2_gold}`;
   document.getElementById("stand2_silver").innerHTML=`Silver: ${stand2_silver}`;
   document.getElementById("stand2_bronze").innerHTML=`Bronze: ${stand2_bronze}`;
   document.getElementById("stand2_total").innerHTML=`Total: ${stand2_total}`;
   //stand3
      document.getElementById("stand3_gold").innerHTML=`Gold: ${stand3_gold}`;
   document.getElementById("stand3_silver").innerHTML=`Silver: ${stand3_silver}`;
   document.getElementById("stand3_bronze").innerHTML=`Bronze: ${stand3_bronze}`;
   document.getElementById("stand3_total").innerHTML=`Total: ${stand3_total}`;

  var flag3=document.getElementById("stand3-flag");
  var flag2=document.getElementById("stand2-flag");
  var flag1=document.getElementById("stand1-flag");

  flag1.style.backgroundImage=`url("../assets/${stand1_country}-flag.png")`;
  flag2.style.backgroundImage=`url("../assets/${stand2_country}-flag.png")`;
  flag3.style.backgroundImage=`url("../assets/${stand3_country}-flag.png")`;

}
window.addEventListener('DOMContentLoaded', ()=>{

    const year=document.getElementById("years").value;
    populate(year);


});
function sendValue()
{
    const element=document.getElementById("years").value;
    document.getElementById("heading").innerHTML=element;
    console.log(element);
    populate(element);
}
