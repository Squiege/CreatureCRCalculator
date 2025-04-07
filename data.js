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
    { cr: "1/2", xp: 100, prof: 2, ac: 13, hpRange: [50, 70], attackBonus: 3, dmgRange: [6, 8], saveDC: 13 },
    { cr: "1", xp: 200, prof: 2, ac: 13, hpRange: [71, 90], attackBonus: 3, dmgRange: [9, 14], saveDC: 13 },
    { cr: "2", xp: 450, prof: 3, ac: 13, hpRange: [91, 120], attackBonus: 3, dmgRange: [15, 20], saveDC: 13 },
    { cr: "3", xp: 700, prof: 3, ac: 13, hpRange: [121, 150], attackBonus: 4, dmgRange: [21, 26], saveDC: 13 },
    { cr: "4", xp: 1_100, prof: 4, ac: 14, hpRange: [151, 180], attackBonus: 5, dmgRange: [27, 32], saveDC: 14 },
    { cr: "5", xp: 1_800, prof: 4, ac: 15, hpRange: [181, 210], attackBonus: 6, dmgRange: [33, 38], saveDC: 15 },
    { cr: "6", xp: 2_300, prof: 4, ac: 15, hpRange: [211, 240], attackBonus: 6, dmgRange: [39, 44], saveDC: 15 },
    { cr: "7", xp: 2_900, prof: 5, ac: 15, hpRange:[241 ,270], attackBonus: 6, dmgRange:[45 ,50], saveDC: 15 },
    { cr:"8", xp :3_900 ,prof :5 ,ac: 16 ,hpRange :[271 ,300] ,attackBonus : 7 ,dmgRange :[51 ,56] ,saveDC : 16},
    { cr:"9" , xp :5_000 ,prof :5 ,ac: 16 ,hpRange :[301 ,330] ,attackBonus : 7 ,dmgRange :[57 ,62] ,saveDC : 16},
    { cr:"10", xp :5_900 ,prof :5 ,ac: 17 ,hpRange :[331 ,360] ,attackBonus : 7 ,dmgRange :[63 ,68] ,saveDC : 16},
    { cr:"11", xp :7_200 ,prof :6 ,ac: 17 ,hpRange :[361 ,390] ,attackBonus : 8 ,dmgRange :[69 ,74] ,saveDC : 17},
    { cr:"12", xp :8_400 ,prof :6 ,ac: 17 ,hpRange :[391 ,420] ,attackBonus : 8 ,dmgRange :[75 ,80] ,saveDC : 18},
    { cr:"13", xp :9_000 ,prof :6 ,ac: 18 ,hpRange :[421 ,450] ,attackBonus : 8 ,dmgRange :[81 ,86] ,saveDC : 18},
    { cr:"14", xp :9_800, prof: 6, ac: 18, hpRange: [451, 480], attackBonus: 8, dmgRange: [87, 92], saveDC:  18},
    { cr:"15", xp: 10_500, prof: 7, ac: 18, hpRange: [481, 510], attackBonus: 8, dmgRange: [93, 98], saveDC:  18},
    { cr:"16", xp: 11_200, prof: 7, ac: 18, hpRange: [511, 540], attackBonus: 9, dmgRange: [99, 104], saveDC:  18},
    { cr:"17", xp: 12_000, prof: 7, ac: 19, hpRange: [541, 570], attackBonus: 10, dmgRange: [105, 110], saveDC: 19},
    { cr:"18", xp: 13_000, prof: 7, ac: 19 ,hpRange:[571 ,600] ,attackBonus: 10 ,dmgRange:[111 ,116], saveDC: 19},
    { cr:"19", xp: 14_000, prof: 8, ac: 19 ,hpRange:[601 ,630] ,attackBonus: 10 ,dmgRange:[117 ,122], saveDC: 19},
    { cr:"20", xp: 15_000, prof: 8, ac: 19 ,hpRange:[631 ,660] ,attackBonus: 10 ,dmgRange:[123 ,140], saveDC: 19},
    { cr:"21", xp: 16_000, prof: 8, ac: 19 ,hpRange:[661 ,690] ,attackBonus: 11 ,dmgRange:[141 ,158], saveDC: 20},
    { cr:"22", xp: 17_000, prof: 8, ac: 19 ,hpRange:[691 ,720] ,attackBonus: 11 ,dmgRange:[159 ,176], saveDC: 20},
    { cr:"23", xp: 18_000, prof: 9, ac: 19 ,hpRange:[721,750] ,attackBonus: 11, dmgRange:[177 ,194], saveDC: 20},
    { cr:"24", xp: 19_000, prof: 9, ac: 19, hpRange: [751,780], attackBonus: 11, dmgRange: [195 ,212], saveDC: 21},
    { cr:"25", xp: 20_000, prof: 9, ac: 19, hpRange: [781,810], attackBonus: 12, dmgRange: [213 ,230], saveDC: 21},
    { cr:"26", xp: 21_000, prof: 9, ac: 19, hpRange: [811,840], attackBonus: 12, dmgRange: [231 ,248], saveDC: 21},
    { cr:"27", xp: 22_000, prof: 10, ac: 19, hpRange: [841,870], attackBonus: 13, dmgRange: [249 ,266], saveDC: 22},
    { cr:"28", xp: 23_000, prof: 10, ac: 19, hpRange: [871,900], attackBonus: 13, dmgRange: [267 ,284], saveDC: 22},
    { cr:"29", xp: 24_000, prof: 10, ac: 19, hpRange: [901,930], attackBonus: 13, dmgRange: [285 ,302], saveDC: 22},
    { cr:"30", xp: 25_000, prof: 10, ac: 19, hpRange: [931,960], attackBonus: 14, dmgRange: [303 ,320], saveDC: 23}
];

// Export the CR_TABLE for use in other modules and files
export { CR_TABLE };