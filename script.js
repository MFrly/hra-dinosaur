const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");

// Inicializace skóre
let score = 0;

// Funkce pro provedení skoku postavičky
function jump() {
  // Přidání třídy "jump" k postavičce pro animaci skoku
  if (player.classList != "jump") {
    player.classList.add("jump");

    // Nastavení intervalu pro odstranění třídy "jump" po skončení animace
    setTimeout(function () {
      player.classList.remove("jump");
    }, 300);
  }
}

// Interval pro pravidelné kontroly stavu hry
let isAlive = setInterval(function () {
  // Získání aktuální pozice postavičky ve vertikálním směru
  let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

  // Získání aktuální pozice překážky ve vodorovném směru
  let obstacleLeft = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );

  // Detekce kolize
  if (obstacleLeft < 50 && obstacleLeft > 0 && playerTop >= 140) {
    // Kolize nastala - zobrazení konečného skóre a reset skóre
    alert("Konec hry! Skóre: " + score);
    score = 0; // resetování skóre
  } else if (obstacleLeft <= 0) {
    // Překážka překonána - inkrementace skóre
    score++;
    scoreDisplay.innerText = "Skóre: " + score;
  }
}, 10);

// Naslouchání události stisknutí klávesy
document.addEventListener("keydown", function (event) {
  // Provedení skoku při stisknutí klávesy "Space"
  if (event.code === "Space") {
    jump();
  }
});
