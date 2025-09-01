async function populate(year) {
  try {
    const res = await fetch(`/standings/${year}`);
    const data = await res.json();

    if (!data || data.error) {
      console.error("No data found for", year);
      return;
    }

    const stand1 = data.stand1;
    const stand2 = data.stand2;
    const stand3 = data.stand3;

    // stand1
    document.getElementById("stand1_gold").innerHTML = `Gold: ${stand1.gold}`;
    document.getElementById("stand1_silver").innerHTML = `Silver: ${stand1.silver}`;
    document.getElementById("stand1_bronze").innerHTML = `Bronze: ${stand1.bronze}`;
    document.getElementById("stand1_total").innerHTML = `Total: ${stand1.total}`;
    // stand2
    document.getElementById("stand2_gold").innerHTML = `Gold: ${stand2.gold}`;
    document.getElementById("stand2_silver").innerHTML = `Silver: ${stand2.silver}`;
    document.getElementById("stand2_bronze").innerHTML = `Bronze: ${stand2.bronze}`;
    document.getElementById("stand2_total").innerHTML = `Total: ${stand2.total}`;
    // stand3
    document.getElementById("stand3_gold").innerHTML = `Gold: ${stand3.gold}`;
    document.getElementById("stand3_silver").innerHTML = `Silver: ${stand3.silver}`;
    document.getElementById("stand3_bronze").innerHTML = `Bronze: ${stand3.bronze}`;
    document.getElementById("stand3_total").innerHTML = `Total: ${stand3.total}`;

    // Flags
    var flag1 = document.getElementById("stand1-flag");
    var flag2 = document.getElementById("stand2-flag");
    var flag3 = document.getElementById("stand3-flag");

    flag1.style.backgroundImage = `url("../assets/${stand1.country}-flag.png")`;
    flag2.style.backgroundImage = `url("../assets/${stand2.country}-flag.png")`;
    flag3.style.backgroundImage = `url("../assets/${stand3.country}-flag.png")`;

  } catch (err) {
    console.error("Error fetching standings:", err);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("years").value;
  populate(year);
});

function sendValue() {
  const element = document.getElementById("years").value;
  document.getElementById("heading").innerHTML = element;
  console.log(element);
  populate(element);
}
