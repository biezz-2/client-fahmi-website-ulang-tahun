import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

const dataFile = path.resolve("src/data/birthdayData.ts");
assert.ok(fs.existsSync(dataFile), "birthdayData.ts must exist");

const content = fs.readFileSync(dataFile, "utf8");
assert.ok(content.includes("MUHAMMAD FATHAN KAHFI PUTRA"), "Data must contain full name MUHAMMAD FATHAN KAHFI PUTRA");
assert.ok(content.includes("Fathan"), "Data must contain nickname Fathan");
assert.ok(content.includes("age: 1"), "Age must be 1");
assert.ok(content.includes("Sabtu, 24 Oktober 2026"), "Date must be Sabtu, 24 Oktober 2026");
assert.ok(content.includes("Rumah Fathan"), "Location name must be Rumah Fathan");
assert.ok(content.includes("Gembol Sari"), "Address must include Gembol Sari");
assert.ok(content.includes("2780995389"), "BCA account must be 2780995389");
assert.ok(content.includes("08211322021"), "GoPay account must be 08211322021");
assert.ok(content.includes("Ke Runding Hela"), "Rundown status must be Ke Runding Hela");
assert.ok(content.includes("qrisImage"), "Data must contain qrisImage");
assert.ok(content.includes("gallery"), "Data must contain photo gallery");

console.log("✓ All updated birthday data assertions passed!");
