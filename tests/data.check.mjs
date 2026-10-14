import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

const dataFile = path.resolve("src/data/birthdayData.ts");
assert.ok(fs.existsSync(dataFile), "birthdayData.ts must exist");

const content = fs.readFileSync(dataFile, "utf8");
assert.ok(content.includes("Fahmi"), "Data must contain Fahmi");
assert.ok(content.includes("qrisImage"), "Data must contain qrisImage");
assert.ok(content.includes("bankAccounts"), "Data must contain bank accounts");
assert.ok(content.includes("gallery"), "Data must contain photo gallery");

console.log("✓ All birthday data assertions passed!");
