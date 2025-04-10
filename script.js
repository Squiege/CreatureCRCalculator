// Fetching elements from the DOM and adding event listeners to calculate the Challenge Rating (CR) based on user input

import { calculateFinalCR } from "./calculator.js";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calculateCR").addEventListener("click", () => {
        const hp = parseInt(document.getElementById("hpRange").value);
        const ac = parseInt(document.getElementById("ac").value);
        const damage = parseInt(document.getElementById("damage1").value);
        const attackBonus = parseInt(document.getElementById("attackBonus1").value);
        const saveDC = parseInt(document.getElementById("saveDC").value);

    // Basic check for filled values
    if ([hp, ac, damage, attackBonus, saveDC].some(val => isNaN(val))) {
        alert("Please fill out all input fields.");
        return;
    }

    const { defensiveCR, offensiveCR, finalCR } = calculateFinalCR(
        hp,
        ac,
        damage,
        attackBonus,
        saveDC
    );

    document.getElementById("resultCard").classList.remove("hidden");
    document.getElementById("result").innerText = `Final CR: ${finalCR} (Defensive: ${defensiveCR}, Offensive: ${offensiveCR})`;
    });
});

