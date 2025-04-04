// Data Table for CR (Challenge Rating) to reference
// This table is used to determine the stats of a creature based on its CR
// The table includes the following properties:
// - cr: Challenge Rating
// - xp: Experience Points
// - prof: Proficiency Bonus
// - ac: Armor Class
// - hpRange: Hit Points Range
// - attackBonus: Attack Bonus
// - dmgRange: Damage Range
// - saveDC: Save DC
// The values in the table are based on the D&D 5e ruleset
// The table is structured as an array of objects, each representing a CR level
// Each object contains the properties mentioned above
const CR_TABLE = [
    { cr: "0", xp: 10, prof: 2, ac: 13, hpRange: [1, 6], attackBonus: 3, dmgRange: [0, 1], saveDC: 13 },
    { cr: "1/8", xp: 25, prof: 2, ac: 13, hpRange: [7, 35], attackBonus: 3, dmgRange: [2, 3], saveDC: 13 },
    { cr: "1/4", xp: 50, prof: 2, ac: 13, hpRange: [36, 49], attackBonus: 3, dmgRange: [4, 5], saveDC: 13 },
    { cr: "1/2", xp: 100, prof: 2, ac: 13, hpRange: [50, 70], attackBonus: 3, dmgRange: [6, 7], saveDC: 13 },
    { cr: "1", xp: 200, prof: 2, ac: 13, hpRange: [71, 90], attackBonus: 3, dmgRange: [8, 9], saveDC: 13 },
    { cr: "2", xp: 450, prof: 3, ac: 13, hpRange: [91, 120], attackBonus: 4, dmgRange: [10, 11], saveDC: 14 },
    { cr: "3", xp: 700, prof: 3, ac: 13, hpRange: [121, 150], attackBonus: 4, dmgRange: [12, 13], saveDC: 14 },
    { cr: "4", xp: 1_100, prof: 4, ac: 13, hpRange: [151, 180], attackBonus: 5, dmgRange: [14, 15], saveDC: 15 },
    { cr: "5", xp: 1_800, prof: 4, ac: 13, hpRange: [181, 210], attackBonus: 5, dmgRange: [16, 17], saveDC: 15 },
    { cr: "6", xp: 2_300, prof: 4, ac: 13, hpRange: [211, 240], attackBonus: 5, dmgRange: [18, 19], saveDC: 15 },
    { cr: "7", xp: 2_900, prof: 5, acRange:[13 ,15], hpRange:[241 ,270], attackBonus:[6 ,7], dmgRange:[20 ,21], saveDC:[16 ,17] },
    { cr:"8", xp :3_900 ,prof :5 ,ac :[13 ,15] ,hpRange :[271 ,300] ,attackBonus :[6 ,7] ,dmgRange :[22 ,23] ,saveDC :[16 ,17]},
    { cr:"9" , xp :5_000 ,prof :5 ,ac :[13 ,15] ,hpRange :[301 ,330] ,attackBonus :[6 ,7] ,dmgRange :[24 ,25] ,saveDC :[16 ,17]},
    { cr:"10", xp :5_900 ,prof :5 ,ac :[13 ,15] ,hpRange :[331 ,360] ,attackBonus :[6 ,7] ,dmgRange :[26 ,27] ,saveDC :[16 ,17]},
    { cr:"11", xp :7_200 ,prof :6 ,ac :[13 ,15] ,hpRange :[361 ,390] ,attackBonus :[7 ,8] ,dmgRange :[28 ,29] ,saveDC :[17 ,18]},
    { cr:"12", xp :8_400 ,prof :6 ,ac :[13 ,15] ,hpRange :[391 ,420] ,attackBonus :[7 ,8] ,dmgRange :[30 ,31] ,saveDC :[17 ,18]},
    { cr:"13", xp :9_000 ,prof :6 ,ac :[13 ,15] ,hpRange :[421 ,450] ,attackBonus :[7 ,8] ,dmgRange :[32 ,33] ,saveDC :[17 ,18]},
    { cr:"14", xp :9_800, prof: 6, ac: [13, 15], hpRange: [451, 480], attackBonus: [7, 8], dmgRange: [34, 35], saveDC: [17, 18]},
    { cr:"15", xp: 10_500, prof: 7, ac: [13, 15], hpRange: [481, 510], attackBonus: [8, 9], dmgRange: [36, 37], saveDC: [18, 19]},
    { cr:"16", xp: 11_200, prof: 7, ac: [13, 15], hpRange: [511, 540], attackBonus: [8, 9], dmgRange: [38, 39], saveDC: [18, 19]},
    { cr:"17", xp: 12_000, prof: 7, ac: [13, 15], hpRange: [541, 570], attackBonus: [8, 9], dmgRange: [40, 41], saveDC: [18, 19]},
    { cr:"18", xp: 13_000, prof: 7, ac:[13 ,15] ,hpRange:[571 ,600] ,attackBonus:[8 ,9] ,dmgRange:[42 ,43], saveDC:[18 ,19]},
    { cr:"19", xp: 14_000, prof: 8, ac:[13 ,15] ,hpRange:[601 ,630] ,attackBonus:[9 ,10] ,dmgRange:[44 ,45], saveDC:[19 ,20]},
    { cr:"20", xp: 15_000, prof: 8, ac:[13 ,15] ,hpRange:[631 ,660] ,attackBonus:[9 ,10] ,dmgRange:[46 ,47], saveDC:[19 ,20]},
    { cr:"21", xp: 16_000, prof: 8, ac:[13 ,15] ,hpRange:[661 ,690] ,attackBonus:[9 ,10] ,dmgRange:[48 ,49], saveDC:[19 ,20]},
    { cr:"22", xp: 17_000, prof: 8, ac:[13 ,15] ,hpRange:[691 ,720] ,attackBonus:[9 ,10] ,dmgRange:[50 ,51], saveDC:[19 ,20]},
    { cr:"23", xp: 18_000, prof: 9, ac:[13 ,15] ,hpRange:[721,750] ,attackBonus:[10,11], dmgRange:[52,53], saveDC:[20,21]},
    { cr:"24", xp: 19_000, prof: 9, ac:[13, 15], hpRange: [751,780], attackBonus: [10,11], dmgRange: [54,55], saveDC: [20,21]},
    { cr:"25", xp: 20_000, prof: 9, ac:[13, 15], hpRange: [781,810], attackBonus: [10,11], dmgRange: [56,57], saveDC: [20,21]},
    { cr:"26", xp: 21_000, prof: 9, ac:[13, 15], hpRange: [811,840], attackBonus: [10,11], dmgRange: [58,59], saveDC: [20,21]},
    { cr:"27", xp: 22_000, prof: 10, ac:[13, 15], hpRange: [841,870], attackBonus: [11,12], dmgRange: [60,61], saveDC: [21,22]},
    { cr:"28", xp: 23_000, prof: 10, ac:[13, 15], hpRange: [871,900], attackBonus: [11,12], dmgRange: [62,63], saveDC: [21,22]},
    { cr:"29", xp: 24_000, prof: 10, ac:[13, 15], hpRange: [901,930], attackBonus: [11,12], dmgRange: [64,65], saveDC: [21,22]},
    { cr:"30", xp: 25_000, prof: 10, ac:[13, 15], hpRange: [931,960], attackBonus: [11,12], dmgRange: [66,67], saveDC: [21,22]}
];

// Export the CR_TABLE for use in other modules and files
export { CR_TABLE };