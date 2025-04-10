import { CR_TABLE } from "./data.js";

function getBaseCRFromRange(value, rangeKey) {
    return CR_TABLE.find(entry => value >= entry[rangeKey][0] && value <= entry[rangeKey][1])?.cr || "Unknown";
}

function getCRIndex(cr) {
    return CR_TABLE.findIndex(entry => entry.cr === cr);
}

function adjustCR(baseCR, actualValue, expectedValue) {
    let index = getCRIndex(baseCR);
    const delta = actualValue - expectedValue;

    if (delta >= 2 && index < CR_TABLE.length - 1) index += 1;
    else if (delta <= -2 && index > 0) index -= 1;

    return CR_TABLE[index]?.cr || baseCR;
}

function calculateFinalCR(hp, ac, damage, attackBonus, saveDC) {
  // Defensive CR
    const baseDefCR = getBaseCRFromRange(hp, "hpRange");
    const expectedAC = CR_TABLE.find(entry => entry.cr === baseDefCR)?.ac || 13;
    const adjustedDefCR = adjustCR(baseDefCR, ac, expectedAC);

  // Offensive CR
    const baseOffCR = getBaseCRFromRange(damage, "dmgRange");
    const expectedAttack = CR_TABLE.find(entry => entry.cr === baseOffCR)?.attackBonus || 3;
    const adjustedOffCR = adjustCR(baseOffCR, attackBonus, expectedAttack);

  // Final CR (average)
    const defIndex = getCRIndex(adjustedDefCR);
    const offIndex = getCRIndex(adjustedOffCR);
    const averageIndex = Math.round((defIndex + offIndex) / 2);
    const finalCR = CR_TABLE[averageIndex]?.cr || "Unknown";

    return {
        defensiveCR: adjustedDefCR,
        offensiveCR: adjustedOffCR,
        finalCR
    };
}

export { calculateFinalCR };

