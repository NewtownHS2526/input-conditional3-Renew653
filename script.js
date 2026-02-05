const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

console.log(textBox, outputBox, statusBox);

let score = 0;
let pluto = false;

const checkAnswer = () => {
  const currentAnswer = textBox.value;
  console.log("Checking", currentAnswer);
  // Match against boroughs.
  if (currentAnswer === "Mercury") {
    outputBox.innerHTML += `<h3>Mercury</h3><p>Closest to the Sun, smallest planet, and no moons!</p>`;
    score += 1;
  } else if (currentAnswer === "Venus") {
    outputBox.innerHTML += `<h3>Venus</h3><p>Second planet, hottest due to thick atmosphere, and no moons!</p>`;
    score += 1;
  } else if (currentAnswer === "Earth") {
    outputBox.innerHTML += `<h3>Earth</h3><p>Third planet, only known planet to support life!</p>`;
    score += 1;
  } else if (currentAnswer === "Mars") {
    outputBox.innerHTML += `<h3>Mars</h3><p>Fourth planet, known as the "Red Planet" with two small moons!</p>`;
    score += 1;
  } else if (currentAnswer === "Jupiter") {
    outputBox.innerHTML += `<h3>Jupiter</h3><p>Fith and Largest planet, a gas giant with over 90 moons and a strong magnetic field.</p>`;
    score += 1;
    } else if (currentAnswer === "Saturn") {
    outputBox.innerHTML += `<h3>Saturn</h3><p> Sixth planet and Famous for its large, prominent ring system!</p>`;
    score += 1;
    } else if (currentAnswer === "Uranus") {
    outputBox.innerHTML += `<h3>Uranus</h3><p> Seventh planet, an ice giant with a distinct tilted axis!</p>`;
    score += 1;
    } else if (currentAnswer === "Neptune") {
    outputBox.innerHTML += `<h3>Neptune</h3><p> The eighth and furthest planet, an ice giant, and very cold!</p>`;
    score += 1;
  } else if (currentAnswer === "Pluto") {
    outputBox.innerHTML += `<h3>Pluto</h3><p>You found a plannet that was reclassified from a planet to a dwarf planet in 2006!</p>`;
    pluto = true;
  } else {
    statusBox.innerHTML = `Sorry, but ${currentAnswer} is not a planet in the solar system.`;
  }
  checkScore();
  // Reset the textBox
  textBox.value = "";
};

const checkScore = () => {
  if (score === 8) {
    statusBox.innerHTML = "Congratulations, you found all eight planets!";
  }
  if (score === 8 && pluto) {
    statusBox.innerHTML = "A true astronaut! All Eight Planets and our neighbor pluto!";
    textBox.disabled = true;
  }
};

textBox.addEventListener("change", checkAnswer)
