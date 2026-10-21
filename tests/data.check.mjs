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
assert.ok(content.includes("13:00 WIB - Selesai"), "Time must start at 13:00");
assert.ok(content.includes("2026-10-24T13:00:00+07:00"), "Countdown ISO date must be 13:00");
assert.ok(content.includes("Rumah Fathan Gembol Sari"), "Location name must be Rumah Fathan Gembol Sari");
assert.ok(content.includes("ANG3kz1MD9VGvnw4A"), "Maps URL must include updated link");
assert.ok(content.includes("2780995389"), "BCA account must be 2780995389");
assert.ok(content.includes("1320032762412"), "Mandiri account must be 1320032762412");
assert.ok(content.includes("08211322021"), "GoPay account must be 08211322021");
assert.ok(content.includes("COMING SOON"), "Rundown status must be COMING SOON");
assert.ok(content.includes("gallery"), "Data must contain photo gallery");

// QRIS removed per client request: no field, no asset, no component reference.
assert.ok(!content.includes("qrisImage"), "Data must not reference a QRIS image");
assert.ok(!fs.existsSync(path.resolve("public/qris.jpeg")), "public/qris.jpeg must not exist");
assert.ok(!fs.existsSync(path.resolve("public/qris-sample.svg")), "public/qris-sample.svg must not exist");

const envelope = fs.readFileSync(path.resolve("src/components/DigitalEnvelope.tsx"), "utf8");
assert.ok(!/qris/i.test(envelope), "DigitalEnvelope must not contain any QRIS UI");

const page = fs.readFileSync(path.resolve("src/app/page.tsx"), "utf8");
assert.ok(!page.includes("qrisImage"), "Page must not pass a QRIS image prop");

const audioFile = path.resolve("public/birthday-song.mp3");
assert.ok(fs.existsSync(audioFile), "public/birthday-song.mp3 must exist");

console.log("✓ All updated birthday data, audio, and QRIS-removal assertions passed!");
