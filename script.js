// Fetching elements from the DOM and adding event listeners to calculate the Challenge Rating (CR) based on user input

import { calculateFinalCR } from "./calculator.js";

document.getElementById("calculate-btn").addEventListener("click", () => {
    const hp = parseInt(document.getElementById("hp-input").value);
    const ac = parseInt(document.getElementById("ac-input").value);
    const damage = parseInt(document.getElementById("damage-input").value);
    const attackBonus = parseInt(document.getElementById("attack-input").value);
    const saveDC = parseInt(document.getElementById("save-dc-input").value);

    const { defensiveCR, offensiveCR, finalCR } = calculateFinalCR(hp, ac, damage, attackBonus, saveDC);

    document.getElementById("result").innerText = `Final CR: ${finalCR} (Defensive: ${defensiveCR}, Offensive: ${offensiveCR})`;
});
