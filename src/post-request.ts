// Get all Rail IDs captured from API-1
let railIds = JSON.parse(
    pm.collectionVariables.get("railIds") || "[]"
);

// Current index
let railIndex = parseInt(
    pm.collectionVariables.get("railIndex") || "0"
);

// Current Rail ID
let currentRailId = railIds[railIndex];

// Store for URL substitution
pm.collectionVariables.set(
    "railId",
    currentRailId
);

console.log("====================================");
console.log("Current Rail Index : " + railIndex);
console.log("Current Rail ID : " + currentRailId);
console.log("Total Rail IDs : " + railIds.length);
console.log("====================================");