// Scripts for calculating Challenge Rating (CR) based on HP, AC, damage, attack bonus, and save DC.

import { CR_TABLE } from "./data.js";

function getCRFromHP(hp) {
    return CR_TABLE.find(entry => hp >= entry.hpRange[0] && hp <= entry.hpRange[1])?.cr || "Unknown";
}

function getCRFromDamage(damage) {
    return CR_TABLE.find(entry => damage >= entry.dmgRange[0] && damage <= entry.dmgRange[1])?.cr || "Unknown";
}

function calculateFinalCR(hp, ac, damage, attackBonus, saveDC) {
    const defensiveCR = getCRFromHP(hp);
    const offensiveCR = getCRFromDamage(damage);

  // Further logic: Adjust based on AC, attack bonus, etc.

    return { defensiveCR, offensiveCR, finalCR: defensiveCR }; // Placeholder logic
}

export { calculateFinalCR };
