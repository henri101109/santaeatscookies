let clickCount = 0;
let clickAmount = 1;
let totalClicks = 0;
let santaWeight = 0;
let autoClickInterval;
// ALL VARIABLES

// CLICK SENSING AND ADDING VALUES TO VARIABLES
document.getElementById("cookie").addEventListener("click", () => {
  updateClickAmount();
  clickCount += clickAmount;
  totalClicks++;
  santaWeight += 0.5;

  updateStats();
  createSmallCookieEffect();
});

function updateClickAmount() {
  if (clickCount >= 1200) clickAmount = 500;
  else if (clickCount >= 50) clickAmount = 10;
  else if (clickCount >= 40) clickAmount = 3;
  else if (clickCount >= 20) clickAmount = 2;
}

// CLICK ANIMATION
function createSmallCookieEffect() {
  const smallCookie = document.createElement("img");
  smallCookie.src = "cookie.png";
  smallCookie.classList.add("small-cookie");
  document.getElementById("cookie").appendChild(smallCookie);

  setTimeout(() => {
    smallCookie.remove();
  }, 500);
}

// STATS UPDATE
function updateStats() {
  document.getElementById("click-counter").textContent = `Clicks: ${clickCount}`;
  document.getElementById("tclicks").textContent = `Total Clicks: ${totalClicks}`;
  document.getElementById("santaw").textContent = `Santa's Weight: ${santaWeight}lbs`;
}

// IF AND IFELSE STATEMENTS
document.getElementById("shop-1").addEventListener("click", () => {
  if (clickCount >= 1000) {
    clickCount -= 1000;
    santaWeight += 400;
    updateStats();
  } else {
    alert("Not enough clicks!");
  }
});

document.getElementById("shop-2").addEventListener("click", () => {
  if (clickCount >= 4000) {
    clickCount -= 4000;
    autoClickInterval = setInterval(() => {
      clickCount += 100;
      updateStats();
    }, 15000);
    updateStats();
  } else {
    alert("Not enough clicks!");
  }
});

document.getElementById("shop-3").addEventListener("click", () => {
  if (clickCount >= 5000) {
    clickCount -= 5000;
    santaWeight += 2500;
    updateStats();
  } else {
    alert("Not enough clicks!");
  }
});

document.getElementById("shop-4").addEventListener("click", () => {
  if (clickCount >= 9999) {
    clickCount -= 9999;
    alert("Secret Prize added 10% Chance Santa Gained 10000lbs!");
    const prize = Math.random();
    if (prize < 0.25) santaWeight += 100;
    else if (prize < 0.50) clickCount += 10000;
    else if (prize < 0.75) santaWeight += 400;
    else if (prize < 0.90) santaWeight += 100000;
    else autoClickInterval = setInterval(() => {
      clickCount += 100;
      updateStats();
    }, 1000);
    updateStats();
  } else {
    alert("Not enough clicks!");
  }
});

