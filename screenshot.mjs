import puppeteer from "puppeteer";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";
const dir = join(process.cwd(), "temporary screenshots");

// Auto-increment: find the next available number
const existing = existsSync(dir) ? readdirSync(dir).filter((f) => f.startsWith("screenshot-")) : [];
const numbers = existing.map((f) => parseInt(f.match(/screenshot-(\d+)/)?.[1] || "0", 10));
const next = numbers.length ? Math.max(...numbers) + 1 : 1;
const filename = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`;
const outPath = join(dir, filename);

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle2", timeout: 15000 });
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Screenshot saved: ${outPath}`);
